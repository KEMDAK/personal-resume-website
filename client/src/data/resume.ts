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
    companyUrl: 'https://www.meta.com/',
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
    companyUrl: 'https://www.meta.com/',
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
    companyUrl: 'https://www.meta.com/',
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
    companyUrl: 'https://www.abb.com/global/en',
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
    companyUrl: 'https://www.meta.com/',
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
    companyUrl: 'https://www.hubspot.com/',
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
    companyUrl: 'https://bleenco.com/',
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
    companyUrl: 'https://www.elmenus.com/',  startDate: 'Jul 2018',
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
    companyUrl: 'https://www.dfki.de/en/web',
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
    companyUrl: 'https://www.dfki.de/en/web',
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
    companyUrl: 'https://eseed.net',
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
    companyUrl: 'https://www.acm.org/',
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
    companyUrl: 'https://www.ieeeguc.tech',
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
    companyUrl: 'https://www.guc.edu.eg/',
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
    schoolUrl: 'https://www.tum.de/en/',
    field: 'Computer Science',
    startDate: 'Sep 2018',
    endDate: 'Feb 2022'
  },
  {
    degree: 'Bachelor of Science',
    school: 'German University in Cairo',
    schoolUrl: 'https://www.guc.edu.eg/',
    field: 'Computer Science & Engineering',
    startDate: 'Sep 2013',
    endDate: 'Jun 2018'
  }
];

/**
 * Skills organized by category
 * Each skill includes an optional URL to its official website
 */
export const skills: SkillGroup[] = [
  {
    category: 'Backend & Systems',
    items: [
      { name: 'Node.js', url: 'https://nodejs.org/' },
      { name: 'ExpressJS', url: 'https://expressjs.com/' },
      { name: 'Go', url: 'https://go.dev/' },
      { name: 'Java', url: 'https://www.java.com/' },
      { name: 'PHP', url: 'https://www.php.net/' },
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'Scala', url: 'https://www.scala-lang.org/' },
      { name: 'Apache Spark', url: 'https://spark.apache.org/' }
    ]
  },
  {
    category: 'Frontend & Web',
    items: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'AngularJS', url: 'https://angularjs.org/' },
      { name: 'Android', url: 'https://developer.android.com/' },
      { name: 'Ionic', url: 'https://ionicframework.com/' },
      { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'Qt', url: 'https://www.qt.io/' },
      { name: 'WordPress', url: 'https://wordpress.org/' }
    ]
  },
  {
    category: 'Databases & Systems',
    items: [
      { name: 'MongoDB', url: 'https://www.mongodb.com/' },
      { name: 'MySQL', url: 'https://www.mysql.com/' },
      { name: 'MariaDB', url: 'https://mariadb.org/' },
      { name: 'Apache Cassandra', url: 'https://cassandra.apache.org/' },
      { name: 'Elastic Search', url: 'https://www.elastic.co/elasticsearch' },
      { name: 'TimeScaleDB', url: 'https://www.timescale.com/' },
      { name: 'RDBMS' }
    ]
  },
  {
    category: 'DevOps & Infrastructure',
    items: [
      { name: 'Kubernetes', url: 'https://kubernetes.io/' },
      { name: 'RabbitMQ', url: 'https://www.rabbitmq.com/' },
      { name: 'gRPC', url: 'https://grpc.io/' },
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'Kafka', url: 'https://kafka.apache.org/' }
    ]
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Java', url: 'https://www.java.com/' },
      { name: 'C', url: 'https://en.cppreference.com/w/c' },
      { name: 'C++', url: 'https://isocpp.org/' },
      { name: 'Go', url: 'https://go.dev/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'Scala', url: 'https://www.scala-lang.org/' }
    ]
  },
  {
    category: 'Competitive Programming',
    items: [
      { name: 'Algorithms' },
      { name: 'Data Structures' },
      { name: 'Problem Solving' },
      { name: 'ACM ICPC', url: 'https://icpc.global/' }
    ]
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
    issuerUrl: 'https://www.udacity.com/',
    date: 'Nov 2017'
  }
];
