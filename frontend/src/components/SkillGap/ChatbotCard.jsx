import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Settings, Sparkles } from 'lucide-react';

// Lightweight floating chatbot card. Tailwind-only, no backend.
// Props allow customization without editing the component.
const ChatbotCard = ({
  title = 'Career Assistant',
  placeholder = 'Type your question...',
  accent = 'blue', // tailwind color name: blue, indigo, emerald, purple
  welcome = 'Hi! I can help analyze your skills and suggest next steps.',
  suggestions = [
    'How do I improve my resume score?',
    'Suggest courses for React',
    'What jobs match my skills?',
  ],
  zIndex = 50,
  initialOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: welcome },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    // Mock assistant response
    setTimeout(() => {
      const reply = getMockReply(text);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    }, 400);
  };

  const getMockReply = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('resume')) return 'Try focusing on clear achievements, quantifying impact, and aligning keywords with job descriptions.';
    if (lower.includes('react')) return 'For React, consider: Meta Advanced React (Coursera), EpicReact.dev, and building a project with hooks + performance patterns.';
    if (lower.includes('job')) return 'Your current skills align well with Frontend Developer and Full-Stack Junior roles. Improve JS depth and testing.';
    if (lower.includes('course')) return 'Top picks: Advanced React, Node.js Backend, and SQL Fundamentals. Aim for 6-8 weeks of structured learning.';
    return "I'll look into that and suggest actionable next steps.";
  };

  const accentRing = `ring-${accent}-200`;
  const accentBg = `bg-${accent}-600`;
  const accentHover = `hover:bg-${accent}-700`;
  const accentText = `text-${accent}-600`;

  return (
    <div className={`fixed bottom-4 right-4 z-[${zIndex}]`}>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          aria-label="Open chat"
          onClick={() => setIsOpen(true)}
          className={`group ${accentBg} text-white p-4 rounded-full shadow-lg ${accentHover} transition-transform hover:scale-105 focus:outline-none focus:ring-4 ${accentRing}`}
        >
          <Sparkles className="h-6 w-6" />
        </button>
      )}

      {/* Card */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-400">AI Assistant</p>
              <h4 className="text-base font-semibold text-gray-900">{title}</h4>
            </div>
            <div className="flex items-center space-x-1">
              <button className={`p-2 rounded-lg text-gray-500 hover:${accentText} hover:bg-gray-100 transition-colors`} aria-label="Preferences">
                <Settings className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-lg text-gray-500 hover:text-red-600 hover:bg-gray-100 transition-colors" aria-label="Close chat" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                <div className={`${m.role === 'assistant' ? 'bg-white border border-gray-200' : accentBg} ${m.role === 'assistant' ? 'text-gray-800' : 'text-white'} px-3 py-2 rounded-2xl max-w-[80%] shadow-sm`}> 
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          {suggestions?.length > 0 && (
            <div className="px-4 pt-3 pb-2 border-t border-gray-100 bg-white">
              <p className="text-xs text-gray-500 mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <button key={i} onClick={() => setInput(s)} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Composer */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                placeholder={placeholder}
                className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
              <button onClick={handleSend} className={`${accentBg} ${accentHover} text-white p-2 rounded-xl shadow-sm transition-colors`} aria-label="Send message">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotCard;


