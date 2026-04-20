import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import experience from '../data/experience.json';
import { useInView } from '../hooks/useInView';

function CardContent({ item, align }) {
  return (
    <div className={`glass rounded-xl p-5 gradient-border group hover:bg-white/[0.02] transition-colors duration-300 ${align === 'right' ? 'text-right' : 'text-left'}`}>
      <span className="text-xs font-mono text-neon-cyan/70 tracking-wider">{item.period}</span>
      <h3 className="text-lg font-bold text-white mt-1">{item.role}</h3>
      <p className="text-sm text-neon-purple font-medium">{item.company} · {item.location}</p>
      <p className="text-sm text-text-muted mt-2 leading-relaxed">{item.description}</p>
      <div className={`flex flex-wrap gap-2 mt-3 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        {item.highlights.map(h => (
          <span key={h} className="text-[10px] px-2 py-0.5 rounded-full bg-neon-cyan/10 text-neon-cyan/80 border border-neon-cyan/10">{h}</span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative mb-12 last:mb-0">
      <div className="hidden md:grid md:grid-cols-[1fr_60px_1fr] w-full items-center">
        {isLeft ? (
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="pr-8">
            <CardContent item={item} align="right" />
          </motion.div>
        ) : <div />}
        <div className="flex justify-center">
          <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.2 }} className="w-10 h-10 rounded-full glass border border-neon-cyan/30 flex items-center justify-center z-10 neon-glow">
            <Briefcase size={16} className="text-neon-cyan" />
          </motion.div>
        </div>
        {!isLeft ? (
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="pl-8">
            <CardContent item={item} align="left" />
          </motion.div>
        ) : <div />}
      </div>

      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center">
          <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ duration: 0.3 }} className="w-8 h-8 rounded-full glass border border-neon-cyan/30 flex items-center justify-center z-10 shrink-0">
            <Briefcase size={14} className="text-neon-cyan" />
          </motion.div>
          <div className="w-px flex-1 bg-gradient-to-b from-neon-cyan/30 to-transparent mt-2" />
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="flex-1 pb-4">
          <CardContent item={item} align="left" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="experience" className="section-padding relative">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <h2 className="font-[Orbitron] text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-neon-cyan/40 text-lg mr-2 font-mono">02.</span>
            Experience <span className="text-neon-cyan neon-text">Timeline</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mt-3 mx-auto" />
        </motion.div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/30 via-neon-purple/20 to-transparent" />
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
