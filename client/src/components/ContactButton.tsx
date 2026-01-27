/**
 * ContactButton Component
 * 
 * Displays a contact action button with icon and label.
 * Used for Email, LinkedIn, and GitHub links.
 * Features:
 * - Icon and label display
 * - Hover effects with glow
 * - Border styling
 * - Responsive sizing
 * - Analytics tracking
 * - Accessibility support
 */

import { ContactButtonProps } from '@/types';
import { trackContactClick } from '@/utils/analytics';

/**
 * ContactButton Component
 * 
 * @param label - Button label text (e.g., "Email Me", "LinkedIn")
 * @param href - URL to navigate to (email, LinkedIn profile, GitHub, etc.)
 * @param icon - Icon component to display (from lucide-react)
 * 
 * @example
 * <ContactButton
 *   label="Email Me"
 *   href="mailto:kareem@example.com"
 *   icon={<Mail className="w-4 md:w-5 h-4 md:h-5" />}
 * />
 */
export const ContactButton: React.FC<ContactButtonProps> = ({
  label,
  href,
  icon
}) => {
  // Determine the contact method from the label for tracking
  const getContactMethod = (label: string): string => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('email')) return 'email';
    if (lowerLabel.includes('linkedin')) return 'linkedin';
    if (lowerLabel.includes('github')) return 'github';
    return lowerLabel;
  };

  const handleClick = () => {
    trackContactClick(getContactMethod(label));
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-green-400 text-xs md:text-sm text-green-400 hover:bg-green-400/10 hover:text-green-200 transition-all hover:glow focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
      aria-label={`Contact via ${label}`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </a>
  );
};
