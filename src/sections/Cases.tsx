import { Link } from 'react-router-dom';
import { Robot, Crown, MagnifyingGlass, ArrowRight, Lightning } from '@phosphor-icons/react';
import { useT } from '../i18n/LangContext';

export function Cases() {
  const { t } = useT();
  return (
    <section id="cases" className="mb-32">
      <div className="flex items-center justify-between mb-10 reveal">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{t('cases.title')}</h2>
        <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full border border-slate-200">{t('cases.portfolio')}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">

        <Link to="/cases/repassa" className="group cursor-pointer bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-slate-300 hover:shadow-2xl transition-all duration-500 flex flex-col">
          <div className="aspect-[16/10] bg-slate-900 relative overflow-hidden flex items-center justify-center">
            <Lightning className="text-[6rem] text-white/10 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply" />
            <img src="/media/repassa_capa.png" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-sm">
              <Robot />
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{t('cases.repassa.tag')}</span>
              <span className="text-[10px] font-mono uppercase text-slate-400">2026</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t('cases.repassa.title')}</h3>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-6">{t('cases.repassa.desc')}</p>
            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all">
              <span>{t('cases.cta')}</span> <ArrowRight />
            </div>
          </div>
        </Link>

        <Link to="/cases/favoritas" className="group cursor-pointer bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-slate-300 hover:shadow-2xl transition-all duration-500 flex flex-col">
          <div className="aspect-[16/10] bg-rose-950 relative overflow-hidden flex items-center justify-center">
            <img src="/media/Favoritas/Blog-TAMANHO-PADRAO-1.png" className="absolute inset-0 w-full h-full object-cover object-top opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/60 to-transparent" />
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-sm">
              <Crown className="text-sm" />
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">{t('cases.favoritas.tag1')}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{t('cases.favoritas.tag2')}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">{t('cases.favoritas.title')}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{t('cases.favoritas.desc')}</p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all">
              <span>{t('cases.cta')}</span> <ArrowRight />
            </div>
          </div>
        </Link>

        <Link to="/cases/pesquisa-contabil" className="group cursor-pointer bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-slate-300 hover:shadow-2xl transition-all duration-500 flex flex-col">
          <div className="aspect-[16/10] bg-violet-950 relative overflow-hidden flex items-center justify-center">
            <img src="https://akadseguros.com.br/content/uploads/2023/11/seguro-rcp-contador-1-1920x0-c-default.jpg" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-700" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 to-transparent" />
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-sm">
              <MagnifyingGlass />
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-violet-600 bg-violet-50 px-2 py-0.5 rounded">{t('cases.contabil.tag')}</span>
              <span className="text-[10px] font-mono uppercase text-slate-400">2024</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">{t('cases.contabil.title')}</h3>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-6">{t('cases.contabil.desc')}</p>
            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-4 transition-all">
              <span>{t('cases.cta')}</span> <ArrowRight />
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
