import { motion } from 'motion/react';
import { useT } from '../i18n/LangContext';

const tools = [
  'Figma',
  'Miro',
  'Make',
  'n8n',
  'Supabase',
  'ChatGPT',
  'Claude',
  'Notion',
  'Design Systems',
  'UX Research',
  'Discovery',
  'Prototipagem',
  'NoCode',
  'B2B SaaS',
];

export function Skills() {
  const { t } = useT();

  return (
    <section className="max-w-5xl mx-auto mb-24">
      <div className="flex items-center gap-4 mb-4 pl-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 shrink-0">
          {t('skills.title')}
        </span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <div
        className="overflow-hidden py-2 group"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {[...tools, ...tools].map((name, i) => (
            <span
              key={i}
              className="text-sm font-medium text-slate-600 px-6 py-2 shrink-0 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
