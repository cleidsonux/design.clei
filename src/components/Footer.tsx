import { useEffect, useState } from 'react';
import { EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react';
import { useT } from '../i18n/LangContext';

export function Footer() {
  const { t } = useT();
  const [clock, setClock] = useState('00:00');

  useEffect(() => {
    const update = () => setClock(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold text-lg tracking-tight block text-slate-900">Cleidson Franklin</span>
          <span className="text-sm text-slate-500">{t('footer.role')}</span>
          <div className="mt-2 flex items-center justify-center md:justify-start gap-2 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />{clock} • {t('footer.location')}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:cleidson.ux@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors"><EnvelopeSimple weight="bold" className="text-xl" /></a>
          <a href="https://www.linkedin.com/in/cleidson-productdesigner/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-blue-50 transition-colors"><LinkedinLogo weight="bold" className="text-xl" /></a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-8 text-center text-[10px] text-slate-400 font-mono">
        {t('footer.copy').replace('{year}', String(new Date().getFullYear()))}
      </div>
    </footer>
  );
}
