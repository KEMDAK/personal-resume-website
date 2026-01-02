/**
 * Scroll Utility Functions and Hooks
 * 
 * This module provides utilities for detecting when sections come into view
 * and managing scroll-triggered animations.
 */

import { useState, useEffect, useRef, SetStateAction, Dispatch } from 'react';

/**
 * Hook for managing section visibility based on scroll position
 * 
 * This hook:
 * - Tracks which sections are currently visible in the viewport
 * - Triggers animations when sections come into view (60% threshold)
 * - Reverses animations when scrolling back up past 70% threshold
 * - Maintains a ref map for all sections
 * 
 * @returns Object containing:
 *   - visibleSections: Set of currently visible section IDs
 *   - sectionRefs: Map of section IDs to their DOM elements
 *   - registerSectionRef: Function to register a section's ref
 *   - isSectionVisible: Function to check if a section is visible
 *   - scrollToSection: Function to smoothly scroll to a section
 * 
 * @example
 * const { visibleSections, sectionRefs, isSectionVisible, scrollToSection } = useScrollVisibility();
 * 
 * // In JSX:
 * <section ref={(el) => { if (el) sectionRefs.current['about'] = el; }}>
 *   {isSectionVisible('about') && <AnimatedContent />}
 * </section>
 */
export const useScrollVisibility = () => {
  // Track which sections are currently visible
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  // Map of section IDs to their DOM elements
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Set up scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const newVisible = new Set<string>();
      
      // Check each registered section
      Object.entries(sectionRefs.current).forEach(([id, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Trigger animation when section is 60% into viewport (scrolling down)
          if (rect.top < window.innerHeight * 0.6) {
            newVisible.add(id);
          } else {
            // Remove from visible set when scrolling back up past 70% threshold
            if (rect.top > window.innerHeight * 0.7) {
              newVisible.delete(id);
            }
          }
        }
      });
      
      setVisibleSections(newVisible);
    };

    // Add scroll listener and trigger initial check
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // Clean up listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Check if a specific section is currently visible
   * @param sectionId - The ID of the section to check
   * @returns True if the section is visible, false otherwise
   */
  const isSectionVisible = (sectionId: string): boolean => {
    return visibleSections.has(sectionId);
  };

  /**
   * Register a section's DOM element for scroll tracking
   * @param sectionId - The ID of the section
   * @param element - The DOM element of the section
   */
  const registerSectionRef = (sectionId: string, element: HTMLElement | null) => {
    if (element) {
      sectionRefs.current[sectionId] = element;
    }
  };

  /**
   * Smoothly scroll to a section
   * @param sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    visibleSections,
    sectionRefs,
    registerSectionRef,
    isSectionVisible,
    scrollToSection
  };
};
