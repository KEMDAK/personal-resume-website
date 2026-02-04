/**
 * useParallax Hook
 * 
 * A custom React hook that creates parallax scrolling effects.
 * Elements move at different speeds relative to scroll position.
 * 
 * Features:
 * - Configurable parallax speed (positive = slower, negative = faster)
 * - Smooth performance using requestAnimationFrame
 * - Respects reduced motion preferences
 * - Optional horizontal parallax
 */

import { useState, useEffect, useCallback, useRef } from 'react';

interface ParallaxStyle {
  transform: string;
  willChange: string;
}

interface UseParallaxOptions {
  /** Speed multiplier (0.1 = 10% of scroll, -0.1 = opposite direction) */
  speed?: number;
  /** Whether to apply horizontal parallax instead of vertical */
  horizontal?: boolean;
  /** Maximum offset in pixels (prevents elements from moving too far) */
  maxOffset?: number;
  /** Whether to disable the effect */
  disabled?: boolean;
}

/**
 * Custom hook for parallax scrolling effect
 * 
 * @param options - Configuration options
 * @returns Object with style to apply to element and current offset
 * 
 * @example
 * const { style } = useParallax({ speed: 0.3 });
 * return <div style={style}>Parallax element</div>;
 */
export const useParallax = (options: UseParallaxOptions = {}) => {
  const {
    speed = 0.1,
    horizontal = false,
    maxOffset = 200,
    disabled = false
  } = options;

  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotion = useRef(false);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (disabled || prefersReducedMotion.current) {
      setOffset(0);
      return;
    }

    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Use requestAnimationFrame for smooth performance
    rafRef.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      let newOffset = scrollY * speed;

      // Clamp to max offset
      if (maxOffset) {
        newOffset = Math.max(-maxOffset, Math.min(maxOffset, newOffset));
      }

      setOffset(newOffset);
    });
  }, [speed, maxOffset, disabled]);

  useEffect(() => {
    if (disabled || prefersReducedMotion.current) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, disabled]);

  // Generate transform style
  const style: ParallaxStyle = {
    transform: horizontal 
      ? `translateX(${offset}px)` 
      : `translateY(${offset}px)`,
    willChange: 'transform'
  };

  return {
    style,
    offset
  };
};

/**
 * Hook for multiple parallax layers with different speeds
 * 
 * @param speeds - Array of speed values for each layer
 * @returns Array of styles for each layer
 * 
 * @example
 * const layerStyles = useParallaxLayers([0.1, 0.2, 0.3]);
 */
export const useParallaxLayers = (speeds: number[]) => {
  const [offsets, setOffsets] = useState<number[]>(speeds.map(() => 0));
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }, []);

  const handleScroll = useCallback(() => {
    if (prefersReducedMotion.current) {
      setOffsets(speeds.map(() => 0));
      return;
    }

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const newOffsets = speeds.map(speed => scrollY * speed);
      setOffsets(newOffsets);
    });
  }, [speeds]);

  useEffect(() => {
    if (prefersReducedMotion.current) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return offsets.map((offset, index) => ({
    transform: `translateY(${offset}px)`,
    willChange: 'transform'
  }));
};

export default useParallax;
