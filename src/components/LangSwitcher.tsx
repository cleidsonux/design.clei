import { useEffect, useRef, useState } from 'react';
import { Globe, CaretDown, Check } from '@phosphor-icons/react';
import { useT } from '../i18n/LangContext';
import type { Lang } from '../i18n/translations';

const labels: Record<Lang, string> = { pt: 'PT', en: 'EN', es: 'ES' };
const options: { code: Lang; flag: string; name: string }[] = [
  { code: 'pt', flag: '🇧🇷', name: 'Português' },
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
];

export function LangSwitcher() {
  const { lang, setLang } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900 group"
      >
        <Globe weight="bold" className="text-sm sm:text-base" />
        <span className="text-[11px] sm:text-xs font-mono font-semibold">{labels[lang]}</span>
        <CaretDown weight="bold" className="text-[10px] opacity-50 hidden sm:inline-block group-hover:opacity-100 transition-opacity" />
      </button>
      <div className={`lang-menu absolute right-0 top-full mt-3 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden w-44 z-50 ${open ? 'open' : ''}`}>
        {options.map((opt, i) => (
          <div key={opt.code}>
            <button
              onClick={() => { setLang(opt.code); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left ${lang === opt.code ? 'bg-slate-50' : ''}`}
            >
              <span className="text-lg leading-none">{opt.flag}</span>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-900">{opt.name}</div>
                <div className="text-[10px] text-slate-400 font-mono">{labels[opt.code]}</div>
              </div>
              <Check weight="bold" className={`text-emerald-500 text-xs ${lang === opt.code ? 'opacity-100' : 'opacity-0'}`} />
            </button>
            {i < options.length - 1 && <div className="h-px bg-slate-50 mx-3" />}
          </div>
        ))}
      </div>
    </div>
  );
}
