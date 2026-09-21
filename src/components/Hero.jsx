import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import profile from '../data/profile.json';
import { useTypewriter } from '../hooks/useTypewriter';

const roles = ['Data Scientist', 'AI Enthusiast', 'Bioinformatics', 'Psychology × Health'];
const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const typed = useTypewriter(roles);
  const reduce = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center px-5 pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan/[0.05] via-transparent to-bg pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      <motion.div
        className="absolute right-[-8%] top-[18%] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border border-cyan/10 pointer-events-none"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      >
        <motion.span
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan shadow-[0_0_12px_#2ee6ff]"
          animate={reduce ? undefined : { scale: [1, 1.4, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
      </motion.div>
      <motion.div
        className="absolute right-[2%] top-[28%] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] rounded-full border border-blue/15 pointer-events-none"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="section-label !mb-6"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-55" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
          </span>
          Available · University of Arizona
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.08, duration: 0.8, ease }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.08]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.55 }}
          className="mt-5 text-sm font-mono text-muted"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.55 }}
          className="mt-4 text-lg sm:text-xl text-ink-soft min-h-[1.75rem]"
        >
          <span className="text-muted">Building as </span>
          <span className="text-cyan font-medium">{typed}</span>
          <span className="text-cyan/50 animate-pulse">|</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.55 }}
          className="mt-5 text-[15px] text-muted max-w-xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.55 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <motion.a
            href="#projects"
            className="btn-fx"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            View projects <ArrowRight size={15} />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-fx-ghost"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted/50 hover:text-cyan transition-colors"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to about"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
