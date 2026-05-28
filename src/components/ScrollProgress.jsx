import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const progressMv = useMotionValue(0);
  const scaleX = useSpring(progressMv, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const p = total > 0 ? doc.scrollTop / total : 0;
      setProgress(p);
      progressMv.set(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [progressMv]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink shadow-[0_0_12px_rgba(0,240,255,0.5)]"
        style={{ scaleX }}
      />
      <div className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col items-center gap-1 font-mono text-[10px] text-neon-cyan/40 pointer-events-none">
        <span className="text-neon-cyan/70 tabular-nums">{Math.round(progress * 100).toString().padStart(3, '0')}</span>
        <span>SCROLL</span>
      </div>
    </>
  );
}
