import { Hero } from '../sections/Hero';
import { Manifesto } from '../sections/Manifesto';
import { Cases } from '../sections/Cases';
import { Skills } from '../sections/Skills';
import { Mentoring } from '../sections/Mentoring';
import { Testimonials } from '../sections/Testimonials';
import { Contact } from '../sections/Contact';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export function Home() {
  useRevealOnScroll();
  return (
    <main className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
      <Hero />
      <Skills />
      <Manifesto />
      <Cases />
      <Mentoring />
      <Testimonials />
      <Contact />
    </main>
  );
}
