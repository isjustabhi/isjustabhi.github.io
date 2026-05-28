import { motion } from 'framer-motion';

const items = [
  'React', 'TypeScript', 'Python', 'LLMs', 'RAG', 'Supabase', 'Three.js',
  'Next.js', 'Gemini', 'OpenAI', 'Tailwind', 'PyTorch', 'Tableau', 'Node.js',
  'Framer Motion', 'PostgreSQL', 'Vite', 'LangChain',
];

export default function TechMarquee() {
  const row = [...items, ...items];

  return (
    <section className="relative py-8 overflow-hidden border-y border-white/[0.04] bg-black/20">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-dark to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-sm font-[Orbitron] tracking-[0.2em] uppercase text-text-muted/50 hover:text-neon-cyan/80 transition-colors shrink-0"
          >
            {item}
            <span className="mx-8 text-neon-cyan/20">◆</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
