/**
 * SectionIndicator Component
 * 
 * A fixed vertical indicator on the right side of the screen
 * showing which section the user is currently viewing.
 * Each dot represents a main section and highlights when active.
 */

import { useState, useEffect } from 'react';

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
    <div
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center"
          aria-label={`Go to ${section.label}`}
        >
          {/* Tooltip label */}
          <span
            className={`absolute right-6 px-2 py-1 text-xs bg-black border border-green-400/30 rounded whitespace-nowrap transition-all duration-200 ${
              activeSection === section.id
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
            }`}
          >
            {section.label}
          </span>

          {/* Dot indicator */}
          <span
            className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-green-400 border-green-400 shadow-[0_0_8px_rgba(0,255,0,0.6)]'
                : 'bg-transparent border-green-400/40 hover:border-green-400 hover:bg-green-400/20'
            }`}
          />
        </button>
      ))}
    </div>
  );
};
