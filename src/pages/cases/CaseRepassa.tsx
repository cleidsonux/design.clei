import { UsersThree, Layout, Robot, ChartBar, FigmaLogo, UserPlus, Stack, DeviceMobile, Lightning as LightningIcon, ChartLine, HandPalm, Eye, Warning, Lightbulb, Prohibit } from '@phosphor-icons/react';
import { CaseLayout } from './CaseLayout';
import { useT } from '../../i18n/LangContext';
import { caseRepassaContent } from '../../data/caseRepassaContent';

const brands = [
  { name: 'Zara', pct: 100, color: 'bg-blue-700' },
  { name: 'Renner', pct: 65, color: 'bg-blue-600' },
  { name: 'Farm', pct: 43, color: 'bg-blue-500' },
  { name: 'Hering', pct: 41, color: 'bg-teal-500' },
  { name: 'Adidas', pct: 38, color: 'bg-emerald-500' },
  { name: 'Nike', pct: 30, color: 'bg-emerald-400' },
  { name: 'Arezzo', pct: 27, color: 'bg-green-400' },
  { name: 'La La Blanc', pct: 25, color: 'bg-lime-400' },
  { name: 'Calvin Klein', pct: 22, color: 'bg-yellow-300' },
  { name: 'Animale', pct: 20, color: 'bg-yellow-200' },
];

