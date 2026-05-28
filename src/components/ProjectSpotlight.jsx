import { motion } from 'framer-motion';
import { ExternalLink, Code2, Sparkles, ArrowUpRight } from 'lucide-react';
import projects from '../data/projects.json';
import { useInView } from '../hooks/useInView';

const featured = projects.filter((p) => p.featured).slice(0, 4);
const gradients = [
  'from-neon-cyan/20 via-neon-purple/10 to-transparent',
  'from-neon-pink/15 via-neon-purple/10 to-transparent',
  'from-neon-green/15 via-neon-cyan/10 to-transparent',
  'from-neon-orange/15 via-neon-pink/10 to-transparent',
];

function SpotlightCard({ project, index, large }) {
  const isLive = project.github && !project.github.includes('github.com');
  const primaryLink = project.github;
  const repoLink = project.repo || (project.github?.includes('github.com') ? project.github : null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl glass gradient-border holo-shimmer ${
        large ? 'md:col-span-2 md:row-span-2 min-h-[320px]' : 'min-h-[200px]'
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-80`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,240,255,0.12),transparent_55%)]" />

      <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3 mb-auto">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/25">
              <Sparkles size={10} />
              Featured
            </span>
            {project.badge && (
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/25">
                {project.badge}
              </span>
            )}
            {project.year && (
              <span className="text-[10px] font-mono text-text-muted/60">{project.year}</span>
            )}
          </div>
          <ArrowUpRight
            size={20}
            className="text-text-muted group-hover:text-neon-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
          />
        </div>

        <div className="mt-8">
          <h3 className={`font-[Orbitron] font-bold text-white group-hover:text-neon-cyan transition-colors ${
            large ? 'text-2xl sm:text-3xl mb-3' : 'text-lg mb-2'
          }`}>
            {project.title}
          </h3>
          <p className={`text-text-muted leading-relaxed ${large ? 'text-sm sm:text-base max-w-xl' : 'text-xs sm:text-sm line-clamp-3'}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.techStack.slice(0, large ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-text-muted border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-5 text-xs font-medium">
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-muted hover:text-neon-cyan transition-colors"
            >
              {isLive ? <ExternalLink size={14} /> : <Code2 size={14} />}
              {isLive ? 'Live demo' : 'Repository'}
            </a>
            {repoLink && isLive && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-neon-purple transition-colors"
              >
                <Code2 size={14} />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectSpotlight() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="spotlight" className="section-padding pt-0 pb-4 relative scroll-mt-24">
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[11px] font-mono tracking-[0.35em] uppercase text-neon-cyan/50 mb-3 text-center">
            Latest builds
          </p>
          <h2 className="font-[Orbitron] text-3xl sm:text-4xl font-bold text-center">
            Recent <span className="text-neon-cyan neon-text">Spotlight</span>
          </h2>
          <p className="text-text-muted text-sm text-center mt-4 max-w-xl mx-auto">
            Hackathon winners, production apps, and AI systems shipped in 2026.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-fr">
          {featured.map((p, i) => (
            <SpotlightCard key={p.id} project={p} index={i} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
