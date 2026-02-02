/**
 * SectionIndicator Component
 * 
 * A fixed vertical indicator on the right side of the screen
 * showing which section the user is currently viewing.
 * Each dot represents a main section and highlights when active.
 */

import { useState, useEffect } from 'react';
import { trackSectionView } from '@/utils/analytics';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

/**
 * SectionIndicator Component
 * 
 * @example
 * <SectionIndicator />
 */
export const SectionIndicator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show indicator after scrolling past hero section
      setIsVisible(window.scrollY > 200);

      // Find the current section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id) || 
                       document.querySelector(`[data-section="${section.id}"]`);
        
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }

      // Default to hero if at the top
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    trackSectionView(sectionId);
    
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

  return (
    <nav
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}
      style={{
        transition: `
          opacity var(--transition-scroll),
          transform var(--transition-scroll)
        `
      }}
      role="navigation"
      aria-label="Section navigation"
      aria-hidden={!isVisible}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
          style={{
            outlineColor: 'var(--primary)',
          }}
          aria-label={`Go to ${section.label}`}
          aria-current={activeSection === section.id ? 'true' : undefined}
          tabIndex={isVisible ? 0 : -1}
        >
          {/* Tooltip label */}
          <span
            className={`absolute right-6 px-2 py-1 text-xs border rounded whitespace-nowrap ${
              activeSection === section.id
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
            }`}
            style={{
              backgroundColor: 'var(--background)',
              borderColor: 'var(--border-muted)',
              color: 'var(--foreground)',
              transition: `
                opacity var(--transition-tooltip),
                transform var(--transition-tooltip),
                background-color var(--transition-theme),
                border-color var(--transition-theme),
                color var(--transition-theme)
              `
            }}
          >
            {section.label}
          </span>

          {/* Dot indicator */}
          <span
            className="w-2.5 h-2.5 rounded-full border"
            style={{
              backgroundColor: activeSection === section.id ? 'var(--primary)' : 'transparent',
              borderColor: activeSection === section.id ? 'var(--primary)' : 'var(--border-muted)',
              boxShadow: activeSection === section.id ? '0 0 8px var(--glow-color)' : 'none',
              transition: `
                background-color var(--transition-theme),
                border-color var(--transition-theme),
                box-shadow var(--transition-theme)
              `
            }}
          />
        </button>
      ))}
    </nav>
  );
};