export function CaseRepassa() {
  const { lang } = useT();
  const c = caseRepassaContent[lang];

  return (
    <CaseLayout current="repassa">
      <header className="space-y-6 mb-16">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-100">{c.tag1}</span>
          <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-200">{c.tag2}</span>
          <span className="text-slate-400 text-xs font-mono">{c.period}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05]">
          {c.titlePart1}<br />
          <span className="text-emerald-600 whitespace-pre-line">{c.titlePart2}</span>
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

      <div className="aspect-[21/9] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 relative flex items-center justify-center shadow-xl mb-20">
        <img src="/media/repassa_capa.png" alt="Repassa" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex flex-col items-end justify-end p-10" style={{ background: 'linear-gradient(135deg, rgba(6,78,59,0.3) 0%, rgba(15,23,42,0.6) 100%)' }}>
          <div className="text-right">
            <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-widest block mb-1">{c.coverLabel}</span>
            <span className="text-white text-3xl font-bold block">{c.coverHeadline}</span>
            <span className="text-slate-400 text-sm">{c.coverSub}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-14 text-slate-700 leading-relaxed">
        <div className="md:col-span-8 space-y-16">

          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">{c.s1Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s1Title}</h2>
            <p>{c.s1P1}</p>
            <p>{c.s1P2}</p>
            <p>{c.s1P3}</p>
            <div className="p-6 bg-slate-50 border-l-4 border-emerald-400 rounded-r-2xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">{c.s1HmwLabel}</span>
              <p className="text-lg font-medium italic text-slate-700">{c.s1Hmw}</p>
            </div>
          </section>

          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">{c.s2Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s2Title}</h2>
            <p>{c.s2P1}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="p-5 bg-red-50 border border-red-100 rounded-2xl">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 block mb-3">{c.s2RejectLabel}</span>
                <span className="text-4xl font-bold text-red-500 block mb-1">{c.s2RejectValue}</span>
                <p className="text-xs text-slate-500 leading-relaxed">{c.s2RejectText}</p>
              </div>
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-3">{c.s2TicketLabel}</span>
                <span className="text-4xl font-bold text-slate-500 block mb-1">{c.s2TicketValue}</span>
                <p className="text-xs text-slate-500 leading-relaxed">{c.s2TicketText}</p>
              </div>
              <div className="p-5 bg-white border border-slate-200 rounded-2xl col-span-2">
                <Prohibit weight="fill" className="text-orange-400 text-2xl mb-3 block" />
                <h4 className="font-bold text-sm text-slate-900 mb-1">{c.s2NoFormTitle}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{c.s2NoFormText}</p>
              </div>
            </div>
          </section>

          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">{c.s3Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s3Title}</h2>
            <p>{c.s3P1}</p>
            <p>{c.s3P2}</p>
            <ul className="space-y-4 mt-2">
              {c.s3Items.map((item, i) => {
                const icons = [UsersThree, Layout, Robot, ChartBar];
                const Icon = icons[i];
                return (
                  <li key={i} className="flex gap-4">
                    <Icon className="text-emerald-500 text-xl mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-0.5">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 pt-8 border-t border-slate-100 space-y-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">{c.s3OpsLabel}</span>
              <p>{c.s3OpsP}</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {c.s3Ops.map((op, i) => {
                  const icons = [FigmaLogo, UserPlus, Stack];
                  const Icon = icons[i];
                  return (
                    <div key={i} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                      <Icon className="text-emerald-500 text-xl block" />
                      <h4 className="font-semibold text-slate-900 text-sm">{op.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{op.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">{c.s4Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s4Title}</h2>
            <p>{c.s4P1}</p>
            <div className="space-y-4 mt-2">
              {c.s4Layers.map((layer, i) => {
                const icons = [DeviceMobile, LightningIcon, ChartLine];
                const colors = ['emerald', 'blue', 'violet'];
                const Icon = icons[i];
                const color = colors[i];
                return (
                  <div key={i} className="flex gap-5 p-5 bg-white border border-slate-200 rounded-2xl">
                    <div className={`w-10 h-10 rounded-xl bg-${color}-50 border border-${color}-100 flex items-center justify-center shrink-0`}>
                      <Icon className={`text-${color}-${color === 'blue' ? '500' : '600'} text-lg`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{layer.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{layer.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-6 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">{c.s5Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s5Title}</h2>
            <p>{c.s5P1}</p>

            {[
              { n: 1, screen: c.s5Screens[0], img: 'screencapture-captacao-repassa-figma-site-2026-05-10-11_25_41.png' },
              { n: 2, screen: c.s5Screens[1], img: 'screencapture-captacao-repassa-figma-site-2026-05-10-11_26_10.png' },
            ].map(({ n, screen, img }) => (
              <div key={n} className="space-y-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">{n}</span>
                  <span className="text-sm font-semibold text-slate-700">{screen.label}</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img src={`/media/Repassa/${img}`} alt={`Tela ${n}`} className="w-full object-cover object-top" />
                </div>
                <p className="text-xs text-slate-400 font-mono text-center">{screen.caption}</p>
              </div>
            ))}

            <div className="space-y-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
                <span className="text-sm font-semibold text-slate-700">{c.s5Tela3Label}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img src="/media/Repassa/screencapture-captacao-repassa-figma-site-2026-05-10-11_26_46.png" alt="Tela 3a" className="w-full object-cover object-top" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img src="/media/Repassa/screencapture-captacao-repassa-figma-site-2026-05-10-11_27_35.png" alt="Tela 3b" className="w-full object-cover object-top" />
                </div>
              </div>
              <p className="text-xs text-slate-400 font-mono text-center">{c.s5Tela3Caption}</p>
            </div>

            <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <div className="flex gap-3">
                <Lightbulb weight="fill" className="text-emerald-500 text-xl mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-emerald-900 mb-1">{c.s5CalloutTitle}</h4>
                  <p className="text-sm text-emerald-800 leading-relaxed">{c.s5CalloutText}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">{c.s6Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s6Title}</h2>
            <p>{c.s6P1}</p>
            <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative shadow-md mt-4">
              <img src="/media/discovery.png" alt="Dashboard Repassa" className="w-full h-full object-cover object-top" />
            </div>
            <p className="text-xs text-slate-400 font-mono text-center">{c.s6Caption}</p>
          </section>

          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">{c.s7Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s7Title}</h2>
            <div className="grid sm:grid-cols-2 gap-5 mt-2">
              {c.s7Decisions.map((d, i) => {
                const icons = [HandPalm, DeviceMobile, LightningIcon, Eye];
                const Icon = icons[i];
                return (
                  <div key={i} className="flex gap-4">
                    <Icon weight="fill" className="text-emerald-500 text-xl mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{d.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{d.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-6 pt-10 border-t border-slate-100 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">{c.s8Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s8Title}</h2>
            <p>{c.s8P1}</p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="col-span-2 bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 bg-emerald-500/10 rounded-full -translate-y-1/3 translate-x-1/3" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-6">{c.s8KeyApproval}</span>
                <div className="flex items-center gap-8">
                  <div>
                    <span className="text-5xl font-bold text-emerald-400 tracking-tight">+84%</span>
                    <p className="text-xs text-slate-500 mt-1">{c.s8KeyApprovalSub}</p>
                  </div>
                  <div className="ml-auto text-right hidden sm:block">
                    <p className="text-xs text-slate-400 leading-relaxed max-w-[220px]">{c.s8KeyApprovalNote}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 bg-emerald-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-400/10 rounded-full translate-y-1/3 -translate-x-1/3" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-6">{c.s8KeyTicket}</span>
                <div className="flex items-center gap-8">
                  <div>
                    <span className="text-5xl font-bold text-white tracking-tight">{c.s8KeyTicketLabel}</span>
                    <p className="text-xs text-emerald-300 mt-1">{c.s8KeyTicketSub}</p>
                  </div>
                  <div className="ml-auto text-right hidden sm:block">
                    <span className="text-3xl font-bold text-emerald-300">{c.s8KeyTicketDelta}</span>
                    <p className="text-xs text-emerald-200 mt-1">{c.s8KeyTicketDeltaSub}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 rounded-[2rem] p-8 text-white col-span-2 sm:col-span-1 relative overflow-hidden">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-4">{c.s8PiecesLabel}</span>
                <span className="text-5xl font-bold tracking-tight block mb-1">{c.s8PiecesValue}</span>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">{c.s8PiecesSub}</p>
              </div>
              <div className="bg-emerald-50 rounded-[2rem] p-8 border border-emerald-100 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest block mb-4">{c.s8SatLabel}</span>
                <span className="text-5xl font-bold text-slate-900 tracking-tight block mb-2">{c.s8SatValue}<span className="text-2xl text-slate-400 font-normal">/5.0</span></span>
                <p className="text-[10px] text-emerald-700 tracking-widest font-bold uppercase">{c.s8SatSub}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-[2rem] p-7">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-3">{c.s8SubsLabel}</span>
                <span className="text-4xl font-bold text-slate-900 tracking-tight block mb-1">{c.s8SubsValue}</span>
                <p className="text-xs text-slate-400 font-medium">{c.s8SubsSub}</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-[2rem] p-7">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-3">{c.s8TimeLabel}</span>
                <span className="text-4xl font-bold text-blue-600 tracking-tight block mb-1">{c.s8TimeValue}</span>
                <p className="text-xs text-slate-400 font-medium">{c.s8TimeSub}</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-4">{c.s8BrandsTitle}</span>
              <div className="space-y-2.5">
                {brands.map((b) => (
                  <div key={b.name} className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-20 text-right shrink-0">{b.name}</span>
                    <div className={`h-2 rounded-full ${b.color}`} style={{ width: `${b.pct}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-5 reveal">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600">{c.s9Label}</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-snug">{c.s9Title}</h2>
            <p>{c.s9P1}</p>
            <p>{c.s9P2}</p>
            <div className="space-y-4 mt-2">
              {c.s9Lessons.map((l, i) => (
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
            <div className="p-6 bg-slate-900 text-white rounded-2xl mt-2">
              <p className="text-base leading-relaxed text-slate-200">{c.s9Final}</p>
            </div>
          </section>

        </div>

        <aside className="md:col-span-4 space-y-6">
          <div className="p-6 bg-slate-900 text-white rounded-[2rem] sticky top-8 space-y-6">
            <div>
              <h3 className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Lightbulb weight="fill" /> {c.sideStrategicLabel}</h3>
              <p className="text-sm text-slate-300 leading-relaxed italic">{c.sideStrategic}</p>
            </div>
            <hr className="border-slate-700" />
            <div>
              <h3 className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-4">{c.sideBusinessLabel}</h3>
              <ul className="space-y-3">
                {c.sideBusiness.map((b) => (
                  <li key={b.label} className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{b.label}</span>
                    <span className="font-bold text-emerald-400">{b.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="border-slate-700" />
            <div>
              <h3 className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-3">{c.sideStackLabel}</h3>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Make', 'n8n', 'Supabase', 'NoCode'].map((t) => (
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
