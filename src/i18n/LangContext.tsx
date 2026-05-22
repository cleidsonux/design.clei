import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang } from './translations';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangCtx | null>(null);

function detectLang(): Lang {
  const saved = localStorage.getItem('portfolio-lang') as Lang | null;
  if (saved && translations[saved]) return saved;
  const preferred = navigator.languages || [navigator.language];
  for (const l of preferred) {
    const code = l.toLowerCase();
    if (code.startsWith('pt')) return 'pt';
    if (code.startsWith('es')) return 'es';
    if (code.startsWith('en')) return 'en';
  }
  return 'pt';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt');

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  useEffect(() => {
    const map: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };
    document.documentElement.lang = map[lang];
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('portfolio-lang', l);
  };

  const t = (key: string): string => {
    const dict = translations[lang];
    return dict[key] ?? translations.pt[key] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useT must be used inside LangProvider');
  return ctx;
}
