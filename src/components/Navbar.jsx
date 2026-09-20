import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const items = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'fx-panel border-b border-line' : ''}`}>
      <nav className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-cyan tracking-tight">
          AV<span className="text-ink/40">.</span>
        </a>
        <div className="hidden md:flex gap-1">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="px-3 py-2 text-[13px] text-muted hover:text-cyan transition-colors">
              {i.label}
            </a>
          ))}
        </div>
        <button type="button" className="md:hidden p-2 text-muted" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden fx-panel border-t border-line">
            <div className="px-5 py-2 flex flex-col">
              {items.map((i) => (
                <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="py-3 text-sm text-muted hover:text-cyan border-b border-line/50 last:border-0">
                  {i.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
