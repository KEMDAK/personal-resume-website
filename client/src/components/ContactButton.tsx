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
 */

import { ContactButtonProps } from '@/types';

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
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-green-400 text-xs md:text-sm text-green-400 hover:bg-green-400/10 hover:text-green-200 transition-all hover:glow"
    >
      {icon}
      {label}
    </a>
  );
};
