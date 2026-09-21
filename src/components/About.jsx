import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import profile from '../data/profile.json';
import { Reveal, Stagger, itemVariants } from './Reveal';

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="section-label">01 / About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-8">
            AI workflows for behavioral &amp; health research
          </h2>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="fx-panel fx-glow rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-1 bg-cyan origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          />
          <p className="text-ink-soft leading-relaxed text-[15px] sm:text-base pl-2">{profile.bio}</p>

          <p className="mt-8 text-[11px] font-mono uppercase tracking-[0.14em] text-cyan/70 mb-3 pl-2">Also exploring</p>
          <Stagger className="flex flex-wrap gap-2 mb-7 pl-2">
            {profile.interests.map((t) => (
              <motion.span key={t} variants={itemVariants} className="chip">
                {t}
              </motion.span>
            ))}
          </Stagger>

          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-5 border-t border-line pl-2">
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
