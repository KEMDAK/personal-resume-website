/**
 * Resume Data
 * 
 * Centralized file containing all resume content:
 * - Professional experience
 * - Volunteer experience
 * - Teaching experience
 * - Education
 * - Skills
 * - Languages
 * - Certifications
 * 
 * This separation allows easy updates to content without touching component logic.
 */

import {
  TimelineItem,
  EducationItem,
  SkillGroup,
  Language,
  Certification
} from '@/types';

/**
 * Professional Experience
 * Sorted in descending order (most recent first)
 */
export const professionalExperience: TimelineItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Meta',
    companyUrl: 'https://www.linkedin.com/company/meta/',
    startDate: 'Jun 2024',
    endDate: 'Present',
    location: 'Greater London, England, United Kingdom',
    description: [
      'Leading technical initiatives and architecting scalable systems',
      'Mentoring junior engineers and driving code quality improvements',
      'Contributing to high-impact projects across Meta platforms'
    ],
    type: 'professional',
    isCurrent: true
  },
  {
    title: 'Software Engineer',
    company: 'Meta',
    companyUrl: 'https://www.linkedin.com/company/meta/',
    startDate: 'Jan 2023',
    endDate: 'Jun 2024',
    location: 'Greater London, England, United Kingdom',
    description: [
      'Developing scalable systems and features for Meta platforms',
      'Collaborating with cross-functional teams on high-impact projects',
      'Contributing to codebase optimization and performance improvements'
    ],
    type: 'professional'
  },
  {
    title: 'Junior Software Engineer',
    company: 'Meta',
    companyUrl: 'https://www.linkedin.com/company/meta/',
    startDate: 'Jun 2022',
    endDate: 'Jan 2023',
    location: 'Greater London, England, United Kingdom',
    description: [
      'Building and maintaining backend services',
      'Participating in code reviews and design discussions',
      'Implementing features for Meta products'
    ],
    type: 'professional'
  },
  {
    title: 'Master Thesis Project',
    company: 'ABB',
    companyUrl: 'https://www.linkedin.com/company/abb/',
    startDate: 'Sep 2021',
    endDate: 'Feb 2022',
    location: 'Baden-Württemberg, Germany',
    description: [
      'Conducted research and development for industrial automation',
      'Skills: C, C++'
    ],
    type: 'professional'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Meta',
    companyUrl: 'https://www.linkedin.com/company/meta/',
    startDate: 'Jun 2021',
    endDate: 'Aug 2021',
    description: [
      'Part of the Integrity Experience team',
      'Responsible for empowering users to make informed decisions on Meta platforms',
      'Tools: Hacklang (PHP), Python'
    ],
    type: 'professional'
  },
  {
    title: 'Software Engineer Intern',
    company: 'HubSpot',
    companyUrl: 'https://www.linkedin.com/company/hubspot/',
    startDate: 'Mar 2021',
    endDate: 'May 2021',
    description: [
      'Part of the Billing Management Experience team',
      'Responsible for comprehensibility of Billing-related PDF documents',
      'Tools: Java, React, HTML, CSS, Kafka'
    ],
    type: 'professional'
  },
  {
    title: 'Lead Software Engineer',
    company: 'Bleenco',
    companyUrl: 'https://www.linkedin.com/company/bleenco/',
    startDate: 'Dec 2018',
    endDate: 'Feb 2021',
    location: 'Munich, Bavaria, Germany',
    description: [
      'Led a team of developers designing scalable software solutions',
      'Architected systems for occupational safety and compliance',
      'Tools: Golang, C++, TypeScript, TimeScaleDB, RabbitMQ, GRPC, AngularJS, Kubernetes'
    ],
    type: 'professional'
  },
  {
    title: 'Back-end Developer',
    company: 'elmenus',
    companyUrl: 'https://www.linkedin.com/company/elmenus/',
    startDate: 'Jul 2018',
    endDate: 'Sep 2018',
    description: [
      'Developed backend services for restaurant discovery and ordering platform',
      'Analyzed user data to improve platform experience',
      'Tools: NodeJS, Scala, Apache Spark, MariaDB, Apache Cassandra, Elastic Search'
    ],
    type: 'professional'
  },
  {
    title: 'Software Engineer (Free Lancing)',
    company: 'Deutsches Forschungszentrum für Künstliche Intelligenz (DFKI)',
    companyUrl: 'https://www.linkedin.com/company/dfki/',
    startDate: 'Jan 2018',
    endDate: 'Dec 2018',
    description: [
      'Developed proof of concept for Tensor Factorization Music Recommender system',
      'Implemented recommendation algorithm, backend server, and Android application',
      'Tools: Java, ExpressJS, MySQL'
    ],
    type: 'professional'
  },
  {
    title: 'Junior Researcher',
    company: 'Deutsches Forschungszentrum für Künstliche Intelligenz (DFKI)',
    companyUrl: 'https://www.linkedin.com/company/dfki/',
    startDate: 'Jan 2017',
    endDate: 'Dec 2018',
    description: [
      'Designed and implemented OCR correction system for historical documents',
      'System based on Recurrent Neural Networks, reducing error by 3% over state-of-the-art',
      'Part of Excellence scholarship funded by DFKI and DAAD'
    ],
    type: 'professional'
  },
  {
    title: 'Software Developer (Intern)',
    company: 'eSEED',
    startDate: 'Jun 2016',
    endDate: 'Jul 2016',
    description: [
      'Developed Android applications and web applications',
      'Tools: WordPress, Java, ExpressJS, Qt, MySQL, MongoDB'
    ],
    type: 'professional'
  }
];

