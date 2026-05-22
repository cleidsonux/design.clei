import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Controls scroll position on route changes.
 * - With a hash (e.g. /#cases): scrolls to that element.
 * - Without a hash: scrolls to the top.
 * Without this, React Router preserves the previous scroll position.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the destination page has rendered before scrolling.
      const id = window.requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      });
      return () => window.cancelAnimationFrame(id);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
