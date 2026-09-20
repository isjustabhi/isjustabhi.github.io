import { motion } from 'framer-motion';
import experience from '../data/experience.json';

const ease = [0.22, 1, 0.36, 1];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-ink mb-8"
        >
          Experience
        </motion.h2>

        <div className="relative pl-0 md:pl-0">
          <div className="hidden md:block absolute left-[7.5rem] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/40 via-blue/20 to-transparent" />
          <div className="space-y-4">
            {experience.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.45, ease }}
                className="grid md:grid-cols-[7rem_1fr] gap-4"
              >
                <p className="text-xs font-mono text-cyan/70 pt-5">{item.period.split('—')[0].trim()}</p>
                <div className="fx-panel rounded-xl p-5 hover:border-cyan/30 transition-colors">
                  <h3 className="font-display text-lg font-semibold text-ink">{item.role}</h3>
                  <p className="text-sm text-cyan mt-0.5">{item.company}</p>
                  <p className="text-xs text-muted">{item.location}</p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.highlights.map((h) => (
                      <span key={h} className="text-[10px] px-2 py-0.5 rounded-full bg-cyan/10 text-cyan border border-cyan/15">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
