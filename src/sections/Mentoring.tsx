import { ArrowRight } from '@phosphor-icons/react';
import { useT } from '../i18n/LangContext';

const topicKeys = [
  'mentoring.topic1',
  'mentoring.topic2',
  'mentoring.topic3',
  'mentoring.topic4',
  'mentoring.topic5',
  'mentoring.topic6',
] as const;

export function Mentoring() {
  const { t } = useT();
  return (
    <section id="mentoria" className="py-20 md:py-24 reveal">
      <div className="max-w-3xl">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 block mb-5">
          {t('mentoring.label')}
        </span>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
          {t('mentoring.headline.part1')}{' '}
          <span className="text-slate-400 font-light italic">{t('mentoring.headline.part2')}</span>
        </h2>

        <p className="text-slate-500 mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
          {t('mentoring.description')}
        </p>

        {/* Quiet inline stat */}
        <div className="mt-10 flex items-center gap-3 text-xs font-mono text-slate-400 uppercase tracking-widest">
          <span className="text-slate-900 text-sm font-bold normal-case tracking-tight font-sans">
            {t('mentoring.stat')}
          </span>
          <span className="h-px w-8 bg-slate-300" />
          <span>{t('mentoring.period')}</span>
        </div>

        {/* Topic pills — outlined, not filled */}
        <ul className="mt-8 flex flex-wrap gap-2">
          {topicKeys.map((key) => (
            <li
              key={key}
              className="text-xs px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors"
            >
              {t(key)}
            </li>
          ))}
        </ul>

        {/* CTA — plain text link */}
        <a
          href="https://wa.me/5545991249512?text=Oi%20Cleidson%2C%20queria%20conversar%20sobre%20mentoria"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors group"
        >
          <span>{t('mentoring.cta')}</span>
          <ArrowRight weight="bold" className="text-sm group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
