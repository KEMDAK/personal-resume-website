/**
 * LanguagesSection Component
 * 
 * Displays language proficiencies.
 * Features:
 * - Section title
 * - Language cards in a 3-column grid
 * - Animated language cards
 */

import { Language } from '@/types';
import { LanguageCard } from './LanguageCard';

interface LanguagesSectionProps {
  /** Array of languages to display */
  languages: Language[];
  /** Whether the section is visible (triggers animations) */
  isVisible: boolean;
}

/**
 * LanguagesSection Component
 * 
 * @param languages - Array of language data
 * @param isVisible - Whether the section is currently visible
 * 
 * @example
 * <LanguagesSection
 *   languages={languagesData}
 *   isVisible={true}
 * />
 */
export const LanguagesSection: React.FC<LanguagesSectionProps> = ({
  languages,
  isVisible
}) => {
  return (
    <section className="theme-section">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 theme-section-title glow">
          &gt; LANGUAGES
        </h2>

        {/* Languages grid - 3 columns on medium screens and up */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {languages.map((lang, idx) => (
            <LanguageCard
              key={idx}
              language={lang}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
