import { useT } from '../i18n/LangContext';

const steps = ['step1', 'step2', 'step3', 'step4'] as const;

export function Manifesto() {
  const { t } = useT();

  return (
    <section id="manifesto" className="py-20 md:py-28">
      {/* Intro */}
      <div className="max-w-2xl reveal">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 block mb-5">
          {t('process.label')}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
          {t('process.headline.part1')}{' '}
          <span className="text-slate-400 font-light italic">{t('process.headline.part2')}</span>
        </h2>
        <p className="text-slate-500 mt-6 text-base md:text-lg leading-relaxed max-w-xl">
          {t('process.subtitle')}
        </p>
      </div>

      {/* 4 process steps */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10 reveal">
        {steps.map((key, i) => (
          <div key={key} className="relative">
            {/* Subtle connector line between steps — desktop only */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-3 left-12 -right-10 h-px bg-gradient-to-r from-slate-200 to-transparent" />
            )}

            <div className="relative">
              <span className="font-mono text-xs font-medium text-slate-400 tracking-widest">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                {t(`process.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {t(`process.${key}.text`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
