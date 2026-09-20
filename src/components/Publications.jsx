import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import publications from '../data/publications.json';
import education from '../data/education.json';
import achievements from '../data/achievements.json';

const awards = achievements.filter((a) => a.id !== 4);

export default function Publications() {
  return (
    <section id="publications" className="section-pad relative">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-ink mb-6"
          >
            Publications
          </motion.h2>
          <div className="space-y-3">
            {publications.map((pub, i) => (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="fx-panel rounded-xl p-5"
              >
                <p className="text-xs font-mono text-cyan/70">{pub.year}</p>
                <h3 className="mt-1 font-display text-base sm:text-lg font-semibold text-ink leading-snug">{pub.title}</h3>
                <p className="mt-1 text-sm text-muted">{pub.authors}</p>
                <p className="text-xs text-muted/80 mt-1">{pub.venue}</p>
                <a href={pub.href} target="_blank" rel="noopener noreferrer" className="link-arrow mt-3 text-sm">
                  View <ArrowUpRight size={12} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-ink mb-5">Education & awards</h2>
          {education.map((ed) => (
            <div key={ed.id} className="fx-panel rounded-xl p-5 mb-4">
              <h3 className="font-display text-lg font-semibold text-ink">{ed.degree}</h3>
              <p className="text-sm text-cyan">{ed.institution} · {ed.period}</p>
              <p className="mt-2 text-sm text-muted">{ed.details}</p>
            </div>
          ))}
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            {awards.map((a) => (
              <div key={a.id} className="fx-panel rounded-xl p-4">
                <p className="text-[10px] font-mono text-cyan/60">{a.year}</p>
                <p className="text-sm font-semibold text-ink mt-1">{a.title}</p>
                <p className="text-xs text-muted mt-1">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
