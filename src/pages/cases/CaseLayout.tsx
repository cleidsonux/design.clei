import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react';
import { useEffect, type ReactNode } from 'react';
import { useT } from '../../i18n/LangContext';

export type CaseSlug = 'repassa' | 'favoritas' | 'pesquisa-contabil';

const sequence: { slug: CaseSlug; path: string; nameKey: string }[] = [
  { slug: 'repassa', path: '/cases/repassa', nameKey: 'casename.repassa' },
  { slug: 'favoritas', path: '/cases/favoritas', nameKey: 'casename.favoritas' },
  { slug: 'pesquisa-contabil', path: '/cases/pesquisa-contabil', nameKey: 'casename.contabil' },
];

export function CaseLayout({ children, current }: { children: ReactNode; current: CaseSlug }) {
  const { t } = useT();

  useEffect(() => {
    // Case studies are long-form articles — every section must always be
    // visible. A scroll-triggered reveal can silently leave content hidden
    // if the observer misses a fast scroll, so we activate everything on mount.
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => el.classList.add('active'));
  }, []);

  const idx = sequence.findIndex((c) => c.slug === current);
  const prev = idx > 0 ? sequence[idx - 1] : null;
  const next = idx < sequence.length - 1 ? sequence[idx + 1] : null;

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12">
        <Link to="/" className="mb-14 inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group text-sm">
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> {t('case.back')}
        </Link>
        <article className="animate-hero">
          {children}
        </article>

        {/* Case-to-case navigation */}
        <nav className="mt-20 pt-10 border-t border-slate-100 grid grid-cols-2 gap-4 items-center">
          <div>
            {prev && (
              <Link to={prev.path} className="group inline-flex items-center gap-3 text-left">
                <ArrowLeft className="text-slate-400 group-hover:-translate-x-1 group-hover:text-slate-900 transition-all shrink-0" />
                <span className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">{t('casenav.prev')}</span>
                  <span className="text-sm font-bold text-slate-900">{t(prev.nameKey)}</span>
                </span>
              </Link>
            )}
          </div>
          <div className="flex justify-end">
            {next && (
              <Link to={next.path} className="group inline-flex items-center gap-3 text-right">
                <span className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">{t('casenav.next')}</span>
                  <span className="text-sm font-bold text-slate-900">{t(next.nameKey)}</span>
                </span>
                <ArrowRight className="text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all shrink-0" />
              </Link>
            )}
          </div>
          <div className="col-span-2 flex justify-center pt-6 border-t border-slate-100">
            <Link to="/#cases" className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
              {t('casenav.all')}
            </Link>
          </div>
        </nav>
      </div>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-bold text-lg tracking-tight block text-slate-900">Cleidson Franklin</span>
            <span className="text-sm text-slate-500">Product Designer · cleidson.ux@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:cleidson.ux@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors"><EnvelopeSimple weight="bold" className="text-xl" /></a>
            <a href="https://www.linkedin.com/in/cleidson-productdesigner/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-blue-50 transition-colors"><LinkedinLogo weight="bold" className="text-xl" /></a>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors group ml-2">
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> {t('case.back')}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
