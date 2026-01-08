/**
 * Personal Projects Data
 * 
 * Contains all 13 personal projects from LinkedIn profile with descriptions, technologies, and links
 * All projects are from LinkedIn profile with real descriptions and links where available
 */

export interface Project {
  /** Project name/title */
  name: string;
  /** Project description */
  description: string;
  /** Array of technologies used */
  technologies: string[];
  /** Optional project URL (GitHub, demo, or app store) */
  projectUrl?: string;
}

/**
 * Personal Projects
 * All 13 projects from LinkedIn profile, sorted by date (newest first)
 */
export const projects: Project[] = [
  {
    name: 'Mini Monopoly',
    description: 'An embedded system implementation using Arduino to automate the well-known monopoly game. Creates a physical monopoly game that has the same functionality and features of the digital version.',
    technologies: ['Arduino', 'C', 'Embedded Systems', 'Hardware'],
  },
  {
    name: 'أُهرُب يا وِلد (Ohrob ya weld) - Horror Game',
    description: 'A horror game implemented using OpenGL. The story involves a character trapped in a haunted house who must figure out a 4-digit pass code to escape the exit door by solving puzzles and collecting clues scattered throughout the house before time runs out.',
    technologies: ['OpenGL', 'C++', 'Game Development', 'Graphics Programming'],
  },
  {
    name: 'AskTube',
    description: 'A chat bot that answers questions about videos (e.g., "what is the most popular music video?", "show me trending videos", "show me videos about cats"). The chat bot was implemented using Go for the server-side and an Android application for the client-side.',
    technologies: ['Java', 'Go', 'Android', 'Chatbot'],
  },
  {
    name: 'Mini Operating System',
    description: 'A simplified OS implementation with C that supports creating and deleting directories, creating, deleting, copying, moving, editing and viewing text files.',
    technologies: ['C', 'Operating Systems', 'Systems Programming'],
  },
  {
    name: 'Smart Trash',
    description: 'A trash can that opens automatically when someone wants to throw trash in it. Also sends a signal to the residential trash pick-up company whenever it is full.',
    technologies: ['C', 'IoT', 'Embedded Systems', 'Hardware'],
  },
  {
    name: 'Mini Chatting Application',
    description: 'A simple chatting application implemented using Java socket programming. It is a LAN chatting application based on a Client-Server model.',
    technologies: ['Java', 'Networking', 'Socket Programming'],
  },
  {
    name: 'GUC Switching Assistant',
    description: 'An Android application for GUC students to make the switching tutorial process easier by automating the search process. Worked on this project with a team of two. The application was released in summer 2015.',
    technologies: ['JavaScript', 'Node.js', 'Android'],
    projectUrl: 'https://play.google.com/store/apps/details?id=com.nmk_team.gucswitchingassistant',
  },
  {
    name: 'IEEEGUCSB-System',
    description: 'A server-side project developed to manage IEEE GUC student branch (a large working group with hierarchical structure). The project acts as a task assignment, evaluation system and channel of communication between members. Developed using ExpressJS.',
    technologies: ['HTML', 'JavaScript', 'Node.js', 'Express.js'],
    projectUrl: 'https://github.com/KEMDAK/IEEEGUCSB-System',
  },
  {
    name: 'Processor Simulator',
    description: 'A project to simulate a Superscalar out-of-order 16-bit RISC processor. Implemented a full memory hierarchy with dynamic number of caches and a processor that uses Tomasulo\'s algorithm with speculation to simulate any assembly program.',
    technologies: ['Java', 'Computer Architecture', 'Systems Design'],
  },
  {
    name: 'IEEE GUC SB Elections System',
    description: 'A secure election system for conducting the yearly upper board elections of IEEE GUC student branch through their website. Implemented using the Laravel framework.',
    technologies: ['HTML', 'Laravel', 'PHP', 'Web Development'],
  },
  {
    name: 'Air-Madagascar Online Booking System',
    description: 'An educational project implementing a single page web application to act as a mock online reservation system for Air Madagascar using the MEAN stack (MongoDB, ExpressJS, AngularJS and Node.js). Also includes a hybrid mobile application implemented using Ionic.',
    technologies: ['HTML', 'Node.js', 'MongoDB', 'AngularJS', 'Ionic', 'Express.js'],
  },
  {
    name: 'Relational Database Management System (RDBMS)',
    description: 'A relational database management system implemented in Java. Supports creation of tables and indexes using B+ tree data structure, insertion, deletion, selection (search), and update operations.',
    technologies: ['Java', 'Databases', 'Data Structures', 'B+ Trees'],
  },
  {
    name: 'Yo-Gi-Oh the Game',
    description: 'A card game built from scratch in a team of two students using Java and Java Swing for the UI. This project was picked by the university as one of the best 10 projects in 2015.',
    technologies: ['Java', 'Swing', 'Game Development'],
    projectUrl: 'https://github.com/KEMDAK/YU-GI-OH',
  },
];
