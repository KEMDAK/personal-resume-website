/**
 * Navigation Component
 * 
 * Fixed header navigation bar with:
 * - Logo/branding
 * - Navigation links to all sections
 * - Smooth scroll-to-section functionality
 * - Responsive design
 */

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

  const handleContactClick = () => {
    // Scroll to the contact section at the bottom
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-green-400/30">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center gap-4">
        {/* Logo/Branding */}
        <div className="text-lg md:text-2xl font-bold text-green-400 glow flex-shrink-0">
          &lt;KAREEM /&gt;
        </div>

        {/* Navigation Links */}
        <div className="flex gap-2 md:gap-8 flex-wrap justify-end">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onNavigate(section)}
              className="text-xs md:text-sm text-green-400 hover:text-green-200 uppercase tracking-widest transition-colors duration-300 hover:glow flex-shrink-0"
            >
              {section}
            </button>
          ))}
          <button
            onClick={handleContactClick}
            className="text-xs md:text-sm text-green-400 hover:text-green-200 uppercase tracking-widest transition-colors duration-300 hover:glow flex-shrink-0"
          >
            contact
          </button>
        </div>
      </div>
    </nav>
  );
};
