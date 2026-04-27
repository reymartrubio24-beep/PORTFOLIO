const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// genAI client initialization
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const fs = require('fs');
const path = require('path');

// Helper to read data files
const getData = (filename) => {
  try {
    const filePath = path.join(__dirname, '../data', filename);
    return fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    return "Data not available.";
  }
};

router.post('/', async (req, res) => {
  const { message, history = [] } = req.body;

  if (process.env.GEMINI_API_KEY) {
    console.log(`Key found. Ends with: ...${process.env.GEMINI_API_KEY.slice(-4)}`);
  } else {
    console.log('No Gemini API Key found in process.env!');
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.json({ 
      text: "I'm ready to help, but I need my Gemini API Key! Please add it to the `.env` file in the backend folder to activate my full intelligence. 🚀" 
    });
  }

  try {
    // Load Anne B's specific data
    const experienceData = getData('experience.json');
    const projectsData = getData('projects.json');
    const certsData = getData('certifications.json');

    // Enhanced System Prompt with REAL INFO
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

    // 3. Ensure history alternates (skips consecutive same roles)
    let formattedHistory = [];
    let lastRole = null;
    for (const item of validHistory) {
      if (item.role !== lastRole) {
        formattedHistory.push(item);
        lastRole = item.role;
      }
    }

    const chat = model.startChat({
      history: formattedHistory.slice(-10), // Context window
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    console.log(`Generated AI response: ${text.slice(0, 50)}...`);
    res.json({ text });
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: 'Failed to generate AI response.' });
  }
});

module.exports = router;
