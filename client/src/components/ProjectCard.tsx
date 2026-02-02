/**
 * ProjectCard Component
 * 
 * Displays a single project with:
 * - Project name and description
 * - Technology tags
 * - Clickable GitHub and demo links
 * - Fade-in animation with staggered delay
 */
import { ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';
import { AnimatedItem } from './AnimatedItem';

interface ProjectCardProps {
  /** The project data */
  project: Project;
  /** Index for staggered animation delay */
  index: number;
  /** Whether the parent section is visible */
  isVisible: boolean;
}

/**
 * ProjectCard Component
 * 
 * @param project - The project data (name, description, technologies, links)
 * @param index - Index for staggered animation delay
 * @param isVisible - Whether the parent section is visible
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isVisible
}) => {
  return (
    <AnimatedItem
      index={index}
      isVisible={isVisible}
      className="border rounded-lg p-4 md:p-6 backdrop-blur-sm transition-colors"
      style={{
        borderColor: 'var(--border-muted)',
        backgroundColor: 'color-mix(in srgb, var(--background) 50%, transparent)',
      }}
    >
      {/* Project name */}
      <h3 className="text-lg md:text-xl font-bold mb-2 break-words theme-section-title">
        {project.name}
      </h3>

      {/* Project description */}
      <p className="text-sm md:text-base mb-4 theme-text-foreground" style={{ opacity: 0.8 }}>
        {project.description}
      </p>

      {/* Technology tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="inline-block px-2 py-1 text-xs md:text-sm border rounded theme-section-title"
            style={{
              backgroundColor: 'var(--secondary)',
              borderColor: 'var(--border-muted)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.projectUrl && (
        <div className="flex gap-3">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm border rounded transition-colors theme-section-title theme-hover-bg"
            style={{
              borderColor: 'var(--border-muted)',
            }}
          >
            <ExternalLink size={16} />
            View
          </a>
        </div>
      )}
    </AnimatedItem>
  );
};
