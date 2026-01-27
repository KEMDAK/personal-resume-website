/**
 * Navigation Component
 * 
 * Fixed header navigation bar with:
 * - Skip to content link for accessibility
 * - Logo/branding
 * - Navigation links to all sections
 * - Smooth scroll-to-section functionality
 * - Responsive design
 * - Full keyboard accessibility
 */

import { trackSectionView } from '@/utils/analytics';

interface NavigationProps {
  /** Function to scroll to a specific section */
  onNavigate: (sectionId: string) => void;
}

/**
 * Navigation Component
 * 
 * @param onNavigate - Callback function when a navigation link is clicked
 * 
 * @example
 * <Navigation onNavigate={(sectionId) => scrollToSection(sectionId)} />
 */
export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  // List of navigation sections
  const sections = ['about', 'experience', 'education', 'projects', 'skills'];

  const handleNavClick = (sectionId: string) => {
    trackSectionView(sectionId);
    onNavigate(sectionId);
  };

  const handleContactClick = () => {
    trackSectionView('contact');
    // Scroll to the contact section at the bottom
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSkipToContent = () => {
    const mainContent = document.getElementById('about');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip to Content Link - visible only on focus for keyboard users */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          handleSkipToContent();
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-green-400 focus:text-black focus:font-bold focus:outline-none focus:ring-2 focus:ring-green-200"
      >
        Skip to main content
      </a>

      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-green-400/30"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center gap-4">
          {/* Logo/Branding */}
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg md:text-2xl font-bold text-green-400 glow flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Kareem Mokhtar - Go to top"
          >
            &lt;KAREEM /&gt;
          </a>

          {/* Navigation Links */}
          <div className="flex gap-2 md:gap-8 flex-wrap justify-end" role="menubar">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-xs md:text-sm text-green-400 hover:text-green-200 uppercase tracking-widest transition-colors duration-300 hover:glow flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                role="menuitem"
                aria-label={`Navigate to ${section} section`}
              >
                {section}
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className="text-xs md:text-sm text-green-400 hover:text-green-200 uppercase tracking-widest transition-colors duration-300 hover:glow flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black rounded"
              role="menuitem"
              aria-label="Navigate to contact section"
            >
              contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
