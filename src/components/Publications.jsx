import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import publications from '../data/publications.json';
import education from '../data/education.json';
import achievements from '../data/achievements.json';
import { Reveal } from './Reveal';

const awards = achievements.filter((a) => a.id !== 4);

export default function Publications() {
  return (
    <section id="publications" className="section-pad relative">
      <div className="max-w-5xl mx-auto space-y-14">
        <div>
          <Reveal className="mb-8">
            <p className="section-label">05 / Publications</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
              Papers &amp; preprints
            </h2>
          </Reveal>
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
                <p className="text-xs font-mono text-cyan/65">{pub.year}</p>
                <h3 className="mt-1.5 font-display text-base sm:text-lg font-semibold text-ink leading-snug tracking-tight">
                  {pub.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{pub.authors}</p>
                <p className="text-xs text-muted/75 mt-1">{pub.venue}</p>
                <a href={pub.href} target="_blank" rel="noopener noreferrer" className="link-arrow mt-3 text-sm">
                  View <ArrowUpRight size={12} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink mb-6">
            Education &amp; awards
          </h2>
          {education.map((ed) => (
            <div key={ed.id} className="fx-panel rounded-xl p-5 mb-4">
              <h3 className="font-display text-lg font-semibold text-ink tracking-tight">{ed.degree}</h3>
              <p className="text-sm text-cyan mt-0.5">{ed.institution} · {ed.period}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">{ed.details}</p>
            </div>
          ))}
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {awards.map((a) => (
              <div key={a.id} className="fx-panel rounded-xl p-4">
                <p className="text-[10px] font-mono text-cyan/55">{a.year}</p>
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
