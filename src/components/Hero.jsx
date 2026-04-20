import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import profile from '../data/profile.json';

const glitchVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden scan-line">
      {/* Orbs */}
      <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-neon-cyan/[0.04] rounded-full blur-[150px] animate-pulse-neon pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] bg-neon-purple/[0.06] rounded-full blur-[130px] animate-pulse-neon pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[60%] w-[300px] h-[300px] bg-neon-pink/[0.03] rounded-full blur-[100px] animate-pulse-neon pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-neon-cyan/[0.04] rounded-full animate-rotate-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-neon-purple/[0.05] rounded-full pointer-events-none" style={{ animation: 'rotate-slow 35s linear infinite reverse' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-neon-cyan/[0.03] rounded-full animate-rotate-slow pointer-events-none" style={{ animationDuration: '45s' }} />

      {/* Corner HUD decorations */}
      <div className="absolute top-6 left-6 text-[10px] font-mono text-neon-cyan/20 hidden md:block">
        <div>SYS.ONLINE</div>
        <div className="mt-1">v2.5.0 // PORTFOLIO_OS</div>
      </div>
      <div className="absolute top-6 right-6 text-[10px] font-mono text-neon-cyan/20 text-right hidden md:block">
        <div>LAT 32.2° N</div>
        <div className="mt-1">TUCSON.AZ</div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Status */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-neon-cyan/15 mb-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-green" />
          </span>
          <span className="text-[11px] text-text-muted tracking-[0.2em] uppercase font-[Orbitron]">Available for Opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={glitchVariants} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.2 }} className="font-[Orbitron] text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-5 leading-[0.95]">
          <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">{profile.name.split(' ')[0]}</span>
          <span className="block mt-2 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,240,255,0.2)]">
            {profile.name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex items-center justify-center gap-2.5 mb-5">
          <Sparkles size={18} className="text-neon-cyan animate-pulse" />
          <p className="text-lg sm:text-xl text-text-muted font-light tracking-widest uppercase" style={{ fontFamily: 'Orbitron' }}>{profile.role}</p>
        </motion.div>

        {/* Location */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center justify-center gap-1.5 mb-8">
          <MapPin size={13} className="text-neon-cyan/40" />
          <span className="text-xs text-text-muted/50 font-mono tracking-wider">{profile.location}</span>
        </motion.div>

        {/* Tagline */}
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">{profile.tagline}</motion.p>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.1 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="group relative px-10 py-4 rounded-2xl font-semibold text-sm overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple blur-2xl opacity-30 group-hover:opacity-60 transition-opacity" />
            <span className="relative text-surface-dark font-bold tracking-wider flex items-center gap-2">
              View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#contact" className="px-10 py-4 rounded-2xl font-semibold text-sm glass border border-neon-cyan/15 text-neon-cyan hover:bg-neon-cyan/[0.08] hover:border-neon-cyan/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-400">Get in Touch</a>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ChevronDown size={22} className="text-neon-cyan/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
