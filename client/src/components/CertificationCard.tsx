/**
 * CertificationCard Component
 * 
 * Displays a single certification or achievement.
 * Features:
 * - Certification name
 * - Issuing organization (with optional link)
 * - Issue date
 * - Left border accent
 * - Fade-in animation with staggered delay
 */
import { ExternalLink } from 'lucide-react';
import { CertificationCardProps } from '@/types';
import { AnimatedItem } from './AnimatedItem';

/**
 * CertificationCard Component
 * 
 * @param certification - The certification data (name, issuer, date)
 * @param index - Index for staggered animation delay
 * @param isVisible - Whether the parent section is visible
 * 
 * @example
 * <CertificationCard
 *   certification={{
 *     name: "Google Developer Challenge Scholarship",
 *     issuer: "Udacity",
 *     date: "Nov 2017"
 *   }}
 *   index={0}
 *   isVisible={true}
 * />
 */
export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  index,
  isVisible
}) => {
  return (
    <AnimatedItem
      id={`cert-${index}`}
      index={index}
      isVisible={isVisible}
      className="border-l-4 border-green-400 pl-4 md:pl-6 py-3 md:py-4"
    >
      {/* Certification name */}
      <h3 className="text-base md:text-lg font-bold text-green-300 mb-1">
        {certification.name}
      </h3>

      {/* Issuing organization */}
      <p className="text-sm md:text-base text-green-400/80">
        {certification.issuerUrl ? (
          <a
            href={certification.issuerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-green-300 hover:glow transition-colors"
          >
            {certification.issuer}
            <ExternalLink size={14} className="flex-shrink-0" />
          </a>
        ) : (
          certification.issuer
        )}
      </p>

      {/* Issue date */}
      <p className="text-xs md:text-sm text-green-400/60">
        Issued {certification.date}
      </p>
    </AnimatedItem>
  );
};
