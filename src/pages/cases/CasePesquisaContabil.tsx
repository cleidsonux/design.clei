import { Student, Users, ChatDots, ChartLine, Lightbulb, Warning } from '@phosphor-icons/react';
import { CaseLayout } from './CaseLayout';
import { useT } from '../../i18n/LangContext';
import { casePesquisaContent } from '../../data/casePesquisaContent';

export function CasePesquisaContabil() {
  const { lang } = useT();
  const c = casePesquisaContent[lang];

  return (
    <CaseLayout current="pesquisa-contabil">
      <header className="space-y-6 mb-16">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3 py-1 bg-violet-50 text-violet-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-violet-100">{c.tag1}</span>
          <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-200">{c.tag2}</span>
          <span className="text-slate-400 text-xs font-mono">{c.period}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
          {c.titlePart1} <br />
          <span className="text-violet-600">{c.titlePart2}</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">{c.hero}</p>
      </header>

      <div className="aspect-[21/9] bg-gradient-to-br from-violet-950 via-slate-900 to-violet-950 rounded-[2.5rem] overflow-hidden border border-slate-200 relative flex items-center justify-center shadow-xl mb-20">
        <img src="https://www.lafscontabilidade.com.br/blog/wp-content/uploads/2020/02/contabilidade-completa-940x414.png" alt="" className="w-full h-full object-cover object-center opacity-60" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(76,29,149,0.4) 0%, rgba(15,23,42,0.6) 100%)' }} />
        <div className="absolute inset-0 flex flex-col items-end justify-end p-10">
          <div className="text-right">
            <span className="text-violet-300 text-[10px] font-mono uppercase tracking-widest block mb-1">{c.coverLabel}</span>
            <span className="text-white text-3xl font-bold block">{c.coverHeadline}</span>
            <span className="text-slate-300 text-sm">{c.coverSub}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-12 text-slate-700 leading-relaxed">
        <div className="md:col-span-8 space-y-14">

          <section className="space-y-4 reveal">
            <h2 className="text-2xl font-bold text-slate-900 underline decoration-violet-500 decoration-4 underline-offset-8">{c.s1Title}</h2>
            <p>{c.s1P1}</p>
            <p><strong>{c.s1P2Label}</strong> {c.s1P2}</p>
            <p><strong>{c.s1P3Label}</strong> {c.s1P3}</p>
            <div className="p-5 bg-violet-50 border border-violet-100 rounded-2xl mt-2">
              <div className="flex gap-3">
                <Student weight="fill" className="text-violet-500 text-xl mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-violet-900 mb-1">{c.s1WhyTitle}</h4>
                  <p className="text-sm text-violet-800 leading-relaxed">{c.s1WhyText}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6 reveal">
            <h2 className="text-2xl font-bold text-slate-900 underline decoration-violet-500 decoration-4 underline-offset-8">{c.s2Title}</h2>
            <p>{c.s2P1}</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {c.s2Items.map((item, i) => {
                const icons = [Users, ChatDots, ChartLine];
                const Icon = icons[i];
                return (
                  <div key={item.title} className="bg-violet-50 border border-violet-100 rounded-2xl p-4 text-center">
                    <Icon className="text-2xl text-violet-500 mb-2 block mx-auto" />
                    <span className="text-xs font-bold text-slate-700 block">{item.title}</span>
                    <span className="text-[11px] text-slate-500 block mt-1">{item.sub}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-10 reveal">
            <h2 className="text-2xl font-bold text-slate-900 underline decoration-violet-500 decoration-4 underline-offset-8">{c.s3Title}</h2>
            {c.temas.map((t) => (
              <div key={t.n} className="border border-slate-200 rounded-3xl overflow-hidden">
                <div className="bg-violet-900 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">{t.n}</span>
                    <span className="text-white font-bold">{t.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-violet-300">{t.nps}</span>
                </div>
                <div className="p-6 space-y-4">
                  <p><strong>{lang === 'pt' ? 'Dor principal:' : lang === 'en' ? 'Main pain:' : 'Dolor principal:'}</strong> {t.dor}</p>
                  <div className="bg-violet-50 border-l-4 border-violet-400 rounded-r-2xl p-4">
                    <p className="text-sm italic text-slate-600">{t.quote}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500"><strong className="text-slate-700">{lang === 'pt' ? 'Recomendação:' : lang === 'en' ? 'Recommendation:' : 'Recomendación:'}</strong> {t.rec}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="space-y-6 reveal">
            <h2 className="text-2xl font-bold text-slate-900 underline decoration-violet-500 decoration-4 underline-offset-8">{c.s4Title}</h2>
            <div className="space-y-3">
              {c.priorities.map((p, i) => (
                <div key={p.n} className="flex gap-4 items-start p-4 bg-white border border-slate-200 rounded-2xl">
                  <span className={`w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold shrink-0 ${i === 0 || i === 1 ? 'bg-violet-600' : i === 2 ? 'bg-violet-500' : 'bg-violet-400'}`}>{p.n}</span>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{p.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-violet-600">{c.s5Label}</span>
            <h2 className="text-2xl font-bold text-slate-900 leading-snug">{c.s5Title}</h2>
            <div className="p-5 bg-violet-50 border border-violet-100 rounded-2xl">
              <div className="flex gap-3">
                <Lightbulb weight="fill" className="text-violet-500 text-xl mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-violet-900 mb-1">{c.s5CalloutTitle}</h4>
                  <p className="text-sm text-violet-800 leading-relaxed">{c.s5CalloutText}</p>
                </div>
              </div>
            </div>
            <p>{c.s5P1}</p>
            <div className="p-5 bg-amber-50 border border-amber-100 rounded-2xl">
              <div className="flex gap-3">
                <Warning weight="fill" className="text-amber-500 text-xl mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-amber-900 mb-1">{c.s5WhatIWouldDoTitle}</h4>
                  <p className="text-sm text-amber-800 leading-relaxed">{c.s5WhatIWouldDoText}</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        <aside className="md:col-span-4 space-y-6">
          <div className="p-6 bg-slate-900 text-white rounded-[2rem] sticky top-8 space-y-6">
            <div>
              <h3 className="text-[10px] font-mono text-violet-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Lightbulb weight="fill" /> {c.sideStrategicLabel}</h3>
              <p className="text-sm text-slate-300 leading-relaxed italic">{c.sideStrategic}</p>
            </div>
            <hr className="border-slate-700" />
            <div>
              <h3 className="text-[10px] font-mono text-violet-400 uppercase tracking-widest mb-4">{c.sideNumbersLabel}</h3>
              <ul className="space-y-3 text-sm">
                {c.sideNumbers.map((n) => (
                  <li key={n.label} className="flex items-center justify-between">
                    <span className="text-slate-400">{n.label}</span>
                    <span className="font-bold text-violet-400">{n.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </CaseLayout>
  );
}
