/**
 * useTypingEffect Hook
 * 
 * A custom React hook that creates a typewriter effect for text.
 * Characters are revealed one by one with a configurable speed.
 * 
 * Features:
 * - Configurable typing speed
 * - Optional cursor blinking
 * - Callback when typing is complete
 * - Support for multiple text strings (cycles through them)
 */

import { useState, useEffect, useCallback } from 'react';

interface UseTypingEffectOptions {
  /** Speed of typing in milliseconds per character */
  typingSpeed?: number;
  /** Delay before starting to type (ms) */
  startDelay?: number;
  /** Whether to show a blinking cursor */
  showCursor?: boolean;
  /** Callback when typing is complete */
  onComplete?: () => void;
  /** Whether to loop through multiple texts */
  loop?: boolean;
  /** Delay between loops (ms) */
  loopDelay?: number;
  /** Speed of deleting characters when looping (ms) */
  deleteSpeed?: number;
}

interface UseTypingEffectReturn {
  /** The currently displayed text */
  displayedText: string;
  /** Whether typing is currently in progress */
  isTyping: boolean;
  /** Whether the typing is complete */
  isComplete: boolean;
  /** Reset and restart the typing effect */
  restart: () => void;
}

/**
 * Custom hook for typewriter text effect
 * 
 * @param texts - Array of strings to type (or single string)
 * @param options - Configuration options
 * @returns Object with displayedText, isTyping, isComplete, and restart function
 * 
 * @example
 * const { displayedText, isTyping } = useTypingEffect(
 *   ['Hello World', 'Welcome'],
 *   { typingSpeed: 100, loop: true }
 * );
 */
export const useTypingEffect = (
  texts: string | string[],
  options: UseTypingEffectOptions = {}
): UseTypingEffectReturn => {
  const {
    typingSpeed = 80,
    startDelay = 500,
    showCursor = true,
    onComplete,
    loop = false,
    loopDelay = 2000,
    deleteSpeed = 50
  } = options;

  // Normalize texts to array
  const textArray = Array.isArray(texts) ? texts : [texts];

  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const currentText = textArray[currentTextIndex];

  // Restart function
  const restart = useCallback(() => {
    setDisplayedText('');
    setCurrentTextIndex(0);
    setCurrentCharIndex(0);
    setIsTyping(false);
    setIsDeleting(false);
    setIsComplete(false);
    setHasStarted(false);
  }, []);

  // Start delay effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  // Typing effect
  useEffect(() => {
    if (!hasStarted) return;

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting characters
      if (currentCharIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentText.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        }, deleteSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex(prev => (prev + 1) % textArray.length);
      }
    } else {
      // Typing characters
      if (currentCharIndex < currentText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
          setIsTyping(true);
        }, typingSpeed);
      } else {
        // Finished typing current text
        setIsTyping(false);

        if (loop && textArray.length > 1) {
          // Wait then start deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, loopDelay);
        } else if (loop && textArray.length === 1) {
          // Single text loop - delete and retype
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, loopDelay);
        } else {
          // Not looping, mark as complete
          setIsComplete(true);
          onComplete?.();
        }
      }
    }

    return () => clearTimeout(timer);
  }, [
    hasStarted,
    currentCharIndex,
    currentText,
    currentTextIndex,
    isDeleting,
    loop,
    loopDelay,
    deleteSpeed,
    typingSpeed,
    textArray.length,
    onComplete
  ]);

  // Reset char index when text changes
  useEffect(() => {
    if (!isDeleting) {
      setCurrentCharIndex(0);
      setDisplayedText('');
    }
  }, [currentTextIndex, isDeleting]);

  return {
    displayedText,
    isTyping,
    isComplete,
    restart
  };
};

export default useTypingEffect;
