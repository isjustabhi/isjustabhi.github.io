import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Code2 } from 'lucide-react';
import projects from '../data/projects.json';

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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-ink"
          >
            Projects
          </motion.h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                  active === f
                    ? 'bg-cyan/15 text-cyan border-cyan/30'
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.04, 0.24) }}
                  whileHover={{ y: -4 }}
                  className="fx-panel rounded-2xl p-5 flex flex-col group hover:border-cyan/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <p className="text-[10px] font-mono text-cyan/60 uppercase tracking-wider">
                        {p.category}{p.year ? ` · ${p.year}` : ''}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold text-ink group-hover:text-cyan transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <ArrowUpRight size={16} className="text-muted/40 group-hover:text-cyan shrink-0" />
                  </div>
                  <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-3">{p.description}</p>
                  {p.impact && (
                    <p className="mt-3 text-xs text-green/80 line-clamp-2">{p.impact}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {p.techStack.slice(0, 4).map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-bg-2 text-muted border border-line">
                        {t}
                      </span>
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
                    {p.badge && <span className="ml-auto text-[10px] text-violet font-mono">{p.badge}</span>}
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
