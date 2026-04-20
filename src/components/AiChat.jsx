import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import chatData from '../data/chatResponses.json';

function findResponse(input) {
  const lower = input.toLowerCase().trim();
  for (const r of chatData.responses) {
    if (r.keywords.some(k => lower.includes(k))) {
      return r.answer;
    }
  }
  return chatData.fallback;
}

function formatMessage(text) {
  // Convert **bold** to <strong> and \n to <br>
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: chatData.greeting },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { role: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(text);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? 'scale-0 pointer-events-none' : 'scale-100'
        }`}
        style={{
          background: 'linear-gradient(135deg, #00f0ff, #a855f7)',
          boxShadow: '0 0 25px rgba(0, 240, 255, 0.4), 0 4px 20px rgba(0,0,0,0.3)',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={22} className="text-[#0a0a0f]" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-4rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'rgba(8, 8, 18, 0.95)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(0, 240, 255, 0.15)',
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.1), 0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5"
              style={{ background: 'linear-gradient(135deg, rgba(0,240,255,0.05), rgba(168,85,247,0.05))' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                  <Sparkles size={16} className="text-[#0a0a0f]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-[Orbitron]">Ask About Abhi</h3>
                  <span className="text-[10px] text-neon-green flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-muted hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-1 ${
                    msg.role === 'assistant'
                      ? 'bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/20'
                      : 'bg-white/10 border border-white/10'
                  }`}>
                    {msg.role === 'assistant' ? <Bot size={12} className="text-neon-cyan" /> : <User size={12} className="text-white/60" />}
                  </div>
                  <div
                    className={`chat-msg text-[13px] leading-relaxed px-3.5 py-2.5 rounded-xl max-w-[85%] ${
                      msg.role === 'assistant'
                        ? 'bg-white/5 text-text-primary border border-white/5 rounded-tl-sm'
                        : 'bg-neon-cyan/10 text-white border border-neon-cyan/10 rounded-tr-sm'
                    }`}
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                  />
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/20 flex items-center justify-center shrink-0 mt-1">
                    <Bot size={12} className="text-neon-cyan" />
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-xl rounded-tl-sm px-4 py-3 flex gap-1.5">
                    {[0, 1, 2].map(d => (
                      <motion.div
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-neon-cyan/50"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Suggestions (show only at start) */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {chatData.suggestions.map(s => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-[11px] px-3 py-1.5 rounded-full bg-neon-cyan/5 border border-neon-cyan/15 text-neon-cyan/70 hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-white/5">
              <div className="flex items-center gap-2 bg-white/5 rounded-xl border border-white/10 focus-within:border-neon-cyan/30 transition-colors px-3">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-text-muted/50 py-3 outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-neon-cyan/50 hover:text-neon-cyan hover:bg-neon-cyan/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                >
                  <Send size={15} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
