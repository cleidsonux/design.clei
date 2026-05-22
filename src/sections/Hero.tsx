import { FilePdf, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import { useT } from '../i18n/LangContext';

export function Hero() {
  const { t } = useT();
  return (
    <header className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-white/50 backdrop-blur-sm border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between min-h-[320px] animate-hero">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono font-medium border border-emerald-100 mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>{t('hero.badge')}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              {t('hero.h1.line1')}<br />{t('hero.h1.line2')}
            </h1>
            <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
              {t('hero.description.pre')}
              <strong className="text-slate-900 font-semibold">{t('hero.description.name')}</strong>
              {t('hero.description.post')}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-3">
            <a href="/media/CV_CLEIDSON_PD.pdf" download="Cleidson_Product_Designer_CV.pdf" className="text-sm font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-2 group transition-colors whitespace-nowrap">
              <FilePdf className="text-lg group-hover:-translate-y-0.5 transition-transform text-red-500" />
              <span>{t('hero.download-cv')}</span>
            </a>
            <a href="https://www.linkedin.com/in/cleidson-productdesigner/" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-2 group transition-colors whitespace-nowrap">
              <LinkedinLogo className="text-lg group-hover:-translate-y-0.5 transition-transform text-blue-600" /> LinkedIn
            </a>
            <a href="https://github.com/cleidsonux" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-2 group transition-colors whitespace-nowrap">
              <GithubLogo className="text-lg group-hover:-translate-y-0.5 transition-transform text-slate-900" /> GitHub
            </a>
          </div>
        </div>
        <div className="md:col-span-4 bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden relative group min-h-[320px] animate-hero">
          <img src="/media/profile.jpg" alt="Cleidson Franklin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </header>
  );
}
