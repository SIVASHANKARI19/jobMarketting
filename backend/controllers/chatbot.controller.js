const { v4: uuidv4 } = require('uuid');
const path = require('path');

// Simple controller that returns a mock AI reply. Replace with real AI integration later.
exports.handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'message is required and must be a string' });
    }

    // Very small mock logic - can be replaced with call to Python service or external LLM
    const lower = message.toLowerCase();
    // greetings
    const greetings = ['hi', 'hello', 'hey', 'heyyy', 'heyy', 'hiya'];
    const isGreeting = greetings.some(g => lower === g || lower.startsWith(g + ' ') || lower.includes(' ' + g + ' '));

    let reply = "I'll look into that and suggest actionable next steps.";

    if (isGreeting) {
      reply = "Hey there! 👋 How can I help you today? You can ask about resumes, jobs, or recommended courses.";
    } else if (lower.includes('resume')) reply = 'Try focusing on clear achievements, quantifying impact, and aligning keywords with job descriptions.';
    else if (lower.includes('react')) reply = 'For React, consider: Meta Advanced React (Coursera), EpicReact.dev, and building a project with hooks + performance patterns.';
    else if (lower.includes('job')) reply = 'Your current skills align well with Frontend Developer and Full-Stack Junior roles. Improve JS depth and testing.';
    else if (lower.includes('course')) reply = 'Top picks: Advanced React, Node.js Backend, and SQL Fundamentals. Aim for 6-8 weeks of structured learning.';

    // Optionally: store chat to DB using Chatbot_Log model if present
    try {
      const Chatbot_Log = require(path.join(__dirname, '..', 'models', 'chatbot_log'));
      if (Chatbot_Log && Chatbot_Log.create) {
        // best-effort - don't block response
        Chatbot_Log.create({ chat_id: uuidv4(), user_message: message, bot_reply: reply }).catch(() => {});
      }
    } catch (e) {
      // ignore if model isn't available
    }

    return res.json({ reply });
  } catch (err) {
    console.error('chat error', err);
    return res.status(500).json({ error: 'internal error' });
  }
};
