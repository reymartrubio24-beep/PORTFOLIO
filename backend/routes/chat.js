const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const fs = require('fs');
const path = require('path');

// Helper to read data files - use process.cwd() for Vercel stability
const getData = (filename) => {
  try {
    // On Vercel, process.cwd() is the root of the project
    const filePath = path.join(process.cwd(), 'backend', 'data', filename);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf8');
    }
    console.warn(`Data file not found at: ${filePath}`);
    return "Data not available.";
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    return "Data not available.";
  }
};

router.post('/', async (req, res) => {
  const { message, history = [] } = req.body;

  // Debug logging for Vercel
  const apiKey = process.env.GEMINI_API_KEY;
  const hasKey = !!apiKey && apiKey !== 'your_actual_gemini_api_key_here';
  
  if (!hasKey) {
    let diagnostic = "Missing GEMINI_API_KEY.";
    if (apiKey === 'your_actual_gemini_api_key_here') diagnostic = "You are still using the placeholder 'your_actual_...'";
    if (apiKey && apiKey.startsWith('GEMINI_API_KEY=')) diagnostic = "Your Vercel value accidentally includes the 'GEMINI_API_KEY=' prefix. Please remove it!";
    
    return res.json({ 
      text: `I'm ready to help, but I need a valid Gemini API Key! 🚀\n\n**Diagnostic:** ${diagnostic}\n\n**How to fix:** Go to Vercel Settings -> Environment Variables and ensure GEMINI_API_KEY is set correctly for 'Production'.` 
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Load data using the improved helper
    const experienceData = getData('experience.json');
    const projectsData = getData('projects.json');
    const certsData = getData('certifications.json');

    const systemPrompt = `
      You are Rey-Dev, a world-class AI & Software Engineer from the Philippines. 
      You are chatting with a visitor on your portfolio website.
      Your goal is to be helpful, professional, and personality-driven. Use emojis naturally.
      
      HERE IS YOUR PROFESSIONAL BACKGROUND:
      - Experience: ${experienceData}
      - Key Projects: ${projectsData}
      - Certifications: ${certsData}
      - Expertise: React, Node.js, Python, Generative AI, PHP, and DevOps.
      - Personality: Innovative, proactive, and friendly.

      INSTRUCTIONS:
      1. Answer questions strictly based on the provided background.
      2. If a visitor asks about your projects or work, use the specific details from the data.
      3. Keep responses concise (under 3 sentences unless asked for more).
      4. Always stay in character as Rey-Dev.
    `;
    
    // Initialize with stable v1 API version
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY, { apiVersion: 'v1' });

    // 1. Convert frontend roles to Gemini roles
    const allHistory = history.map(item => ({
      role: item.type === 'ai' ? 'model' : 'user',
      parts: [{ text: item.text }]
    }));

    // List of models to try in order of preference (Stable names)
    const modelsToTry = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-1.0-pro"];
    let lastError = null;
    let text = "";

    for (const modelName of modelsToTry) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });

        // Prepend the System Prompt as the very first context
        const contextHistory = [
          {
            role: "user",
            parts: [{ text: `INSTRUCTIONS: ${systemPrompt}\n\nPlease acknowledge these instructions and stay in character as Rey-Dev.` }]
          },
          {
            role: "model",
            parts: [{ text: "Understood. I am Rey-Dev, and I will answer questions concisely and professionally based on my background. How can I help you today? 🚀" }]
          },
          ...allHistory
        ];

        // Ensure history alternates and starts correctly
        const firstUserIdx = contextHistory.findIndex(h => h.role === 'user');
        let validHistory = firstUserIdx !== -1 ? contextHistory.slice(firstUserIdx) : [];

        let formattedHistory = [];
        let lastRole = null;
        for (const item of validHistory) {
          if (item.role !== lastRole) {
            formattedHistory.push(item);
            lastRole = item.role;
          }
        }

        const chat = model.startChat({
          history: formattedHistory.slice(-12),
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        text = response.text();
        
        break; // Successfully used a model
      } catch (err) {
        console.warn(`Model ${modelName} failed:`, err.message);
        lastError = err;
      }
    }

    if (!text && lastError) {
      throw lastError; // If all models failed, throw the last error
    }
    
    res.json({ text });

  } catch (err) {
    console.error('Chat API Error:', err);
    res.status(500).json({ 
      error: 'Failed to generate AI response.', 
      details: err.message,
      type: err.constructor.name
    });
  }
});

module.exports = router;

