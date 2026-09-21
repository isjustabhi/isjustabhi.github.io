import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Code2 } from 'lucide-react';
import projects from '../data/projects.json';
import { Reveal } from './Reveal';

const filters = ['All', 'Recent', 'AI-Powered Apps', 'ML Projects', 'Viz Projects'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const sorted = useMemo(
    () => [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || (b.year || 0) - (a.year || 0)),
    [],
  );
  const filtered = useMemo(() => {
    if (active === 'All') return sorted;
    if (active === 'Recent') return sorted.filter((p) => p.year >= 2026);
    return sorted.filter((p) => p.category === active);
  }, [active, sorted]);

  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <Reveal>
            <p className="section-label">03 / Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
              Selected builds
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
                  active === f
                    ? 'bg-cyan/12 text-cyan border-cyan/30'
                    : 'border-line text-muted hover:text-ink hover:border-cyan/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {filtered.map((p, i) => {
              const isLive = p.github && !p.github.includes('github.com');
              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.24) }}
                  whileHover={{ y: -4 }}
                  className="fx-panel rounded-2xl p-5 flex flex-col group hover:border-cyan/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="text-[10px] font-mono text-cyan/55 uppercase tracking-wider">
                        {p.category}{p.year ? ` · ${p.year}` : ''}
                      </p>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-ink tracking-tight group-hover:text-cyan transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <ArrowUpRight size={16} className="text-muted/35 group-hover:text-cyan shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-3">{p.description}</p>
                  {p.impact && (
                    <p className="mt-3 text-xs text-green/85 line-clamp-2">{p.impact}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3 text-xs">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan hover:underline">
                      {isLive ? <ExternalLink size={12} /> : <Code2 size={12} />}
                      {isLive ? 'Demo' : 'Repo'}
                    </a>
                    {p.repo && isLive && (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-cyan">
                        <Code2 size={12} /> Source
                      </a>
                    )}
                    {p.badge && <span className="ml-auto text-[10px] text-blue/80 font-mono">{p.badge}</span>}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
