import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Braces } from 'lucide-react';
import profile from '../data/profile.json';
import { useInView } from '../hooks/useInView';

const highlights = [
  { icon: Cpu, label: 'AI/ML', desc: 'LLMs, NLP, RAG' },
  { icon: Database, label: 'Data', desc: 'Pipelines & Analytics' },
  { icon: Terminal, label: 'Engineering', desc: 'Full-stack Dev' },
  { icon: Braces, label: 'Research', desc: 'Published Work' },
];

export default function About() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" className="section-padding relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12">
          <h2 className="font-[Orbitron] text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-neon-cyan/40 text-lg mr-2 font-mono">01.</span>
            About <span className="text-neon-cyan neon-text">Me</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-neon-cyan to-transparent mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="md:col-span-3">
            <div className="glass rounded-2xl p-6 sm:p-8 neon-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-text-muted font-mono">about_abhi.md</span>
              </div>
              <p className="text-text-muted leading-relaxed text-[15px]">{profile.bio}</p>
              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-xs text-text-muted/60 font-mono">
                  <span className="text-neon-cyan/60">const</span> focus = [<span className="text-neon-green">"ML"</span>, <span className="text-neon-green">"NLP"</span>, <span className="text-neon-green">"LLMs"</span>, <span className="text-neon-green">"Data Engineering"</span>];
                </p>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <motion.div key={h.label} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }} whileHover={{ scale: 1.05, y: -4 }} className="glass rounded-xl p-4 text-center cursor-default group hover:border-neon-cyan/30 transition-all duration-300">
                <h.icon size={24} className="mx-auto mb-2 text-neon-cyan/70 group-hover:text-neon-cyan transition-colors" />
                <p className="text-sm font-semibold text-white/90">{h.label}</p>
                <p className="text-xs text-text-muted mt-1">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
