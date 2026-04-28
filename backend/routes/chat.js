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
  if (process.env.GEMINI_API_KEY) {
    console.log(`GEMINI_API_KEY found in environment.`);
  } else {
    console.log('No GEMINI_API_KEY found in process.env!');
  }

  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_actual_gemini_api_key_here') {
    return res.json({ 
      text: "I'm ready to help, but I need a valid Gemini API Key! Please check your Vercel Environment Variables. 🚀" 
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
    
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: systemPrompt
    });

    // 1. Convert frontend roles to Gemini roles
    const allHistory = history.map(item => ({
      role: item.type === 'ai' ? 'model' : 'user',
      parts: [{ text: item.text }]
    }));

    // 2. Ensure history starts with 'user'
    const firstUserIdx = allHistory.findIndex(h => h.role === 'user');
    let validHistory = firstUserIdx !== -1 ? allHistory.slice(firstUserIdx) : [];

    // 3. Ensure history alternates
    let formattedHistory = [];
    let lastRole = null;
    for (const item of validHistory) {
      if (item.role !== lastRole) {
        formattedHistory.push(item);
        lastRole = item.role;
      }
    }

    const chat = model.startChat({
      history: formattedHistory.slice(-10),
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    
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

