import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import { useT } from '../i18n/LangContext';

export function NotFound() {
  const { t } = useT();
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="text-7xl md:text-8xl font-bold tracking-tight text-slate-200 font-mono block">
          {t('notfound.code')}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mt-4">
          {t('notfound.title')}
        </h1>
        <p className="text-slate-500 mt-3 leading-relaxed">
          {t('notfound.description')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors group"
        >
          <ArrowLeft weight="bold" className="text-sm group-hover:-translate-x-0.5 transition-transform" />
          <span>{t('notfound.back')}</span>
        </Link>
      </div>
    </main>
  );
}
