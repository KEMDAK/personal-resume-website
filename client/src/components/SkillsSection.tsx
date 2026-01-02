/**
 * SkillsSection Component
 * 
 * Displays all skills organized by category.
 * Features:
 * - Section title
 * - Multiple skill groups in a grid layout
 * - Animated skill group cards
 */

import { SkillGroup as SkillGroupType } from '@/types';
import { SkillGroup } from './SkillGroup';

interface SkillsSectionProps {
  /** Array of skill groups to display */
  skills: SkillGroupType[];
  /** Whether the section is visible (triggers animations) */
  isVisible: boolean;
  /** Callback to register section ref */
  onRegisterRef: (el: HTMLElement | null) => void;
}

/**
 * SkillsSection Component
 * 
 * @param skills - Array of skill groups
 * @param isVisible - Whether the section is currently visible
 * @param onRegisterRef - Callback to register the section's DOM element
 * 
 * @example
 * <SkillsSection
 *   skills={skillsData}
 *   isVisible={true}
 *   onRegisterRef={(el) => sectionRefs.current['skills'] = el}
 * />
 */
export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  isVisible,
  onRegisterRef
}) => {
  return (
    <section
      id="skills"
      ref={onRegisterRef}
      className="relative py-16 md:py-32 border-b border-green-400/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-green-300 glow">
          &gt; SKILLS
        </h2>

        {/* Skills grid - 2 columns on medium screens and up */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {skills.map((skillGroup, idx) => (
            <SkillGroup
              key={idx}
              skillGroup={skillGroup}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
