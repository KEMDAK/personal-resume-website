/**
 * useParallax Hook
 * 
 * Creates a parallax scrolling effect by translating elements based on scroll position.
 * Different speeds create a depth effect where elements appear to move at different rates.
 * 
 * Features:
 * - Configurable speed (negative = opposite direction)
 * - Maximum offset limit to prevent elements from moving too far
 * - Uses requestAnimationFrame for smooth performance
 * - Respects prefers-reduced-motion for accessibility
 * 
 * @example
 * const { style } = useParallax({ speed: 0.2, maxOffset: 100 });
 * <div style={style}>Parallax element</div>
 */

import { useState, useEffect, useRef, CSSProperties } from 'react';

interface UseParallaxOptions {
  /** Speed multiplier for parallax effect (0.1 = slow, 0.5 = fast, negative = reverse) */
  speed?: number;
  /** Maximum offset in pixels to prevent elements from moving too far */
  maxOffset?: number;
  /** Direction of parallax movement */
  direction?: 'vertical' | 'horizontal' | 'both';
}

interface UseParallaxReturn {
  /** CSS styles to apply to the parallax element */
  style: CSSProperties;
  /** Current offset value */
  offset: number;
}

/**
 * useParallax Hook
 * 
 * @param options - Configuration options for the parallax effect
 * @returns Object containing style properties and current offset
 */
export const useParallax = ({
  speed = 0.2,
  maxOffset = 100,
  direction = 'vertical'
}: UseParallaxOptions = {}): UseParallaxReturn => {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Skip parallax if user prefers reduced motion
    if (prefersReducedMotion.current) {
      return;
    }

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        let newOffset = scrollY * speed;

        // Clamp offset to maxOffset
        if (maxOffset > 0) {
          newOffset = Math.max(-maxOffset, Math.min(maxOffset, newOffset));
        }

        setOffset(newOffset);
      });
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, maxOffset]);

  // Generate transform style based on direction
  const getTransform = (): string => {
    if (prefersReducedMotion.current) {
      return 'none';
    }

    switch (direction) {
      case 'horizontal':
        return `translateX(${offset}px)`;
      case 'both':
        return `translate(${offset}px, ${offset}px)`;
      case 'vertical':
      default:
        return `translateY(${offset}px)`;
    }
  };

  const style: CSSProperties = {
    transform: getTransform(),
    willChange: 'transform',
    transition: 'transform 0.1s ease-out'
  };

  return { style, offset };
};

export default useParallax;
