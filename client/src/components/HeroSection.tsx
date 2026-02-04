/**
 * HeroSection Component
 * 
 * Main hero/intro section with:
 * - Large animated name display with typing effect
 * - Professional title with typing animation
 * - Brief description
 * - Call-to-action buttons (Explore and Download CV)
 * - Animated geometric background elements with parallax scrolling
 * - Theme-aware CV download (light/dark versions)
 * - Analytics tracking for CV downloads with theme info
 */

import { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { trackCVDownload } from '@/utils/analytics';
import { useTheme } from '@/contexts/ThemeContext';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useParallax } from '@/hooks/useParallax';

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
  const { theme } = useTheme();
  
  // Typing effect states
  const [showLastName, setShowLastName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  // Parallax effects for background elements (different speeds for depth)
  const { style: squareParallax } = useParallax({ speed: 0.15, maxOffset: 100 });
  const { style: circleParallax } = useParallax({ speed: 0.25, maxOffset: 150 });
  const { style: smallCircleParallax } = useParallax({ speed: 0.1, maxOffset: 80 });
  const { style: diagonalLineParallax } = useParallax({ speed: 0.2, maxOffset: 120 });

  // First name typing effect
  const { displayedText: firstName, isComplete: firstNameComplete } = useTypingEffect('KAREEM', {
    typingSpeed: 120,
    startDelay: 800,
    onComplete: () => setShowLastName(true)
  });

  // Last name typing effect
  const { displayedText: lastName, isComplete: lastNameComplete } = useTypingEffect('MOKHTAR', {
    typingSpeed: 100,
    startDelay: showLastName ? 200 : 10000,
    onComplete: () => setShowTitle(true)
  });

  // Title typing effect
  const { displayedText: title, isComplete: titleComplete } = useTypingEffect('Senior Software Engineer @ Meta', {
    typingSpeed: 50,
    startDelay: showTitle ? 300 : 10000,
    onComplete: () => setShowDescription(true)
  });

  // Description typing effect
  const { displayedText: description, isComplete: descriptionComplete } = useTypingEffect(
    'Building scalable systems. Solving complex problems. Crafting elegant code.',
    {
      typingSpeed: 30,
      startDelay: showDescription ? 200 : 10000,
      onComplete: () => setShowButtons(true)
    }
  );
  
  // Select CV based on current theme
  const cvUrl = theme === 'dark' 
    ? '/resume_dark.pdf' 
    : '/resume_light.pdf';

  const handleCVDownload = () => {
    trackCVDownload(theme);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 theme-border-subtle overflow-hidden" style={{ borderBottomWidth: '1px' }} aria-label="Introduction">
      {/* Animated background elements with parallax - decorative only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Rotating square in top-left - slowest parallax */}
        <div 
          className="absolute top-10 left-10 w-32 md:w-64 h-32 md:h-64 border-2 rotate-45 animate-pulse" 
          style={{ 
            borderColor: 'var(--border-subtle)',
            ...squareParallax
          }} 
        />
        
        {/* Large pulsing circle in bottom-right - medium parallax */}
        <div 
          className="absolute bottom-20 right-20 w-48 md:w-96 h-48 md:h-96 border-2 rounded-full animate-pulse" 
          style={{ 
            borderColor: 'var(--border-subtle)', 
            opacity: 0.5,
            ...circleParallax
          }} 
        />

        {/* Small circle in top-right - slow parallax */}
        <div 
          className="absolute top-32 right-32 w-16 md:w-32 h-16 md:h-32 border rounded-full" 
          style={{ 
            borderColor: 'var(--border-subtle)', 
            opacity: 0.3,
            ...smallCircleParallax
          }} 
        />

        {/* Diagonal line in bottom-left - fast parallax */}
        <div 
          className="absolute bottom-40 left-20 w-32 md:w-64 h-0.5 rotate-45" 
          style={{ 
            backgroundColor: 'var(--border-subtle)', 
            opacity: 0.4,
            ...diagonalLineParallax
          }} 
        />

        {/* Additional decorative dots */}
        <div 
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full" 
          style={{ 
            backgroundColor: 'var(--primary)', 
            opacity: 0.3,
            ...smallCircleParallax
          }} 
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full" 
          style={{ 
            backgroundColor: 'var(--primary)', 
            opacity: 0.2,
            ...circleParallax
          }} 
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Terminal prompt indicator - decorative */}
        <div className="mb-8" aria-hidden="true">
          <span className="theme-text-subtle">&gt; <span className="animate-blink">_</span></span>
        </div>

        {/* Main name - large and glowing with typing effect */}
        <h1 className="text-5xl md:text-8xl font-bold mb-4 glow theme-text-primary min-h-[1.2em]">
          <span aria-hidden="true">
            {firstName}
            {!firstNameComplete && <span className="animate-blink">|</span>}
          </span>
          <span className="sr-only">KAREEM</span>
        </h1>

        {/* Last name with typing effect */}
        <h2 
          className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 theme-section-title min-h-[1.2em]"
          style={{
            opacity: showLastName ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <span aria-hidden="true">
            {lastName}
            {showLastName && !lastNameComplete && <span className="animate-blink">|</span>}
          </span>
          <span className="sr-only">MOKHTAR</span>
        </h2>

        {/* Professional title with typing effect */}
        <p 
          className="text-lg md:text-2xl mb-3 md:mb-4 theme-text-primary min-h-[1.5em]"
          style={{
            opacity: showTitle ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <span aria-hidden="true">
            {title}
            {showTitle && !titleComplete && <span className="animate-blink">|</span>}
          </span>
          <span className="sr-only">Senior Software Engineer @ Meta</span>
        </p>

        {/* Brief description with typing effect */}
        <p 
          className="text-sm md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto theme-text-subtle min-h-[1.5em]"
          style={{
            opacity: showDescription ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          <span aria-hidden="true">
            {description}
            {showDescription && !descriptionComplete && <span className="animate-blink">|</span>}
          </span>
          <span className="sr-only">Building scalable systems. Solving complex problems. Crafting elegant code.</span>
        </p>

        {/* Call-to-action buttons - fade in after typing completes */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: showButtons ? 1 : 0,
            transform: showButtons ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
          }}
        >
          <button
            onClick={onExplore}
            className="inline-flex items-center gap-2 uppercase text-xs md:text-sm tracking-wider hover:glow border px-4 md:px-6 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 theme-text-primary theme-border theme-hover-bg"
            style={{ 
              borderColor: 'var(--border-muted)',
              transition: `
                color var(--transition-hover),
                background-color var(--transition-hover),
                border-color var(--transition-theme)
              `
            }}
            aria-label="Explore resume - scroll to about section"
          >
            Explore <ChevronDown className="w-4 md:w-5 h-4 md:h-5 animate-bounce" aria-hidden="true" />
          </button>
          
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCVDownload}
            className="inline-flex items-center gap-2 uppercase text-xs md:text-sm tracking-wider hover:glow border px-4 md:px-6 py-2 md:py-3 theme-text-primary theme-border theme-hover-bg"
            style={{ 
              borderColor: 'var(--border-muted)',
              transition: `
                color var(--transition-hover),
                background-color var(--transition-hover),
                border-color var(--transition-theme)
              `
            }}
            aria-label="Download Kareem Mokhtar's resume as PDF"
          >
            Download CV <Download className="w-4 md:w-5 h-4 md:h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
