import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import profile from '../data/profile.json';

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fx-panel fx-glow rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="section-label justify-center">06 / Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-4">
            Let&apos;s build something
          </h2>
          <p className="text-muted text-[15px] max-w-md mx-auto mb-2 leading-relaxed">
            Open to Data Scientist, Applied Scientist, and AI/ML roles.
          </p>
          <p className="text-xs font-mono text-muted/65 mb-9">{profile.location}</p>

          <motion.a
            href={`mailto:${profile.email}`}
            className="btn-fx mx-auto mb-9"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={15} /> {profile.email}
          </motion.a>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {profile.links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="inline-flex items-center gap-1 text-sm text-muted hover:text-cyan transition-colors"
              >
                {l.label} <ArrowUpRight size={12} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
