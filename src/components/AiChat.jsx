import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import chatData from '../data/chatResponses.json';

function findResponse(input) {
  const lower = input.toLowerCase().trim();
  for (const r of chatData.responses) {
    if (r.keywords.some((k) => lower.includes(k))) return r.answer;
  }
  return chatData.fallback;
}

function formatMessage(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', text: chatData.greeting }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: 'user', text: text.trim() }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', text: findResponse(text) }]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-5 right-5 z-50 w-12 h-12 rounded-xl btn-fx !p-0 justify-center ${isOpen ? 'hidden' : ''}`}
        aria-label="Open chat"
      >
        <MessageCircle size={18} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="fixed bottom-5 right-5 z-50 w-[360px] max-w-[calc(100vw-1.5rem)] h-[480px] max-h-[calc(100vh-3rem)] flex flex-col fx-panel fx-glow rounded-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-line">
              <p className="text-sm font-semibold text-ink">Ask about Abhi</p>
              <button type="button" onClick={() => setIsOpen(false)} className="p-1 text-muted hover:text-cyan" aria-label="Close">
                <X size={16} />
              </button>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-bg/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${msg.role === 'assistant' ? 'bg-cyan/15 border border-cyan/20' : 'bg-blue/20'}`}>
                    {msg.role === 'assistant' ? <Bot size={12} className="text-cyan" /> : <User size={12} className="text-ink" />}
                  </div>
                  <div
                    className={`chat-msg text-[13px] leading-relaxed px-3 py-2 rounded-xl max-w-[85%] ${
                      msg.role === 'assistant' ? 'bg-panel border border-line text-ink-soft' : 'bg-cyan/15 text-ink border border-cyan/20'
                    }`}
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                  />
                </div>
              ))}
              {isTyping && <p className="text-xs text-muted font-mono pl-8">…</p>}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2">
                  {chatData.suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => sendMessage(s)}
                      className="text-[11px] px-2.5 py-1 rounded-md border border-line text-muted hover:text-cyan hover:border-cyan/30"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
              className="p-3 border-t border-line flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                className="flex-1 text-sm bg-bg-2 px-3 py-2 rounded-lg border border-line outline-none focus:border-cyan/40 text-ink"
              />
              <button type="submit" disabled={!input.trim()} className="p-2 text-cyan disabled:opacity-30" aria-label="Send">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
