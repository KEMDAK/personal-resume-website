/**
 * ProjectsSection Component
 * 
 * Displays all personal projects in a responsive grid layout.
 * Features:
 * - Grid layout (1 column on mobile, 2-3 columns on larger screens)
 * - Fade-in animations with staggered delays
 * - Clickable project cards with GitHub and demo links
 * - Technology tags for each project
 */

import { ProjectCard } from './ProjectCard';
import { Project } from '@/data/projects';

interface ProjectsSectionProps {
  /** Array of projects to display */
  projects: Project[];
  /** Whether the section is visible (triggers animations) */
  isVisible: boolean;
}

/**
 * ProjectsSection Component
 * 
 * @param projects - Array of project data
 * @param isVisible - Whether the section is visible
 */
export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  isVisible
}) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        {/* Section title */}
        <div
          className="mb-12 md:mb-16 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
            transitionDelay: '0s'
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 glow theme-section-title">
            PROJECTS
          </h2>
          <div className="w-16 h-1" style={{ backgroundColor: 'var(--primary)' }}></div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
