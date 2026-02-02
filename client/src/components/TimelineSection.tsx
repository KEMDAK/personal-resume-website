/**
 * TimelineSection Component
 * 
 * Displays a complete timeline section with:
 * - Section title with glow effect
 * - Vertical timeline line with gradient
 * - Multiple timeline items with animations
 * 
 * This component is reused for:
 * - Professional Experience
 * - Volunteer Experience
 * - Teaching Experience
 * - Education (with slight variations)
 */

import { TimelineItem as TimelineItemType, TimelineSectionProps } from '@/types';
import { TimelineItem } from './TimelineItem';

/**
 * TimelineSection Component
 * 
 * @param items - Array of timeline items to display
 * @param title - Section title (e.g., "PROFESSIONAL EXPERIENCE")
 * @param id - Unique section ID for scroll tracking
 * @param onRegisterRef - Callback to register the section's ref
 * @param isSectionVisible - Function to check if section is visible
 * 
 * @example
 * <TimelineSection
 *   items={professionalExperience}
 *   title="PROFESSIONAL EXPERIENCE"
 *   id="experience"
 *   onRegisterRef={(el) => sectionRefs.current['experience'] = el}
 *   isSectionVisible={(id) => visibleSections.has(id)}
 * />
 */
export const TimelineSection: React.FC<TimelineSectionProps> = ({
  items,
  title,
  id,
  onRegisterRef,
  isSectionVisible = () => false
}) => {
  return (
    <section
      id={id}
      ref={onRegisterRef}
      className="theme-section"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section title with glow effect */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 theme-section-title glow">
          &gt; {title}
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line with gradient - animated to grow with items */}
          <div 
            className="absolute left-1.5 md:left-2 -top-2 md:-top-2.5 bottom-0 w-0.5 md:w-1 theme-timeline-line origin-top"
            style={{
              animation: isSectionVisible(id) ? 'growVertical 1.2s ease-out forwards' : 'none'
            }}
          />
          
          {/* Timeline items container with staggered animations */}
          <div className="space-y-12 md:space-y-16 pl-8 md:pl-12">
            {items.map((item, idx) => (
              <TimelineItem
                key={idx}
                item={item}
                index={idx}
                isVisible={isSectionVisible(id)}
                sectionId={id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
