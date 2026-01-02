/**
 * AnimatedLine Component
 * 
 * Displays a single line of text with fade-in and slide-up animation.
 * Used for About section and timeline item descriptions.
 * 
 * Animation behavior:
 * - Fades in from opacity 0 to 1
 * - Slides up from translateY(20px) to translateY(0px)
 * - Staggered delay based on index for sequential animation
 * - Reverses when parent section becomes invisible
 */

import { AnimatedLineProps } from '@/types';

/**
 * AnimatedLine Component
 * 
 * @param text - The text content to display
 * @param index - The line index (used for staggered animation delay)
 * @param isVisible - Whether the parent section is visible (triggers animation)
 * 
 * @example
 * <AnimatedLine
 *   text="This is an animated line"
 *   index={0}
 *   isVisible={true}
 * />
 */
export const AnimatedLine: React.FC<AnimatedLineProps> = ({ text, index, isVisible }) => {
  // Calculate staggered delay: each line delays by 50ms
  const delay = index * 0.05;
  
  return (
    <div
      style={{
        // Fade in/out based on visibility
        opacity: isVisible ? 1 : 0,
        // Slide up into place when visible, slide down when hidden
        transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
        // Smooth transition with staggered delay for sequential animation
        transition: `all 0.6s ease-out ${delay}s`,
      }}
      className="text-base text-green-400/80 leading-relaxed"
    >
      {text}
    </div>
  );
};
