import { motion } from 'motion/react';
import { LinkedinLogo, ArrowUpRight } from '@phosphor-icons/react';
import { TestimonialsColumn, type Testimonial } from '../components/ui/testimonials-columns-1';
import { useT } from '../i18n/LangContext';
import { testimonialsData } from '../data/testimonials';

export function Testimonials() {
  const { t, lang } = useT();

  const testimonials: Testimonial[] = testimonialsData.map((d) => ({
    text: d.text[lang],
    image: d.image,
    initials: d.initials,
    gradient: d.gradient,
    name: d.name,
    role: d.role[lang],
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 8);

  return (
    <section id="recomendacoes" className="max-w-6xl mx-auto mb-32 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
      >
        <div className="flex justify-center">
          <div className="border border-slate-200 py-1 px-4 rounded-lg text-sm text-slate-700 bg-white">
            {t('recomendacoes.label')}
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-slate-900">
          {t('recomendacoes.title')}
        </h2>
        <p className="text-center mt-5 text-slate-600 opacity-75">
          {t('recomendacoes.subtitle')}
        </p>
      </motion.div>

      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
        <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://www.linkedin.com/in/cleidson-productdesigner/details/recommendations/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors group"
        >
          <LinkedinLogo weight="bold" className="text-base text-blue-600" />
          <span>{t('recomendacoes.cta')}</span>
          <ArrowUpRight weight="bold" className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
