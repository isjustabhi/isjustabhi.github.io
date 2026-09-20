import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import profile from '../data/profile.json';

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="fx-panel fx-glow rounded-2xl p-8 sm:p-10 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-ink mb-3">
            Let's <span className="text-cyan">connect</span>
          </h2>
          <p className="text-muted text-sm max-w-md mx-auto mb-2">
            Open to Data Scientist, Applied Scientist, and AI/ML roles. OPT + STEM OPT eligible.
          </p>
          <p className="text-xs font-mono text-muted/70 mb-8">{profile.location}</p>

          <a href={`mailto:${profile.email}`} className="btn-fx mx-auto mb-8">
            <Mail size={15} /> {profile.email}
          </a>

          <div className="flex flex-wrap justify-center gap-3">
            {profile.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted hover:text-cyan px-3 py-1.5 rounded-lg border border-line hover:border-cyan/30 transition-colors"
              >
                {l.label} <ArrowUpRight size={11} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