/**
 * Volunteer Experience
 * Sorted in descending order (most recent first)
 */
export const volunteerExperience: TimelineItem[] = [
  {
    title: 'Competitive Programming Contestant',
    company: 'ACM Programming Contests',
    startDate: 'Jun 2016',
    endDate: 'Present',
    description: [
      'Finalist (out of 150+ teams) in ACM Egyptian Collegiate Programming Contest 2016',
      'Ranked 35th (out of 150+ teams) in ACM Arab Collegiate Programming Contest 2016',
      'Solved 1000+ algorithmic challenges on various online judges'
    ],
    type: 'volunteer',
    isCurrent: true
  },
  {
    title: 'Lead Software Developer',
    company: 'IEEE German University in Cairo Student Branch',
    startDate: 'Mar 2016',
    endDate: 'Apr 2017',
    description: [
      'Led a team of 14 voluntarily recruited software developers',
      'Divided team into three sub-teams: Web back-end, Web front-end, and Android development',
      'Provided hands-on experience in software development through collaborative projects'
    ],
    type: 'volunteer'
  }
];

/**
 * Teaching Experience
 * Sorted in descending order (most recent first)
 */
export const teachingExperience: TimelineItem[] = [
  {
    title: 'Junior Teaching Assistant',
    company: 'The German University in Cairo',
    startDate: 'Sep 2015',
    endDate: 'Jun 2016',
    description: [
      'Introduction to Computer Science (CSEN 102): Teaching first semester students basic CS concepts and programming fundamentals using Python',
      'Data Structures and Algorithms (CSEN 301): Teaching third semester students data structures (arrays, stacks, queues, trees, heaps, hash tables) using Java',
      'Introduction to Computer Programming (CSEN 202): Teaching second semester students programming basics using Java'
    ],
    type: 'teaching'
  }
];

/**
 * Education
 * Sorted in descending order (most recent first)
 */
export const education: EducationItem[] = [
  {
    degree: 'Master of Science',
    school: 'Technical University Munich',
    schoolUrl: 'https://www.linkedin.com/school/technical-university-of-munich/',
    field: 'Computer Science',
    startDate: 'Sep 2018',
    endDate: 'Feb 2022'
  },
  {
    degree: 'Bachelor of Science',
    school: 'German University in Cairo',
    schoolUrl: 'https://www.linkedin.com/school/the-german-university-in-cairo/',
    field: 'Computer Science & Engineering',
    startDate: 'Sep 2013',
    endDate: 'Jun 2018'
  }
];

/**
 * Skills organized by category
 */
export const skills: SkillGroup[] = [
  {
    category: 'Backend & Systems',
    items: ['Node.js', 'ExpressJS', 'Go', 'Java', 'PHP', 'Python', 'Scala', 'Apache Spark']
  },
  {
    category: 'Frontend & Web',
    items: ['React', 'AngularJS', 'Android', 'Ionic', 'HTML', 'CSS', 'Qt', 'WordPress']
  },
  {
    category: 'Databases & Systems',
    items: ['MongoDB', 'MySQL', 'MariaDB', 'Apache Cassandra', 'Elastic Search', 'TimeScaleDB', 'RDBMS']
  },
  {
    category: 'DevOps & Infrastructure',
    items: ['Kubernetes', 'RabbitMQ', 'GRPC', 'Docker', 'Kafka']
  },
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Java', 'C', 'C++', 'Go', 'TypeScript', 'Python', 'Scala']
  },
  {
    category: 'Competitive Programming',
    items: ['Algorithms', 'Data Structures', 'Problem Solving', 'ACM ICPC']
  }
];

/**
 * Languages
 */
export const languages: Language[] = [
  {
    name: 'Arabic',
    level: 'Native or bilingual proficiency'
  },
  {
    name: 'English',
    level: 'Native or bilingual proficiency'
  },
  {
    name: 'German',
    level: 'Elementary proficiency'
  }
];

/**
 * Certifications and Achievements
 */
export const certifications: Certification[] = [
  {
    name: 'Google Developer Challenge Scholarship',
    issuer: 'Udacity',
    date: 'Nov 2017'
  }
];
