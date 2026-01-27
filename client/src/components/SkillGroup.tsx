/**
 * SkillGroup Component
 * 
 * Displays a group of related skills in a category.
 * Features:
 * - Category title
 * - Skill tags with hover effects
 * - Clickable links to official websites
 * - External link icons for linked skills
 * - Fade-in animation with staggered delay
 */

import { SkillGroupProps } from '@/types';
import { ExternalLink } from 'lucide-react';

/**
 * SkillGroup Component
 * 
 * @param skillGroup - The skill group data (category and items)
 * @param index - Index for staggered animation delay
 * @param isVisible - Whether the parent section is visible
 * 
 * @example
 * <SkillGroup
 *   skillGroup={{ category: "Backend & Systems", items: [{ name: "Node.js", url: "https://nodejs.org/" }] }}
 *   index={0}
 *   isVisible={true}
 * />
 */
export const SkillGroup: React.FC<SkillGroupProps> = ({
  skillGroup,
  index,
  isVisible
}) => {
  return (
    <div
      id={`skill-${index}`}
      className="transition-all duration-1000"
      style={{
        // Fade in/out based on visibility
        opacity: isVisible ? 1 : 0,
        // Slide up/down
        transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
        // Staggered delay for sequential animation
        transitionDelay: `${index * 0.05}s`
      }}
    >
      {/* Category title */}
      <h3 className="text-lg md:text-xl font-bold text-green-300 mb-4 md:mb-6">
        {skillGroup.category}
      </h3>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {skillGroup.items.map((skill, i) => (
          skill.url ? (
            // Clickable skill with link
            <a
              key={i}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 md:px-4 py-1 md:py-2 border border-green-400/50 text-xs md:text-sm text-green-400/80 hover:border-green-400 hover:text-green-400 hover:bg-green-400/10 transition-all cursor-pointer group"
            >
              {skill.name}
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            // Non-clickable skill (no URL)
            <span
              key={i}
              className="px-3 md:px-4 py-1 md:py-2 border border-green-400/50 text-xs md:text-sm text-green-400/80 hover:border-green-400 hover:text-green-400 hover:bg-green-400/10 transition-all cursor-default"
            >
              {skill.name}
            </span>
          )
        ))}
      </div>
    </div>
  );
};
