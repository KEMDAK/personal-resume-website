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
      className="border p-4 md:p-6"
      style={{
        borderColor: 'var(--border-muted)',
      }}
    >
      {/* Language name */}
      <h3 className="text-base md:text-lg font-bold mb-2 theme-section-title">
        {language.name}
      </h3>

      {/* Proficiency level */}
      <p className="text-sm md:text-base theme-text-foreground" style={{ opacity: 0.8 }}>
        {language.level}
      </p>
    </AnimatedItem>
  );
};
