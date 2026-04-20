import { motion } from 'framer-motion';
import { Mail, ExternalLink, ArrowUpRight, MapPin, Code2 } from 'lucide-react';
import profile from '../data/profile.json';
import { useInView } from '../hooks/useInView';

const socials = [
  { icon: Code2, label: 'GitHub', href: profile.github },
  { icon: ExternalLink, label: 'LinkedIn', href: profile.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
];

export default function Contact() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/[0.03] to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="font-[Orbitron] text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-neon-cyan/30 text-lg mr-2 font-mono">05.</span>
            Let's <span className="text-neon-cyan neon-text">Connect</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent mt-4 mx-auto" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-text-muted mt-6 mb-8 max-w-md mx-auto leading-relaxed">
          Open to AI/ML roles, research collaborations, and data challenges. Let's build something impactful together.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="flex items-center justify-center gap-2 mb-10">
          <MapPin size={13} className="text-neon-cyan/40" />
          <span className="text-xs text-text-muted/50 font-mono">{profile.location}</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap items-center justify-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 px-6 py-3.5 glass rounded-xl border border-white/[0.06] hover:border-neon-cyan/30 hover:bg-neon-cyan/[0.05] hover:shadow-[0_0_25px_rgba(0,240,255,0.1)] transition-all duration-300">
              <Icon size={18} className="text-text-muted group-hover:text-neon-cyan transition-colors" />
              <span className="text-sm text-text-muted group-hover:text-white transition-colors">{label}</span>
              <ArrowUpRight size={14} className="text-text-muted/30 group-hover:text-neon-cyan/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="mt-8">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl font-semibold text-sm relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple blur-2xl opacity-25 group-hover:opacity-50 transition-opacity" />
            <Mail size={16} className="relative text-surface-dark" />
            <span className="relative text-surface-dark font-bold tracking-wider">Say Hello</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
