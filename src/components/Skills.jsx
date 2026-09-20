import { motion } from 'framer-motion';
import research from '../data/research.json';

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-ink mb-8"
        >
          Skills
        </motion.h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {research.toolkit.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="fx-panel rounded-2xl p-5"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan mb-4">{g.name}</h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-ink-soft flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
