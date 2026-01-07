/**
 * Personal Projects Data
 * 
 * Contains all personal projects with descriptions, technologies, and links
 * All projects are from LinkedIn profile with real descriptions and links
 */

export interface Project {
  /** Project name/title */
  name: string;
  /** Project description */
  description: string;
  /** Array of technologies used */
  technologies: string[];
  /** Optional GitHub repository URL */
  githubUrl?: string;
  /** Optional live demo URL */
  demoUrl?: string;
}

/**
 * Personal Projects
 * Sorted by relevance/recency
 */
export const projects: Project[] = [
  {
    name: 'Mini Monopoly',
    description: 'An embedded system implementation using Arduino to automate the well-known monopoly game. Creates a physical monopoly game that has the same functionality and features of the digital version.',
    technologies: ['Arduino', 'C', 'Embedded Systems', 'Hardware'],
    githubUrl: 'https://github.com/kareem-mokhtar'
  },
  {
    name: 'أُهرُب يا وِلد (Ohrob ya weld) - Horror Game',
    description: 'A horror game implemented using OpenGL. The story involves a character trapped in a haunted house who must figure out a 4-digit pass code to escape the exit door by solving puzzles and collecting clues scattered throughout the house before time runs out.',
    technologies: ['OpenGL', 'C++', 'Game Development', 'Graphics Programming'],
    githubUrl: 'https://github.com/kareem-mokhtar'
  },
  {
    name: 'Tensor Factorization Music Recommender',
    description: 'Proof of concept for a music recommendation system using tensor factorization techniques. Developed at DFKI for analyzing and predicting user music preferences.',
    technologies: ['Python', 'Machine Learning', 'Tensor Factorization', 'Data Analysis'],
    githubUrl: 'https://github.com/kareem-mokhtar'
  },
  {
    name: 'OCR Correction System for Historical Documents',
    description: 'Designed and implemented an OCR correction system for historical documents using deep learning. Improved accuracy of optical character recognition for digitized archives.',
    technologies: ['Python', 'Deep Learning', 'OCR', 'Computer Vision'],
    githubUrl: 'https://github.com/kareem-mokhtar'
  },
  {
    name: 'AI Studio Platform (Bleenco)',
    description: 'Led development of an AI-powered platform for automating analog processes and upgrading legacy systems. Built sensor-based solutions with AI capabilities for enterprise clients.',
    technologies: ['Node.js', 'React', 'Python', 'Machine Learning', 'Kubernetes'],
    demoUrl: 'https://bleenco.com'
  },
  {
    name: 'Restaurant Discovery & Ordering Platform (elmenus)',
    description: 'Developed backend services for a food discovery and ordering platform. Analyzed user data to improve platform experience and recommendation algorithms.',
    technologies: ['Node.js', 'MongoDB', 'Express.js', 'Data Analytics'],
    demoUrl: 'https://www.elmenus.com'
  },
  {
    name: 'Android Mobile Applications',
    description: 'Developed multiple Android applications and web applications using modern frameworks and best practices for user experience and performance.',
    technologies: ['Android', 'Java', 'Ionic', 'WordPress', 'ExpressJS'],
    githubUrl: 'https://github.com/kareem-mokhtar'
  },
  {
    name: 'Billing Management Experience (HubSpot)',
    description: 'Contributed to HubSpot\'s billing management system as an intern, working on features that help businesses manage their subscriptions and payments.',
    technologies: ['JavaScript', 'React', 'Node.js', 'CRM Systems'],
    demoUrl: 'https://www.hubspot.com'
  },
  {
    name: 'Meta Integrity Experience Platform',
    description: 'Part of the Integrity Experience team at Meta, responsible for empowering users to make informed decisions on Meta platforms through transparent tools and information.',
    technologies: ['JavaScript', 'React', 'Python', 'Large-Scale Systems'],
    demoUrl: 'https://www.meta.com'
  },
  {
    name: 'Competitive Programming Solutions',
    description: 'Solved 1000+ algorithmic challenges on various online judges. Finalist in ACM Egyptian Collegiate Programming Contest 2016 and ranked 35th in ACM Arab Contest.',
    technologies: ['C++', 'Java', 'Algorithms', 'Data Structures'],
    githubUrl: 'https://github.com/kareem-mokhtar'
  },
  {
    name: 'IEEE Student Branch Software Projects',
    description: 'Led a team of 14 software developers at IEEE German University in Cairo Student Branch. Managed three sub-teams: Web back-end, Web front-end, and Android development.',
    technologies: ['Node.js', 'React', 'Android', 'Team Leadership'],
    githubUrl: 'https://www.ieeeguc.tech'
  },
  {
    name: 'Master Thesis: Automation Systems at ABB',
    description: 'Developed automation systems and control software for industrial applications. Focused on scalability, reliability, and performance for enterprise-level systems.',
    technologies: ['Java', 'C++', 'Systems Design', 'Industrial Automation'],
    githubUrl: 'https://github.com/kareem-mokhtar'
  },
  {
    name: 'Qt Desktop Applications',
    description: 'Developed cross-platform desktop applications using Qt framework. Created user-friendly interfaces for various tools and utilities.',
    technologies: ['Qt', 'C++', 'Desktop Applications'],
    githubUrl: 'https://github.com/kareem-mokhtar'
  }
];
