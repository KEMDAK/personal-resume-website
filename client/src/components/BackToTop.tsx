/**
 * BackToTop Component
 * 
 * A floating button that appears when the user scrolls down
 * and allows them to quickly return to the top of the page.
 */

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * BackToTop Component
 * 
 * @example
 * <BackToTop />
 */
export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 border rounded-full shadow-lg hover:glow focus:outline-none focus:ring-2 focus:ring-offset-2 theme-text-primary theme-hover-bg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--border-muted)',
        outlineColor: 'var(--primary)',
        transition: `
          opacity var(--transition-scroll),
          transform var(--transition-scroll),
          background-color var(--transition-theme),
          border-color var(--transition-theme),
          color var(--transition-theme),
          box-shadow var(--transition-hover)
        `
      }}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
};
