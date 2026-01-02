/**
 * CertificationsSection Component
 * 
 * Displays certifications and achievements.
 * Features:
 * - Section title
 * - Certification cards in a vertical list
 * - Animated certification cards
 */

import { Certification } from '@/types';
import { CertificationCard } from './CertificationCard';

interface CertificationsSectionProps {
  /** Array of certifications to display */
  certifications: Certification[];
  /** Whether the section is visible (triggers animations) */
  isVisible: boolean;
}

/**
 * CertificationsSection Component
 * 
 * @param certifications - Array of certification data
 * @param isVisible - Whether the section is currently visible
 * 
 * @example
 * <CertificationsSection
 *   certifications={certificationsData}
 *   isVisible={true}
 * />
 */
export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
  isVisible
}) => {
  return (
    <section className="relative py-16 md:py-32 border-b border-green-400/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-green-300 glow">
          &gt; CERTIFICATIONS
        </h2>

        {/* Certifications list */}
        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <CertificationCard
              key={idx}
              certification={cert}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
