import { FlowArrow, Desktop, Storefront, ArrowDown, Lightbulb, Warning, LockKey, SlidersHorizontal, UploadSimple, Star, TrendUp } from '@phosphor-icons/react';
import { CaseLayout } from './CaseLayout';
import { useT } from '../../i18n/LangContext';
import { caseFavoritasContent } from '../../data/caseFavoritasContent';

export function CaseFavoritas() {
  const { lang } = useT();
  const c = caseFavoritasContent[lang];

  return (
    <CaseLayout current="favoritas">
      <header className="space-y-6 mb-16">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3 py-1 bg-rose-50 text-rose-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-rose-100">{c.tag1}</span>
          <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-200">{c.tag2}</span>
          <span className="text-slate-400 text-xs font-mono">{c.period}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05]">
          {c.titlePart1}<br />
          <span className="text-rose-600 whitespace-pre-line">{c.titlePart2}</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">{c.hero}</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2 border-t border-slate-100">
          {c.meta.map((m) => (
            <div key={m.label}>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">{m.label}</span>
              <span className="text-sm font-semibold text-slate-800">{m.value}</span>
            </div>
          ))}
        </div>
      </header>

      <div className="aspect-[21/9] bg-gradient-to-br from-rose-950 via-slate-900 to-rose-950 rounded-[2.5rem] overflow-hidden border border-slate-200 relative flex items-center justify-center shadow-xl mb-20">
        <img src="/media/Favoritas/Blog-TAMANHO-PADRAO-1.png" alt="Favoritas" className="w-full h-full object-cover object-top opacity-80" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(136,19,55,0.4) 0%, rgba(15,23,42,0.55) 100%)' }} />
        <div className="absolute inset-0 flex flex-col items-end justify-end p-10">
          <div className="text-right">
            <span className="text-rose-300 text-[10px] font-mono uppercase tracking-widest block mb-1">{c.coverLabel}</span>
            <span className="text-white text-3xl font-bold block">{c.coverHeadline}</span>
            <span className="text-slate-300 text-sm">{c.coverSub}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-14 text-slate-700 leading-relaxed">
        <div className="md:col-span-8 space-y-16">

          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600">{c.s1Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s1Title}</h2>
            <p>{c.s1P1}</p>
            <p>{c.s1P2}</p>
            <p>{c.s1P3}</p>
            <div className="p-6 bg-slate-50 border-l-4 border-rose-400 rounded-r-2xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">{c.s1HmwLabel}</span>
              <p className="text-lg font-medium italic text-slate-700">{c.s1Hmw}</p>
            </div>
          </section>

          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600">{c.s2Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s2Title}</h2>
            <p>{c.s2P1}</p>
            <p>{c.s2P2}</p>
            <div className="grid sm:grid-cols-3 gap-4 mt-2">
              {c.s2Items.map((item, i) => {
                const icons = [FlowArrow, Desktop, Storefront];
                const Icon = icons[i];
                return (
                  <div key={i} className="p-4 bg-white border border-slate-200 rounded-2xl text-center">
                    <Icon weight="fill" className="text-rose-500 text-2xl mb-2 block mx-auto" />
                    <span className="text-xs font-semibold text-slate-700 block">{item.title}</span>
                    <span className="text-xs text-slate-400">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-6 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600">{c.s3Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s3Title}</h2>
            <p>{c.s3P1}</p>

            <div className="rounded-2xl border border-slate-200 overflow-hidden">
              <div className="p-5 bg-rose-50 border-b border-rose-100">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{c.s3Step1Title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{c.s3Step1Text}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-1 bg-white border-b border-slate-100"><ArrowDown className="text-rose-300 text-lg" /></div>
              <div className="p-5 bg-white border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div className="w-full">
                    <h4 className="font-bold text-slate-900 text-sm mb-3">{c.s3Step2Title}</h4>
                    <p className="text-xs text-slate-500 mb-3">{c.s3Step2P}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {c.s3Params.map((p) => (
                        <div key={p} className="p-2 bg-slate-50 rounded-xl text-center">
                          <span className="text-[10px] font-mono text-slate-500 block leading-tight">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-1 bg-white border-b border-slate-100"><ArrowDown className="text-rose-300 text-lg" /></div>
              <div className="p-5 bg-white border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div className="w-full">
                    <h4 className="font-bold text-slate-900 text-sm mb-3">{c.s3Step3Title}</h4>
                    <p className="text-xs text-slate-500 mb-3">{c.s3Step3P}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {c.s3Tags.map((t) => (
                        <span key={t} className="px-3 py-1 bg-rose-50 text-rose-700 text-[10px] font-mono rounded-full border border-rose-100">{t}</span>
                      ))}
                      <span className="text-[10px] font-mono text-slate-400 flex items-center">{c.s3Arrow}</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 font-mono">{c.s3Example}</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-1 bg-white border-b border-slate-100"><ArrowDown className="text-rose-300 text-lg" /></div>
              <div className="p-5 bg-rose-50">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-slate-800 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{c.s3Step4Title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{c.s3Step4Text}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600">{c.s4Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s4Title}</h2>
            <p>{c.s4P1}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {['Desktop.png', 'Desktop2.png', 'Desktop3.png', 'Desktop4.png'].map((name) => (
                <div key={name} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img src={`/media/Favoritas/${name}`} alt={name} className="w-full object-cover object-top" />
                </div>
              ))}
            </div>
            <div className="p-5 bg-rose-50 border border-rose-100 rounded-2xl">
              <div className="flex gap-3">
                <Lightbulb weight="fill" className="text-rose-500 text-xl mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-rose-900 mb-1">{c.s4Callout}</h4>
                  <p className="text-sm text-rose-800 leading-relaxed">{c.s4CalloutText}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600">{c.s5Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s5Title}</h2>
            <p>{c.s5P1}</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {['Desktop9.png', 'Desktop10.png', 'Desktop13png.png'].map((name) => (
                <div key={name} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img src={`/media/Favoritas/${name}`} alt={name} className="w-full object-cover object-top" />
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 font-mono text-center">{c.s5Caption}</p>
          </section>

          {/* Resultados */}
          <section className="space-y-6 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600">{c.s6Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s6Title}</h2>
            <p>{c.s6P1}</p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-6 bg-slate-900 text-white rounded-2xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-3">{c.s6Metric1Label}</span>
                <span className="text-4xl font-bold text-white block leading-none mb-1">{c.s6Metric1Value}</span>
                <p className="text-xs text-slate-400 leading-relaxed">{c.s6Metric1Text}</p>
              </div>
              <div className="p-6 bg-rose-700 text-white rounded-2xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300 block mb-3">{c.s6Metric2Label}</span>
                <span className="text-4xl font-bold text-white block leading-none mb-1">{c.s6Metric2Value}</span>
                <p className="text-xs text-rose-200 leading-relaxed">{c.s6Metric2Text}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {c.s6Kpis.map((kpi, i) => (
                <div key={i} className="p-4 bg-white border border-slate-200 rounded-2xl text-center">
                  <span className={`text-2xl font-bold block ${i === 2 ? 'text-rose-600' : 'text-slate-900'}`}>{kpi.value}</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mt-1">{kpi.label}</span>
                </div>
              ))}
            </div>
            <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <div className="flex gap-3">
                <TrendUp weight="fill" className="text-emerald-500 text-xl mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-emerald-900 mb-1">{c.s6CalloutTitle}</h4>
                  <p className="text-sm text-emerald-800 leading-relaxed">{c.s6CalloutText}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Decisões de Arquitetura */}
          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600">{c.s7Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s7Title}</h2>
            <div className="grid sm:grid-cols-2 gap-5 mt-2">
              {c.s7Decisions.map((d, i) => {
                const icons = [LockKey, SlidersHorizontal, UploadSimple, Star];
                const Icon = icons[i];
                return (
                  <div key={i} className="flex gap-4">
                    <Icon weight="fill" className="text-rose-500 text-xl mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{d.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{d.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Aprendizados */}
          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600">{c.s8Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s8Title}</h2>
            <p>{c.s8P1}</p>
            <p>{c.s8P2}</p>
            <div className="space-y-4">
              {c.s8Lessons.map((l, i) => (
                <div key={i} className="p-5 bg-amber-50 border border-amber-100 rounded-2xl">
                  <div className="flex gap-3">
                    <Warning weight="fill" className="text-amber-500 text-xl mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm text-amber-900 mb-1">{l.title}</h4>
                      <p className="text-sm text-amber-800 leading-relaxed">{l.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-slate-900 text-white rounded-2xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-3">{c.s8FinalLabel}</span>
              <p className="text-base leading-relaxed text-slate-200">{c.s8Final}</p>
            </div>
          </section>

        </div>

        <aside className="md:col-span-4 space-y-6">
          <div className="p-6 bg-slate-900 text-white rounded-[2rem] sticky top-8 space-y-6">
            <div>
              <h3 className="text-[10px] font-mono text-rose-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Lightbulb weight="fill" /> {c.sideStrategicLabel}</h3>
              <p className="text-sm text-slate-300 leading-relaxed italic">{c.sideStrategic}</p>
            </div>
            <hr className="border-slate-700" />
            <div>
              <h3 className="text-[10px] font-mono text-rose-400 uppercase tracking-widest mb-4">{c.sideDeliveryLabel}</h3>
              <ul className="space-y-3 text-sm">
                {c.sideDelivery.map((d) => (
                  <li key={d.label} className="flex items-center justify-between">
                    <span className="text-slate-400">{d.label}</span>
                    <span className="font-bold text-rose-400">{d.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="border-slate-700" />
            <div>
              <h3 className="text-[10px] font-mono text-rose-400 uppercase tracking-widest mb-3">{c.sideStackLabel}</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Miro', 'Discovery'].map((t) => (
                  <span key={t} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded font-mono">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </CaseLayout>
  );
}
