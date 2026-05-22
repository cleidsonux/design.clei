import { useEffect } from 'react';

/**
 * Adds the `.active` class to `.reveal` elements as they enter the viewport.
 *
 * Hardened against the failure mode where sections stayed permanently hidden:
 * - threshold 0 → any pixel visible triggers the reveal
 * - safety timeout → if the observer somehow misses an element, everything is
 *   force-activated after 1.2s so content is never stuck invisible.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('active');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' },
    );
    els.forEach((el) => observer.observe(el));

    // Fail-safe: nothing should ever remain invisible.
    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add('active'));
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
}
