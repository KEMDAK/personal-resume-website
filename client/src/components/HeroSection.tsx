/**
 * HeroSection Component
 * 
 * Main hero/intro section with:
 * - Large animated name display
 * - Professional title
 * - Brief description
 * - Call-to-action buttons (Explore and Download CV)
 * - Animated geometric background elements
 */

import { ChevronDown, Download } from 'lucide-react';

interface HeroSectionProps {
  /** Callback when explore button is clicked */
  onExplore: () => void;
}

/**
 * HeroSection Component
 * 
 * @param onExplore - Callback function when the explore button is clicked
 * 
 * @example
 * <HeroSection onExplore={() => scrollToSection('about')} />
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 border-b border-green-400/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating square in top-left */}
        <div className="absolute top-10 left-10 w-32 md:w-64 h-32 md:h-64 border-2 border-green-400/10 rotate-45 animate-pulse" />
        
        {/* Pulsing circle in bottom-right */}
        <div className="absolute bottom-20 right-20 w-48 md:w-96 h-48 md:h-96 border-2 border-green-400/5 rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Terminal prompt indicator */}
        <div className="mb-8 animate-pulse">
          <span className="text-green-400/60">&gt; _</span>
        </div>

        {/* Main name - large and glowing */}
        <h1 className="text-5xl md:text-8xl font-bold mb-4 glow">
          KAREEM
        </h1>

        {/* Last name */}
        <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-green-300">
          MOKHTAR
        </h2>

        {/* Professional title */}
        <p className="text-lg md:text-2xl text-green-400 mb-3 md:mb-4">
          Senior Software Engineer @ Meta
        </p>

        {/* Brief description */}
        <p className="text-sm md:text-lg text-green-400/80 mb-8 md:mb-12 max-w-2xl mx-auto">
          Building scalable systems. Solving complex problems. Crafting elegant code.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExplore}
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-200 uppercase text-xs md:text-sm tracking-wider transition-all duration-300 hover:glow border border-green-400/50 px-4 md:px-6 py-2 md:py-3 hover:bg-green-400/10"
          >
            Explore <ChevronDown className="w-4 md:w-5 h-4 md:h-5 animate-bounce" />
          </button>
          
          <a
            href="/Kareem_Mokhtar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-200 uppercase text-xs md:text-sm tracking-wider transition-all duration-300 hover:glow border border-green-400/50 px-4 md:px-6 py-2 md:py-3 hover:bg-green-400/10"
          >
            Download CV <Download className="w-4 md:w-5 h-4 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
