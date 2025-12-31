import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';

/**
 * DESIGN PHILOSOPHY: Green Terminal Vibe
 * - Retro hacker aesthetic with deep black background and bright green text
 * - Glowing green accents (#00ff00) mimicking CRT monitors
 * - ASCII-inspired elements and code-like styling
 * - Fade-in effects on scroll for a dynamic, interactive feel
 * - Timeline layouts with left-aligned vertical lines
 * - Interactive hover effects and terminal-style animations
 */

interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  date: string;
}

interface Skill {
  category: string;
  items: string[];
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which elements are in view
      const elements = document.querySelectorAll('[data-fade]');
      const newVisible = new Set<string>();
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          newVisible.add(el.id);
        }
      });
      
      setVisibleElements(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Meta',
      startDate: 'Jan 2023',
      endDate: 'Present',
      description: [
        'Developing scalable systems and features for Meta platforms',
        'Collaborating with cross-functional teams on high-impact projects',
        'Contributing to codebase optimization and performance improvements'
      ]
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
      ]
    }
  ];

  const education: Education[] = [
    {
      school: 'Technical University Munich',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2018',
      endDate: '2022'
    },
    {
      school: 'German University in Cairo',
      degree: 'Bachelor of Science',
      field: 'Computer Science & Engineering',
      startDate: '2013',
      endDate: '2018'
    }
  ];

  const projects: Project[] = [
    {
      name: 'GUC Switching Assistant',
      description: 'Android application for automating the switching tutorial process at GUC. Streamlined search functionality and improved user experience for students.',
      technologies: ['Android', 'Java', 'Mobile Development'],
      date: '2015'
    },
    {
      name: 'IEEEGUCSB-System',
      description: 'Server-side project for managing IEEE GUC student branch. Implemented task assignment, evaluation system, and member communication channels.',
      technologies: ['ExpressJS', 'Node.js', 'Backend'],
      date: '2016 - 2017'
    },
    {
      name: 'Yo-Gi-Oh Card Game',
      description: 'Full-featured card game built from scratch with Java and Swing UI. Selected as one of the best 10 projects by the university in 2015.',
      technologies: ['Java', 'Swing', 'Game Development'],
      date: '2015'
    },
    {
      name: 'Air-Madagascar Booking System',
      description: 'Single-page web application for airline reservations using MEAN stack. Included hybrid mobile application built with Ionic.',
      technologies: ['MEAN Stack', 'MongoDB', 'AngularJS', 'Node.js'],
      date: '2016'
    },
    {
      name: 'Mini Operating System',
      description: 'Simplified OS implementation in C with file system management, directory operations, and text file manipulation capabilities.',
      technologies: ['C', 'Systems Programming', 'OS Concepts'],
      date: '2016'
    },
    {
      name: 'Processor Simulator',
      description: 'Superscalar out-of-order 16-bit RISC processor simulator. Implemented full memory hierarchy with dynamic caching and Tomasulo\'s algorithm.',
      technologies: ['Java', 'Computer Architecture', 'Assembly'],
      date: '2016'
    },
    {
      name: 'Mini Monopoly',
      description: 'Embedded system implementation using Arduino to automate the Monopoly game with physical hardware integration.',
      technologies: ['Arduino', 'Embedded Systems', 'C++'],
      date: '2016'
    },
    {
      name: 'Ohrob ya weld (Horror Game)',
      description: 'Horror game implemented using OpenGL where players solve puzzles to escape a haunted house.',
      technologies: ['OpenGL', 'C++', 'Game Development'],
      date: '2016'
    },
    {
      name: 'AskTube',
      description: 'Chat bot that answers questions about YouTube videos. Server-side built with Go and Android client application.',
      technologies: ['Go', 'Android', 'Chat Bot'],
      date: '2016'
    },
    {
      name: 'IEEE GUC Elections System',
      description: 'Secure election system for conducting yearly upper board elections of IEEE GUC student branch.',
      technologies: ['Laravel', 'PHP', 'Web Development'],
      date: '2016'
    },
    {
      name: 'RDBMS (Relational Database Management System)',
      description: 'Relational database management system with table creation, B+ tree indexes, and full CRUD operations.',
      technologies: ['Java', 'Database Design', 'Data Structures'],
      date: '2016'
    },
    {
      name: 'Smart Trash',
      description: 'IoT trash can that opens automatically and sends signals to residential trash pickup company when full.',
      technologies: ['IoT', 'Embedded Systems', 'Hardware'],
      date: '2015'
    },
    {
      name: 'Mini Chatting Application',
      description: 'LAN chatting application using Java socket programming with Client-Server model.',
      technologies: ['Java', 'Networking', 'Socket Programming'],
      date: '2015'
    }
  ];

  const skills: Skill[] = [
    {
      category: 'Backend Development',
      items: ['Node.js', 'ExpressJS', 'Go', 'Java', 'System Design', 'Laravel', 'PHP']
    },
    {
      category: 'Frontend Development',
      items: ['React', 'AngularJS', 'Android', 'Ionic', 'UI/UX', 'OpenGL']
    },
    {
      category: 'Databases & Systems',
      items: ['MongoDB', 'SQL', 'Database Design', 'RDBMS', 'Caching', 'Redis']
    },
    {
      category: 'Competitive Programming',
      items: ['Algorithms', 'Data Structures', 'Problem Solving', 'ACM ICPC']
    }
  ];

  const certifications = [
    {
      name: 'Google Developer Challenge Scholarship',
      issuer: 'Udacity',
      date: 'Nov 2017'
    }
  ];

  const languages = [
    { name: 'Arabic', level: 'Native or bilingual proficiency' },
    { name: 'English', level: 'Native or bilingual proficiency' },
    { name: 'German', level: 'Elementary proficiency' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isFaded = (id: string) => visibleElements.has(id);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-green-400/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400 glow">
            &lt;KAREEM /&gt;
          </div>
          <div className="flex gap-8">
            {['about', 'experience', 'education', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-green-400 hover:text-green-200 uppercase text-sm tracking-widest transition-colors duration-300 hover:glow"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 border-b border-green-400/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-green-400/10 rotate-45 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-green-400/5 rounded-full animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-8 animate-pulse">
            <span className="text-green-400/60">&gt; _</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold mb-4 glow">
            KAREEM
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-green-300">
            MOKHTAR
          </h2>
          <p className="text-2xl text-green-400 mb-4">Software Engineer @ Meta</p>
          <p className="text-lg text-green-400/80 mb-12 max-w-2xl mx-auto">
            Building scalable systems. Solving complex problems. Crafting elegant code.
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-200 uppercase text-sm tracking-wider transition-all duration-300 hover:glow border border-green-400/50 px-6 py-3 hover:bg-green-400/10"
          >
            Explore <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-green-300 glow">
            &gt; ABOUT
          </h2>
          <div
            id="about-content"
            data-fade
            className={`transition-opacity duration-1000 ${isFaded('about-content') ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="text-lg text-green-400/80 mb-6 leading-relaxed max-w-3xl">
              Experienced Software Engineer with a demonstrated history of working in the computer software industry. Passionate about building scalable systems, solving complex algorithmic problems, and creating elegant solutions to real-world challenges.
            </p>
            <p className="text-lg text-green-400/80 mb-8 leading-relaxed max-w-3xl">
              Currently at Meta, contributing to high-impact projects. Previously competed in ACM programming contests and led software development initiatives. Specialized in backend systems, full-stack development, and competitive programming.
            </p>
            <div className="flex gap-4">
              <a href="mailto:kareem@example.com" className="text-green-400 hover:text-green-200 hover:glow transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/kareem-mokhtar" className="text-green-400 hover:text-green-200 hover:glow transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" className="text-green-400 hover:text-green-200 hover:glow transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-green-300 glow">
            &gt; EXPERIENCE
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                id={`exp-${idx}`}
                data-fade
                className={`transition-opacity duration-1000 ${isFaded(`exp-${idx}`) ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="flex gap-8">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-green-400 glow mb-4" />
                    <div className="w-1 h-32 bg-green-400/30" />
                  </div>
                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <h3 className="text-2xl font-bold text-green-300 mb-2">{exp.title}</h3>
                    <p className="text-lg text-green-400 mb-1">{exp.company}</p>
                    <p className="text-sm text-green-400/60 mb-4">
                      {exp.startDate} — {exp.endDate}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-base text-green-400/80 flex items-start gap-3">
                          <span className="text-green-400 mt-1">→</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-green-300 glow">
            &gt; EDUCATION
          </h2>
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                id={`edu-${idx}`}
                data-fade
                className={`transition-opacity duration-1000 ${isFaded(`edu-${idx}`) ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="flex gap-8">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-green-400 glow mb-4" />
                    <div className="w-1 h-32 bg-green-400/30" />
                  </div>
                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <h3 className="text-2xl font-bold text-green-300 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-green-400 mb-1">{edu.school}</p>
                    <p className="text-base text-green-400/80 mb-2">{edu.field}</p>
                    <p className="text-sm text-green-400/60">
                      {edu.startDate} — {edu.endDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-green-300 glow">
            &gt; PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                id={`proj-${idx}`}
                data-fade
                className={`transition-opacity duration-1000 border border-green-400/30 p-6 hover:border-green-400 hover:bg-green-400/5 transition-all ${
                  isFaded(`proj-${idx}`) ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-green-300 flex-1">{project.name}</h3>
                  <span className="text-sm text-green-400/60 ml-4">{project.date}</span>
                </div>
                <p className="text-base text-green-400/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-green-400/50 text-green-400/80 hover:border-green-400 hover:text-green-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-green-300 glow">
            &gt; SKILLS
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                id={`skill-${idx}`}
                data-fade
                className={`transition-opacity duration-1000 ${isFaded(`skill-${idx}`) ? 'opacity-100' : 'opacity-0'}`}
              >
                <h3 className="text-xl font-bold text-green-300 mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 border border-green-400/50 text-green-400/80 hover:border-green-400 hover:text-green-400 hover:bg-green-400/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="relative py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-green-300 glow">
            &gt; LANGUAGES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                id={`lang-${idx}`}
                data-fade
                className={`transition-opacity duration-1000 border border-green-400/30 p-6 ${
                  isFaded(`lang-${idx}`) ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-lg font-bold text-green-300 mb-2">{lang.name}</h3>
                <p className="text-green-400/80">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-green-300 glow">
            &gt; CERTIFICATIONS
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                id={`cert-${idx}`}
                data-fade
                className={`transition-opacity duration-1000 border-l-4 border-green-400 pl-6 py-4 ${
                  isFaded(`cert-${idx}`) ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-lg font-bold text-green-300 mb-1">{cert.name}</h3>
                <p className="text-base text-green-400/80">{cert.issuer}</p>
                <p className="text-sm text-green-400/60">Issued {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 text-green-300 glow">
            &gt; GET IN TOUCH
          </h2>
          <p className="text-lg text-green-400/80 mb-12 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's connect and build something amazing together.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:kareem@example.com"
              className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400/10 hover:text-green-200 transition-all hover:glow"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/kareem-mokhtar"
              className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400/10 hover:text-green-200 transition-all hover:glow"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400/10 hover:text-green-200 transition-all hover:glow"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-400/20 py-8 text-center text-green-400/60">
        <p>&copy; 2025 Kareem Mokhtar. Built with React, Tailwind CSS, and terminal vibes.</p>
      </footer>

      <style>{`
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
          }
        }

        .glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
