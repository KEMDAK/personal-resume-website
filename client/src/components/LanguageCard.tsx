/**
 * LanguageCard Component
 * 
 * Displays a single language proficiency entry.
 * Features:
 * - Language name
 * - Proficiency level
 * - Border styling with hover effects
 * - Fade-in animation with staggered delay
 */

import { LanguageCardProps } from '@/types';

/**
 * LanguageCard Component
 * 
 * @param language - The language data (name and level)
 * @param index - Index for staggered animation delay
 * @param isVisible - Whether the parent section is visible
 * 
 * @example
 * <LanguageCard
 *   language={{ name: "English", level: "Native or bilingual proficiency" }}
 *   index={0}
 *   isVisible={true}
 * />
 */
export const LanguageCard: React.FC<LanguageCardProps> = ({
  language,
  index,
  isVisible
}) => {
  return (
    <div
      id={`lang-${index}`}
      className="border border-green-400/30 p-4 md:p-6 transition-all duration-1000"
      style={{
        // Fade in/out based on visibility
        opacity: isVisible ? 1 : 0,
        // Slide up/down
        transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
        // Staggered delay for sequential animation
        transitionDelay: `${index * 0.05}s`
      }}
    >
      {/* Language name */}
      <h3 className="text-base md:text-lg font-bold text-green-300 mb-2">
        {language.name}
      </h3>

      {/* Proficiency level */}
      <p className="text-sm md:text-base text-green-400/80">
        {language.level}
      </p>
    </div>
  );
};
