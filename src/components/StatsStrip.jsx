import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import projects from '../data/projects.json';

const featuredCount = projects.filter((p) => p.featured).length;

const stats = [
  { value: `${projects.length}+`, label: 'Projects shipped' },
  { value: `${featuredCount}`, label: 'Featured in 2026' },
  { value: '4+', label: 'Years in AI/ML' },
  { value: 'RAG', label: 'Core specialty' },
];

export default function StatsStrip() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} className="relative py-12 border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-center group"
          >
            <p className="font-[Orbitron] text-3xl sm:text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              {s.value}
            </p>
            <p className="text-[11px] text-text-muted mt-2 tracking-widest uppercase font-mono">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
