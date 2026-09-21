import { motion } from 'framer-motion';
import research from '../data/research.json';
import { Reveal } from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-10">
          <p className="section-label">04 / Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Toolkit
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4">
          {research.toolkit.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: 'rgba(46,230,255,0.3)' }}
              className="fx-panel rounded-2xl p-5"
            >
              <h3 className="text-[11px] font-mono uppercase tracking-[0.14em] text-cyan mb-4">{g.name}</h3>
              <ul className="space-y-2.5">
                {g.items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.04 }}
                    className="text-sm text-ink-soft flex items-center gap-2.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan/60" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
