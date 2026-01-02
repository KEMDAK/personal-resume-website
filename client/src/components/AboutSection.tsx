/**
 * AboutSection Component
 * 
 * About section with:
 * - Section title
 * - Animated bio paragraphs (line-by-line)
 * - Social media links
 */

import { Mail, Linkedin, Github } from 'lucide-react';
import { AnimatedLine } from './AnimatedLine';

interface AboutSectionProps {
  /** Whether the section is visible (triggers animations) */
  isVisible: boolean;
  /** Callback to register section ref */
  onRegisterRef: (el: HTMLElement | null) => void;
}

/**
 * AboutSection Component
 * 
 * @param isVisible - Whether the section is currently visible
 * @param onRegisterRef - Callback to register the section's DOM element
 * 
 * @example
 * <AboutSection
 *   isVisible={true}
 *   onRegisterRef={(el) => sectionRefs.current['about'] = el}
 * />
 */
export const AboutSection: React.FC<AboutSectionProps> = ({
  isVisible,
  onRegisterRef
}) => {
  // Bio paragraphs to display
  const bioParagraphs = [
    "Experienced Software Engineer with a demonstrated history of working in the computer software industry. Currently Senior Software Engineer at Meta, building scalable systems and solving complex problems.",
    "Specialized in backend systems, full-stack development, and competitive programming. Previously led teams at Bleenco, conducted AI research at DFKI, and competed in ACM programming contests.",
    "Passionate about creating elegant solutions, mentoring engineers, and building products that impact millions of users."
  ];

  return (
    <section
      id="about"
      ref={onRegisterRef}
      className="relative py-16 md:py-32 border-b border-green-400/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-green-300 glow">
          &gt; ABOUT
        </h2>

        {/* Bio content */}
        <div className="space-y-4 md:space-y-6">
          {/* Animated bio paragraphs */}
          {bioParagraphs.map((paragraph, index) => (
            <AnimatedLine
              key={index}
              text={paragraph}
              index={index}
              isVisible={isVisible}
            />
          ))}

          {/* Social media links */}
          <div className="flex gap-4 pt-4 md:pt-6">
            <a
              href="mailto:kareem@example.com"
              className="text-green-400 hover:text-green-200 hover:glow transition-colors"
              title="Send email"
            >
              <Mail className="w-5 md:w-6 h-5 md:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/kareem-mokhtar"
              className="text-green-400 hover:text-green-200 hover:glow transition-colors"
              title="Visit LinkedIn profile"
            >
              <Linkedin className="w-5 md:w-6 h-5 md:h-6" />
            </a>
            <a
              href="https://github.com"
              className="text-green-400 hover:text-green-200 hover:glow transition-colors"
              title="Visit GitHub profile"
            >
              <Github className="w-5 md:w-6 h-5 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
