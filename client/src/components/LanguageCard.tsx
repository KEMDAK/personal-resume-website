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
import { AnimatedItem } from './AnimatedItem';

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
    <AnimatedItem
      id={`lang-${index}`}
      index={index}
      isVisible={isVisible}
      className="border border-green-400/30 p-4 md:p-6"
    >
      {/* Language name */}
      <h3 className="text-base md:text-lg font-bold text-green-300 mb-2">
        {language.name}
      </h3>

      {/* Proficiency level */}
      <p className="text-sm md:text-base text-green-400/80">
        {language.level}
      </p>
    </AnimatedItem>
  );
};
