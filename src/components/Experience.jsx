import { motion } from 'framer-motion';
import experience from '../data/experience.json';
import { Reveal } from './Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-10">
          <p className="section-label">02 / Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Roles &amp; research labs
          </h2>
        </Reveal>

        <div className="relative">
          <motion.div
            className="hidden md:block absolute left-[7.5rem] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-cyan/40 via-blue/20 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease }}
          />
          <div className="space-y-4">
            {experience.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
                className="grid md:grid-cols-[7rem_1fr] gap-4"
              >
                <p className="text-xs font-mono text-cyan/70 pt-5 font-medium relative">
                  <span className="hidden md:inline-block absolute right-[-1.35rem] top-[1.4rem] w-2.5 h-2.5 rounded-full bg-cyan ring-4 ring-bg" />
                  {item.period.split(' to ')[0].trim()}
                </p>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="fx-panel rounded-xl p-5 hover:border-cyan/30 transition-colors"
                >
                  <h3 className="font-display text-lg font-semibold text-ink tracking-tight">{item.role}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan mt-0.5 font-semibold hover:underline inline-block"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <p className="text-sm text-cyan mt-0.5 font-semibold">{item.company}</p>
                  )}
                  <p className="text-xs text-muted mt-0.5">{item.location}</p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.highlights.map((h) => (
                      <span key={h} className="chip !text-cyan/80 !border-cyan/15 !bg-cyan/[0.06]">{h}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
