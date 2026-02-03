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
 * - Analytics tracking for skill clicks
 */
import { SkillGroupProps } from '@/types';
import { ExternalLink } from 'lucide-react';
import { AnimatedItem } from './AnimatedItem';
import { trackSkillClick } from '@/utils/analytics';

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
  const handleSkillClick = (skillName: string) => {
    trackSkillClick(skillName, skillGroup.category);
  };

  return (
    <AnimatedItem
      id={`skill-${index}`}
      index={index}
      isVisible={isVisible}
    >
      {/* Category title */}
      <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 theme-section-title">
        {skillGroup.category}
      </h3>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {skillGroup.items.map((skill, i) => (
          skill.url ? (
            // Clickable skill with link to official website
            <a
              key={i}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 md:px-4 py-1 md:py-2 border text-xs md:text-sm transition-all cursor-pointer group theme-border theme-text-subtle hover:theme-text-primary"
              style={{
                borderColor: 'var(--border-muted)',
              }}
              onClick={() => handleSkillClick(skill.name)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'var(--secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-muted)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {skill.name}
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            // Non-clickable skill (generic concept without official website)
            <span
              key={i}
              className="px-3 md:px-4 py-1 md:py-2 border text-xs md:text-sm transition-all cursor-default theme-text-subtle"
              style={{
                borderColor: 'var(--border-muted)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.backgroundColor = 'var(--secondary)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-muted)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--muted-foreground)';
              }}
            >
              {skill.name}
            </span>
          )
        ))}
      </div>
    </AnimatedItem>
  );
};
