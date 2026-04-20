import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Sparkles } from 'lucide-react';
import profile from '../data/profile.json';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] animate-pulse-neon pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/8 rounded-full blur-[100px] animate-pulse-neon pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Rotating ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-neon-cyan/5 rounded-full animate-rotate-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-neon-purple/5 rounded-full animate-rotate-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-neon-cyan/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-xs text-text-muted tracking-wide uppercase font-[Orbitron]">Available for Opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-[Orbitron] text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4"
        >
          <span className="block text-white">{profile.name.split(' ')[0]}</span>
          <span className="block bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
            {profile.name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles size={18} className="text-neon-cyan" />
          <p className="text-lg sm:text-xl text-text-muted font-light tracking-wide">
            {profile.role}
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-1.5 mb-8"
        >
          <MapPin size={14} className="text-neon-cyan/60" />
          <span className="text-sm text-text-muted/60">{profile.location}</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-xl font-semibold text-sm overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <span className="relative text-surface-dark font-bold tracking-wide">View Projects</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl font-semibold text-sm glass border border-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan/40 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-neon-cyan/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
