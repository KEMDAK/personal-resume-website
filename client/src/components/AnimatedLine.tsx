/**
 * AnimatedLine Component
 * 
 * Displays a single line of text with fade-in and slide-up animation.
 * Used for About section and timeline item descriptions.
 * 
 * This is a specialized wrapper around AnimatedItem for text content.
 */
import { AnimatedLineProps } from '@/types';
import { AnimatedItem } from './AnimatedItem';

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
  return (
    <AnimatedItem
      index={index}
      isVisible={isVisible}
      className="text-base leading-relaxed theme-text-foreground"
      style={{ opacity: 0.8 }}
    >
      {text}
    </AnimatedItem>
  );
};
