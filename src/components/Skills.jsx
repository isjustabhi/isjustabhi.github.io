import { motion } from 'framer-motion';
import { Code, Brain, Globe, Database } from 'lucide-react';
import skillsData from '../data/skills.json';
import { useInView } from '../hooks/useInView';

const iconMap = { code: Code, brain: Brain, globe: Globe, database: Database };
const barColors = ['from-neon-cyan to-neon-cyan/60', 'from-neon-purple to-neon-purple/60', 'from-neon-pink to-neon-pink/60', 'from-neon-green to-neon-green/60'];

function SkillCategory({ category, catIndex }) {
  const [ref, inView] = useInView(0.2);
  const Icon = iconMap[category.icon] || Code;

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: catIndex * 0.1 }} className="glass rounded-2xl p-6 gradient-border group hover:bg-white/[0.02] transition-colors duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg bg-neon-cyan/10 flex items-center justify-center border border-neon-cyan/10 group-hover:border-neon-cyan/30 transition-colors">
          <Icon size={18} className="text-neon-cyan" />
        </div>
        <h3 className="font-semibold text-white text-sm">{category.name}</h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm text-text-muted">{skill.name}</span>
              <span className="text-xs font-mono text-neon-cyan/60">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                className={`h-full rounded-full bg-gradient-to-r ${barColors[catIndex % barColors.length]}`}
                style={{ boxShadow: inView ? '0 0 8px rgba(0, 240, 255, 0.3)' : 'none' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <h2 className="font-[Orbitron] text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-neon-cyan/40 text-lg mr-2 font-mono">04.</span>
            Tech <span className="text-neon-cyan neon-text">Arsenal</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mt-3 mx-auto" />
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {skillsData.categories.map((cat, i) => (
            <SkillCategory key={cat.name} category={cat} catIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
