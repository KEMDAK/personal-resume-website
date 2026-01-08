/**
 * ProjectCard Component
 * 
 * Displays a single project with:
 * - Project name and description
 * - Technology tags
 * - Clickable GitHub and demo links
 * - Fade-in animation with staggered delay
 */

import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

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
    <div
      className="border border-green-400/30 rounded-lg p-4 md:p-6 bg-black/50 backdrop-blur-sm transition-all duration-1000 hover:border-green-400 hover:bg-black/70"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
        transitionDelay: `${index * 0.05}s`
      }}
    >
      {/* Project name */}
      <h3 className="text-lg md:text-xl font-bold text-green-300 mb-2 break-words">
        {project.name}
      </h3>

      {/* Project description */}
      <p className="text-sm md:text-base text-green-400/80 mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Technology tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="inline-block px-2 py-1 text-xs md:text-sm bg-green-400/10 border border-green-400/30 text-green-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm border border-green-400/50 text-green-300 rounded hover:bg-green-400/10 hover:border-green-400 transition-colors"
          >
            <ExternalLink size={16} />
            View
          </a>
        )}
      </div>
    </div>
  );
};
