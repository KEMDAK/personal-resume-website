/**
 * AnimatedItem Component
 * 
 * A reusable wrapper component that provides fade-in and slide-up animation
 * for its children. Used throughout the site for consistent scroll-triggered
 * animations.
 * 
 * Animation behavior:
 * - Fades in from opacity 0 to 1
 * - Slides up from translateY(20px) to translateY(0px)
 * - Staggered delay based on index for sequential animation
 * - Reverses when parent section becomes invisible
 */
import { ReactNode } from 'react';

interface AnimatedItemProps {
  /** Content to animate */
  children: ReactNode;
  /** Index for staggered animation delay (each index adds 50ms delay) */
  index: number;
  /** Whether the parent section is visible (triggers animation) */
  isVisible: boolean;
  /** Optional additional CSS classes */
  className?: string;
  /** Optional element ID */
  id?: string;
}

/**
 * AnimatedItem Component
 * 
 * @param children - Content to wrap with animation
 * @param index - Index for staggered animation delay
 * @param isVisible - Whether the parent section is visible
 * @param className - Optional additional CSS classes
 * @param id - Optional element ID
 * 
 * @example
 * <AnimatedItem index={0} isVisible={true}>
 *   <p>This content will animate in</p>
 * </AnimatedItem>
 */
export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  index,
  isVisible,
  className = '',
  id
}) => {
  // Calculate staggered delay: each item delays by 50ms
  const delay = index * 0.05;

  return (
    <div
      id={id}
      className={className}
      style={{
        // Fade in/out based on visibility
        opacity: isVisible ? 1 : 0,
        // Slide up into place when visible, slide down when hidden
        transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
        // Smooth transition with staggered delay for sequential animation
        transition: `all 0.6s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
