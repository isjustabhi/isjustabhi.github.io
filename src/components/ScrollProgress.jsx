import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const progressMv = useMotionValue(0);
  const scaleX = useSpring(progressMv, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      progressMv.set(total > 0 ? doc.scrollTop / total : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [progressMv]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-gradient-to-r from-cyan to-blue"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
