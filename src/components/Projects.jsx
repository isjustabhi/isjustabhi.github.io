import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Layers, Zap, ChevronRight } from 'lucide-react';
import projects from '../data/projects.json';
import { useInView } from '../hooks/useInView';

const categoryColors = {
  'AI/ML': 'from-neon-cyan to-neon-purple',
  'Data Engineering': 'from-neon-green to-neon-cyan',
  'Research': 'from-neon-purple to-neon-pink',
};

const statusConfig = {
  production: { label: 'Production', color: 'bg-neon-green/20 text-neon-green border-neon-green/20' },
  research: { label: 'Research', color: 'bg-neon-purple/20 text-neon-purple border-neon-purple/20' },
  completed: { label: 'Completed', color: 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/20' },
};

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.15);
  const [isHovered, setIsHovered] = useState(false);
  const status = statusConfig[project.status] || statusConfig.completed;
  const gradient = categoryColors[project.category] || 'from-neon-cyan to-neon-purple';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative glass rounded-2xl overflow-hidden gradient-border h-full flex flex-col">
        {/* Top gradient accent */}
        <div className={`h-1 bg-gradient-to-r ${gradient}`} />

        <div className="p-6 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: isHovered ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center border border-neon-cyan/10"
              >
                <Layers size={18} className="text-neon-cyan" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="text-xs text-text-muted">{project.category}</span>
              </div>
            </div>
            <span className={`text-[10px] px-2.5 py-1 rounded-full border ${status.color} font-medium`}>
              {status.label}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Impact */}
          <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-neon-cyan/5 border border-neon-cyan/10">
            <Zap size={14} className="text-neon-cyan mt-0.5 shrink-0" />
            <p className="text-xs text-neon-cyan/80 leading-relaxed">{project.impact}</p>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map(tech => (
              <span
                key={tech}
                className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-text-muted border border-white/5 hover:border-neon-cyan/20 hover:text-neon-cyan/80 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-neon-cyan transition-colors duration-200 group/link mt-auto"
          >
            <Code2 size={15} />
            <span>View Source</span>
            <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="projects" className="section-padding relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-[Orbitron] text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-neon-cyan/40 text-lg mr-2 font-mono">03.</span>
            Featured <span className="text-neon-cyan neon-text">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mt-3 mx-auto" />
          <p className="text-text-muted text-sm mt-4 max-w-lg mx-auto">
            A selection of projects showcasing my work in AI, data engineering, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
