import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Command, WhatsappLogo } from '@phosphor-icons/react';
import { useT } from '../i18n/LangContext';
import { LangSwitcher } from './LangSwitcher';
import { CmdK } from './CmdK';

export function Navbar() {
  const { t } = useT();
  const [hidden, setHidden] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const bar = document.querySelector<HTMLElement>('.progress-bar');
      if (bar) bar.style.width = total > 0 ? (current / total) * 100 + '%' : '0%';

      if (current < 80) setHidden(false);
      else if (current > lastY.current + 4) setHidden(true);
      else if (current < lastY.current - 4) setHidden(false);
      lastY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(v => !v);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="progress-bar" />
      <div className={`navbar-wrapper fixed top-4 sm:top-6 left-0 right-0 flex justify-center z-50 pointer-events-none px-3 ${hidden ? 'nav-hidden' : ''}`}>
        <nav className="bg-white/80 backdrop-blur-xl border border-white/40 ring-1 ring-slate-900/5 shadow-xl rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 pointer-events-auto flex items-center gap-0.5 sm:gap-1 max-w-full">
          <Link to="/" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-slate-900 text-white font-bold font-mono text-xs sm:text-sm hover:scale-105 transition-transform shadow-md shrink-0">CF</Link>
          <div className="h-6 w-px bg-slate-200 mx-1 sm:mx-2 hidden sm:block" />
          <div className="flex items-center gap-0.5 sm:gap-1">
            <a href="#manifesto" className="px-2 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all">{t('nav.manifesto')}</a>
            <a href="#cases" className="px-2 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all">{t('nav.cases')}</a>
            <a href="#recomendacoes" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all">{t('nav.recomendacoes')}</a>
          </div>
          <button onClick={() => setCmdOpen(true)} className="hidden md:flex items-center gap-2 px-3 py-2 text-xs font-mono text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors ml-1 border border-transparent hover:border-slate-200">
            <Command weight="bold" />K
          </button>
          <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block" />
          <LangSwitcher />
          <a href="https://wa.me/5545991249512" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-9 h-9 sm:w-auto sm:h-auto sm:px-5 sm:py-2 text-sm font-medium bg-emerald-500 sm:bg-slate-100 text-white sm:text-slate-900 sm:border sm:border-slate-200 rounded-full hover:bg-emerald-600 sm:hover:bg-slate-200 transition-all group ml-0.5 sm:ml-1 shrink-0">
            <WhatsappLogo weight="bold" className="text-base sm:text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span className="hidden sm:inline">{t('nav.contact')}</span>
          </a>
        </nav>
      </div>
      <CmdK open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}
