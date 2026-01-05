/**
 * TimelineItem Component
 * 
 * Displays a single entry in a timeline (experience, education, etc.)
 * Includes:
 * - Animated date badge with glow effect
 * - Glowing dot on the timeline
 * - Title, company/school, duration, location
 * - Animated description lines
 * 
 * Animation:
 * - Container fades in and slides up
 * - Description lines animate with staggered delays
 * - All animations reverse when scrolling up
 */

import { TimelineItem as TimelineItemType } from '@/types';
import { AnimatedLine } from './AnimatedLine';
import { calculateDuration } from '@/utils/dateUtils';

interface TimelineItemProps {
  /** The timeline item data */
  item: TimelineItemType;
  /** Index for staggered animation delay */
  index: number;
  /** Whether the parent section is visible */
  isVisible: boolean;
  /** Unique section ID for tracking */
  sectionId: string;
}

/**
 * TimelineItem Component
 * 
 * @example
 * <TimelineItem
 *   item={professionalExperience[0]}
 *   index={0}
 *   isVisible={true}
 *   sectionId="experience"
 * />
 */
export const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  isVisible,
  sectionId
}) => {
  // Calculate duration: use provided duration or calculate from dates
  const duration = item.isCurrent 
    ? calculateDuration(item.startDate, 'Present') 
    : (item.duration || calculateDuration(item.startDate, item.endDate));

  // Format date display: "Jun 2024 — Present" or "Jan 2023 — Jun 2024"
  const dateDisplay = item.isCurrent 
    ? `${item.startDate} — Present`
    : `${item.startDate} — ${item.endDate}`;

  return (
    <div
      id={`${sectionId}-${index}`}
      className="relative transition-all duration-1000 pt-2 md:pt-3"
      style={{
        // Container fade-in/out
        opacity: isVisible ? 1 : 0,
        // Container slide-up/down
        transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
        // Staggered delay for sequential animation (100ms per item)
        transitionDelay: `${index * 0.1}s`
      }}
    >
      {/* Date badge - positioned above the item with glow effect */}
      <div 
        className="absolute -top-5 md:-top-6 left-0 text-xs md:text-sm text-green-300 whitespace-nowrap font-mono"
        style={{ textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00' }}
      >
        {dateDisplay}
      </div>

      {/* Dot on timeline - positioned to overlap with the vertical line on the left */}
      <div 
        className="absolute w-3 md:w-4 h-3 md:h-4 rounded-full bg-green-400 border-2 border-black"
        style={{ 
          boxShadow: '0 0 15px #00ff00, 0 0 30px #00ff00, inset 0 0 10px #00ff00',
          left: '-31px',
          top: '-19px'
        }}
      />

      {/* Content section */}
      <div>
        {/* Job title / degree name */}
        <h3 className="text-lg md:text-2xl font-bold text-green-300 mb-1 md:mb-2 break-words">
          {item.title}
        </h3>

        {/* Company / school name - clickable if URL provided */}
        <p className="text-base md:text-lg text-green-400 mb-1 md:mb-2 break-words">
          {item.companyUrl ? (
            <a 
              href={item.companyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-green-300 hover:glow transition-colors"
            >
              {item.company}
            </a>
          ) : (
            item.company
          )}
        </p>

        {/* Duration (e.g., "1 yr 7 mos") */}
        {duration && (
          <p className="text-xs md:text-sm text-green-400/60 mb-2 md:mb-3">
            {duration}
          </p>
        )}

        {/* Location (if provided) */}
        {item.location && (
          <p className="text-xs md:text-sm text-green-400/60 mb-3 md:mb-4">
            {item.location}
          </p>
        )}

        {/* Description lines with individual animations */}
        <div className="space-y-2 md:space-y-3">
          {item.description.map((desc, i) => (
            <AnimatedLine
              key={i}
              text={desc}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
