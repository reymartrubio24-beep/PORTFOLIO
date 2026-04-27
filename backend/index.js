require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const projectRoutes = require('./routes/projects');
const skillRoutes = require('./routes/skills');
const chatRoutes = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: true, // During development, true allows any origin
  credentials: true 
}));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/chat', chatRoutes);

// Shared experience and skills data serving through basic routes
app.get('/api/experience', (req, res) => {
  const experience = require('./data/experience.json');
  res.json(experience);
});

app.get('/api/certifications', (req, res) => {
  const certs = require('./data/certifications.json');
  res.json(certs);
});

app.get('/api/recommendations', (req, res) => {
  const recs = require('./data/recommendations.json');
  res.json(recs);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong on our end.' });
});

// Export the app for Vercel
module.exports = app;

// Only listen if not running as a serverless function
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  });
}

