/**
 * TypingText Component
 * 
 * A component that displays text with a typewriter effect.
 * Characters appear one by one with an optional blinking cursor.
 * 
 * Features:
 * - Configurable typing speed
 * - Blinking cursor
 * - Support for multiple text strings (cycles through them)
 * - Accessible with aria-live for screen readers
 */

import React from 'react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

interface TypingTextProps {
  /** Text or array of texts to type */
  texts: string | string[];
  /** Speed of typing in milliseconds per character */
  typingSpeed?: number;
  /** Delay before starting to type (ms) */
  startDelay?: number;
  /** Whether to show a blinking cursor */
  showCursor?: boolean;
  /** Whether to loop through texts */
  loop?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Cursor character */
  cursorChar?: string;
  /** Tag to render (h1, h2, p, span, etc.) */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * TypingText Component
 * 
 * @example
 * <TypingText
 *   texts="Hello World"
 *   typingSpeed={100}
 *   showCursor={true}
 * />
 * 
 * @example
 * <TypingText
 *   texts={['Developer', 'Engineer', 'Creator']}
 *   loop={true}
 *   typingSpeed={80}
 * />
 */
export const TypingText: React.FC<TypingTextProps> = ({
  texts,
  typingSpeed = 80,
  startDelay = 500,
  showCursor = true,
  loop = false,
  className = '',
  cursorChar = '|',
  as: Tag = 'span'
}) => {
  const { displayedText, isTyping, isComplete } = useTypingEffect(texts, {
    typingSpeed,
    startDelay,
    loop
  });

  // Full text for accessibility (screen readers get the complete text)
  const fullText = Array.isArray(texts) ? texts[0] : texts;

  return (
    <Tag className={className}>
      {/* Visible text with typing effect */}
      <span aria-hidden="true">
        {displayedText}
        {showCursor && (
          <span 
            className={`inline-block ml-0.5 ${isTyping || !isComplete ? 'animate-blink' : ''}`}
            style={{ 
              opacity: isComplete && !loop ? 0 : 1,
              transition: 'opacity 0.3s ease'
            }}
          >
            {cursorChar}
          </span>
        )}
      </span>
      
      {/* Screen reader accessible text */}
      <span className="sr-only" aria-live="polite">
        {fullText}
      </span>
    </Tag>
  );
};

export default TypingText;
