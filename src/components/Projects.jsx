import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Zap, ChevronRight, Sparkles, BarChart3, Brain, Layers } from 'lucide-react';
import projects from '../data/projects.json';
import { useInView } from '../hooks/useInView';

const categories = ['All', 'AI-Powered Apps', 'ML Projects', 'Viz Projects'];

const catGradients = {
  'AI-Powered Apps': 'from-neon-cyan to-neon-purple',
  'ML Projects': 'from-neon-green to-neon-cyan',
  'Viz Projects': 'from-neon-orange to-neon-pink',
};
const catIcons = {
  'AI-Powered Apps': Brain,
  'ML Projects': Sparkles,
  'Viz Projects': BarChart3,
};
const statusCfg = {
  production: { label: 'Live', cls: 'bg-neon-green/15 text-neon-green border-neon-green/25 shadow-[0_0_12px_rgba(52,211,153,0.15)]' },
  research: { label: 'Research', cls: 'bg-neon-purple/15 text-neon-purple border-neon-purple/25' },
  completed: { label: 'Completed', cls: 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/25' },
};

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.1);
  const status = statusCfg[project.status] || statusCfg.completed;
  const gradient = catGradients[project.category] || 'from-neon-cyan to-neon-purple';
  const Icon = catIcons[project.category] || Layers;
  const isLiveApp = !project.github.includes('github.com');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      layout
      className="group relative"
    >
      <div className="relative glass rounded-2xl overflow-hidden gradient-border h-full flex flex-col holo-shimmer">
        <div className={`h-[3px] bg-gradient-to-r ${gradient}`} />

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 flex items-center justify-center border border-neon-cyan/10 group-hover:border-neon-cyan/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300"
              >
                <Icon size={20} className="text-neon-cyan" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">{project.title}</h3>
                <span className="text-[11px] text-text-muted font-mono">{project.category}</span>
              </div>
            </div>
            <span className={`text-[10px] px-3 py-1 rounded-full border font-semibold tracking-wider ${status.cls}`}>{status.label}</span>
          </div>

          <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{project.description}</p>

          <div className="flex items-start gap-2 mb-4 p-3 rounded-xl bg-neon-cyan/[0.04] border border-neon-cyan/10 group-hover:border-neon-cyan/20 transition-colors">
            <Zap size={14} className="text-neon-cyan mt-0.5 shrink-0" />
            <p className="text-xs text-neon-cyan/80 leading-relaxed">{project.impact}</p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map(tech => (
              <span key={tech} className="text-[10px] px-2.5 py-1 rounded-lg bg-white/[0.04] text-text-muted border border-white/[0.06] hover:border-neon-cyan/25 hover:text-neon-cyan/90 hover:bg-neon-cyan/[0.04] transition-all duration-200 cursor-default">{tech}</span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-neon-cyan transition-all duration-200 group/link mt-auto py-2 px-3 -mx-3 rounded-lg hover:bg-neon-cyan/[0.05]"
          >
            {isLiveApp ? <ExternalLink size={15} /> : <Code2 size={15} />}
            <span>{isLiveApp ? 'View Live App' : 'View on GitHub'}</span>
            <ChevronRight size={14} className="group-hover/link:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.05);
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-neon-purple/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-neon-cyan/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <h2 className="font-[Orbitron] text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-neon-cyan/30 text-lg mr-2 font-mono">03.</span>
            Featured <span className="text-neon-cyan neon-text">Projects</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent mt-4 mx-auto" />
          <p className="text-text-muted text-sm mt-5 max-w-lg mx-auto">AI-powered apps, ML research, and data visualization — all built to ship.</p>
        </motion.div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 border ${active === cat ? 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.12)]' : 'bg-white/[0.02] text-text-muted border-white/[0.06] hover:border-white/15 hover:text-white/80'}`}>
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.35 }} className="grid md:grid-cols-2 gap-6">
            {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
