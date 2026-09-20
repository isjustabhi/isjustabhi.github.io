import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import profile from '../data/profile.json';

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="font-display text-3xl font-bold text-ink mb-8"
        >
          About <span className="text-cyan">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="fx-panel fx-glow rounded-2xl p-6 sm:p-8"
        >
          <p className="text-ink-soft leading-relaxed">{profile.bio}</p>

          <p className="mt-7 text-[11px] font-mono uppercase tracking-wider text-cyan/70 mb-3">Also exploring</p>
          <div className="flex flex-wrap gap-2 mb-7">
            {profile.interests.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-line text-muted bg-bg-2">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-5 border-t border-line">
            {profile.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link-arrow text-sm">
                {l.label} <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
