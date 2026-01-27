/**
 * Shared TypeScript Types and Interfaces
 * 
 * This file contains all the type definitions used throughout the application.
 * Centralizing types ensures consistency and makes it easier to maintain the codebase.
 */

/**
 * Represents a single timeline item (experience, education, etc.)
 */
export interface TimelineItem {
  /** Job title, degree name, or position title */
  title: string;
  /** Company name, school name, or organization */
  company: string;
  /** Optional URL to company/organization LinkedIn page */
  companyUrl?: string;
  /** Start date in format "Mon YYYY" (e.g., "Jun 2024") */
  startDate: string;
  /** End date in format "Mon YYYY" or "Present" */
  endDate: string;
  /** Optional duration string (auto-calculated if not provided) */
  duration?: string;
  /** Optional location (city, country) */
  location?: string;
  /** Array of bullet points describing responsibilities or achievements */
  description: string[];
  /** Type of experience (professional, volunteer, or teaching) */
  type?: 'professional' | 'volunteer' | 'teaching';
  /** Whether this is a current/ongoing position */
  isCurrent?: boolean;
}

/**
 * Represents an education entry
 */
export interface EducationItem {
  /** Degree type (e.g., "Master of Science", "Bachelor of Science") */
  degree: string;
  /** School/university name */
  school: string;
  /** Optional URL to school/university LinkedIn page */
  schoolUrl?: string;
  /** Field of study (e.g., "Computer Science") */
  field: string;
  /** Start date in format "Mon YYYY" */
  startDate: string;
  /** End date in format "Mon YYYY" or "Present" */
  endDate: string;
}

/**
 * Represents a single skill with optional URL
 */
export interface Skill {
  /** Skill name */
  name: string;
  /** Optional URL to official website */
  url?: string;
}

/**
 * Represents a group of related skills
 */
export interface SkillGroup {
  /** Category name (e.g., "Backend & Systems", "Frontend & Web") */
  category: string;
  /** Array of skills in this category */
  items: Skill[];
}

/**
 * Represents a language proficiency
 */
export interface Language {
  /** Language name */
  name: string;
  /** Proficiency level (e.g., "Native or bilingual proficiency") */
  level: string;
}

/**
 * Represents a certification or achievement
 */
export interface Certification {
  /** Certification name */
  name: string;
  /** Organization that issued the certification */
  issuer: string;
  /** Optional URL to the issuer's website */
  issuerUrl?: string;
  /** Date issued in format "Mon YYYY" */
  date: string;
}

/**
 * Props for animated line component
 */
export interface AnimatedLineProps {
  /** Text content to display */
  text: string;
  /** Index for staggered animation delay */
  index: number;
  /** Whether the parent section is visible (triggers animation) */
  isVisible: boolean;
}

/**
 * Props for timeline item component
 */
export interface TimelineItemProps {
  /** The timeline item data */
  item: TimelineItem;
  /** Index for staggered animation delay */
  index: number;
  /** Whether the parent section is visible (triggers animation) */
  isVisible: boolean;
  /** Section ID for tracking visibility */
  sectionId: string;
}

/**
 * Props for timeline section component
 */
export interface TimelineSectionProps {
  /** Array of timeline items to display */
  items: TimelineItem[];
  /** Section title to display */
  title: string;
  /** Unique section identifier for scroll tracking */
  id: string;
  /** Callback to register section ref for scroll detection */
  onRegisterRef?: (ref: HTMLElement | null) => void;
  /** Callback to check if section is visible */
  isSectionVisible?: (sectionId: string) => boolean;
}

/**
 * Props for skill group component
 */
export interface SkillGroupProps {
  /** The skill group data */
  skillGroup: SkillGroup;
  /** Index for staggered animation delay */
  index: number;
  /** Whether the parent section is visible (triggers animation) */
  isVisible: boolean;
}

/**
 * Props for language card component
 */
export interface LanguageCardProps {
  /** The language data */
  language: Language;
  /** Index for staggered animation delay */
  index: number;
  /** Whether the parent section is visible (triggers animation) */
  isVisible: boolean;
}

/**
 * Props for certification card component
 */
export interface CertificationCardProps {
  /** The certification data */
  certification: Certification;
  /** Index for staggered animation delay */
  index: number;
  /** Whether the parent section is visible (triggers animation) */
  isVisible: boolean;
}

/**
 * Props for contact button component
 */
export interface ContactButtonProps {
  /** Button label text */
  label: string;
  /** URL to navigate to (email, LinkedIn, GitHub, etc.) */
  href: string;
  /** Icon component to display */
  icon: React.ReactNode;
}
