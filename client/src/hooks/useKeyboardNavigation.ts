/**
 * useKeyboardNavigation Hook
 * 
 * Provides keyboard shortcuts for navigating between sections:
 * - Arrow Down / J: Navigate to next section
 * - Arrow Up / K: Navigate to previous section
 * - Home: Go to top (hero section)
 * - End: Go to bottom (contact section)
 * - 1-7: Jump to specific sections
 */

import { useEffect, useCallback } from 'react';

const sections = [
  'hero',
  'about',
  'experience',
  'education',
  'projects',
  'skills',
  'contact',
];

/**
 * Get the current section based on scroll position
 */
const getCurrentSectionIndex = (): number => {
  const scrollPosition = window.scrollY + window.innerHeight / 3;

  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]) ||
                   document.querySelector(`[data-section="${sections[i]}"]`);
    
    if (element && scrollPosition >= element.offsetTop) {
      return i;
    }
  }

  return 0;
};

/**
 * Scroll to a specific section by index
 */
const scrollToSectionByIndex = (index: number): void => {
  const clampedIndex = Math.max(0, Math.min(index, sections.length - 1));
  const sectionId = sections[clampedIndex];

  if (sectionId === 'hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(sectionId) ||
                 document.querySelector(`[data-section="${sectionId}"]`);

  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed nav
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
};

/**
 * useKeyboardNavigation Hook
 * 
 * @example
 * useKeyboardNavigation();
 */
export const useKeyboardNavigation = (): void => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Don't trigger if user is typing in an input field
    const target = event.target as HTMLElement;
    if (
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.isContentEditable
    ) {
      return;
    }

    const currentIndex = getCurrentSectionIndex();

    switch (event.key) {
      case 'ArrowDown':
      case 'j':
        event.preventDefault();
        scrollToSectionByIndex(currentIndex + 1);
        break;

      case 'ArrowUp':
      case 'k':
        event.preventDefault();
        scrollToSectionByIndex(currentIndex - 1);
        break;

      case 'Home':
        event.preventDefault();
        scrollToSectionByIndex(0);
        break;

      case 'End':
        event.preventDefault();
        scrollToSectionByIndex(sections.length - 1);
        break;

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
        event.preventDefault();
        scrollToSectionByIndex(parseInt(event.key) - 1);
        break;

      default:
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};
