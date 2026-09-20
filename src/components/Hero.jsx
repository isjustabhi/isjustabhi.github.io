import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import profile from '../data/profile.json';
import { useTypewriter } from '../hooks/useTypewriter';

const roles = ['Data Scientist', 'AI Enthusiast', 'Bioinformatics', 'Psychology × Health'];
const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center px-5 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan/[0.04] via-transparent to-bg pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full fx-panel text-[11px] font-mono text-cyan mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
          </span>
          Available · OPT + STEM OPT
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-sm font-mono text-muted mb-3"
        >
          {profile.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.15, duration: 0.75, ease }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink leading-[1.05]"
        >
          {profile.shortName.split(' ')[0]}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue to-violet text-glow">
            {profile.shortName.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="mt-5 text-lg sm:text-xl text-muted flex items-center gap-2 min-h-[1.75rem]"
        >
          <Sparkles size={16} className="text-cyan shrink-0" />
          <span>
            <span className="text-ink/50">Building as </span>
            <span className="text-cyan font-medium">{typed}</span>
            <span className="text-cyan/60 animate-pulse">|</span>
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.55 }}
          className="mt-5 text-base text-muted max-w-xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a href="#projects" className="btn-fx">
            View projects <ArrowRight size={15} />
          </a>
          <a href="#contact" className="btn-fx-ghost">Contact</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-fx-ghost">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-fx-ghost">GitHub</a>
        </motion.div>
      </div>
    </section>
  );
}
