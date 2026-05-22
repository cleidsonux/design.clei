import { useEffect, useState } from 'react';
import { MagnifyingGlass, FileText, Briefcase, Quotes, Copy, Check, ChatCircleText } from '@phosphor-icons/react';
import { useT } from '../i18n/LangContext';

export function CmdK({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useT();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const navigate = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText('cleidson.ux@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`cmdk-overlay fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-[15vh] ${open ? 'open' : 'opacity-0 invisible'}`}
      onClick={onClose}
    >
      <div className="cmdk-modal bg-white w-full max-w-lg rounded-xl shadow-2xl border border-slate-200 overflow-hidden mx-3" onClick={e => e.stopPropagation()}>
        <div className="border-b border-slate-100 p-4 flex items-center gap-3">
          <MagnifyingGlass weight="bold" className="text-slate-400 text-lg" />
          <input
            autoFocus
            placeholder={t('cmdk.placeholder')}
            className="w-full outline-none text-slate-700 placeholder:text-slate-400"
          />
          <span className="text-xs font-mono text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">ESC</span>
        </div>
        <div className="py-2">
          <div className="px-4 py-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">{t('cmdk.nav')}</div>
          <div className="cmdk-item px-4 py-3 flex items-center justify-between text-slate-600" onClick={() => navigate('#manifesto')}>
            <span className="flex items-center gap-3"><FileText weight="fill" /> {t('nav.manifesto')}</span>
          </div>
          <div className="cmdk-item px-4 py-3 flex items-center justify-between text-slate-600" onClick={() => navigate('#cases')}>
            <span className="flex items-center gap-3"><Briefcase weight="fill" /> {t('nav.cases')}</span>
          </div>
          <div className="cmdk-item px-4 py-3 flex items-center justify-between text-slate-600" onClick={() => navigate('#mentoria')}>
            <span className="flex items-center gap-3"><ChatCircleText weight="fill" /> {t('mentoring.label')}</span>
          </div>
          <div className="cmdk-item px-4 py-3 flex items-center justify-between text-slate-600" onClick={() => navigate('#recomendacoes')}>
            <span className="flex items-center gap-3"><Quotes weight="fill" /> {t('nav.recomendacoes')}</span>
          </div>
          <div className="border-t border-slate-100 my-2" />
          <div className="px-4 py-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">{t('cmdk.actions')}</div>
          <div className="cmdk-item px-4 py-3 flex items-center justify-between text-slate-600" onClick={copyEmail}>
            <span className="flex items-center gap-3">
              {copied ? <Check weight="fill" /> : <Copy weight="fill" />}
              {copied ? 'Email Copiado!' : t('cmdk.copy-email')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
