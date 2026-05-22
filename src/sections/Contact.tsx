import { EnvelopeSimple, WhatsappLogo, LinkedinLogo, ArrowUpRight } from '@phosphor-icons/react';
import { useT } from '../i18n/LangContext';

const channels = [
  {
    key: 'contact.email',
    href: 'mailto:cleidson.ux@gmail.com',
    icon: EnvelopeSimple,
    accent: 'group-hover:text-rose-500',
  },
  {
    key: 'contact.whatsapp',
    href: 'https://wa.me/5545991249512',
    icon: WhatsappLogo,
    accent: 'group-hover:text-emerald-500',
  },
  {
    key: 'contact.linkedin',
    href: 'https://www.linkedin.com/in/cleidson-productdesigner/',
    icon: LinkedinLogo,
    accent: 'group-hover:text-blue-600',
  },
];

export function Contact() {
  const { t } = useT();
  return (
    <section id="contato" className="mb-32 reveal">
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-14 relative overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full pointer-events-none" />

        <div className="relative">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-5">
            {t('contact.label')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] max-w-2xl">
            {t('contact.headline')}
          </h2>
          <p className="text-slate-400 mt-5 text-base md:text-lg leading-relaxed max-w-xl">
            {t('contact.description')}
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {channels.map(({ key, href, icon: Icon, accent }) => (
              <a
                key={key}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <span className="flex items-center gap-3">
                  <Icon weight="bold" className={`text-xl text-slate-300 transition-colors ${accent}`} />
                  <span className="text-sm font-medium text-white">{t(key)}</span>
                </span>
                <ArrowUpRight weight="bold" className="text-sm text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
