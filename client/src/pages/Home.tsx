import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';

/**
 * DESIGN PHILOSOPHY: Kinetic Brutalism
 * - Raw, technical aesthetic with deep charcoal background (#1a1a1a) and stark white text
 * - Electric lime accents (#00ff00) for interactive elements and highlights
 * - Asymmetric layouts with diagonal cuts and floating elements
 * - Kinetic interactions including glitch effects, parallax scrolling, and animated dividers
 * - Technical typography using Space Mono (headings) and JetBrains Mono (body)
 */

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  year: string;
}

interface Skill {
  category: string;
  items: string[];
  percentage: number;
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Meta',
      period: 'Current',
      description: [
        'Developing scalable systems and features for Meta platforms',
        'Collaborating with cross-functional teams on high-impact projects',
        'Contributing to codebase optimization and performance improvements'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Technical University Munich',
      period: '2018 - 2022',
      description: [
        'Completed comprehensive computer science education',
        'Specialized in algorithms, systems design, and software engineering',
        'Participated in competitive programming and research projects'
      ]
    }
  ];

  const projects: Project[] = [
    {
      name: 'GUC Switching Assistant',
      description: 'Android application for automating the switching tutorial process at GUC. Streamlined search functionality and improved user experience for students.',
      technologies: ['Android', 'Java', 'Mobile Development'],
      year: '2015'
    },
    {
      name: 'IEEEGUCSB-System',
      description: 'Server-side project for managing IEEE GUC student branch. Implemented task assignment, evaluation system, and member communication channels.',
      technologies: ['ExpressJS', 'Node.js', 'Backend'],
      year: '2016 - 2017'
    },
    {
      name: 'Yo-Gi-Oh Card Game',
      description: 'Full-featured card game built from scratch with Java and Swing UI. Selected as one of the best 10 projects by the university in 2015.',
      technologies: ['Java', 'Swing', 'Game Development'],
      year: '2015'
    },
    {
      name: 'Air-Madagascar Booking System',
      description: 'Single-page web application for airline reservations using MEAN stack. Included hybrid mobile application built with Ionic.',
      technologies: ['MEAN Stack', 'MongoDB', 'AngularJS', 'Node.js'],
      year: '2016'
    },
    {
      name: 'Mini Operating System',
      description: 'Simplified OS implementation in C with file system management, directory operations, and text file manipulation capabilities.',
      technologies: ['C', 'Systems Programming', 'OS Concepts'],
      year: '2016'
    },
    {
      name: 'Processor Simulator',
      description: 'Superscalar out-of-order 16-bit RISC processor simulator. Implemented full memory hierarchy with dynamic caching and Tomasulo\'s algorithm.',
      technologies: ['Java', 'Computer Architecture', 'Assembly'],
      year: '2016'
    }
  ];

  const skills: Skill[] = [
    {
      category: 'Backend Development',
      items: ['Node.js', 'ExpressJS', 'Go', 'Java', 'System Design'],
      percentage: 90
    },
    {
      category: 'Frontend Development',
      items: ['React', 'AngularJS', 'Android', 'Ionic', 'UI/UX'],
      percentage: 85
    },
    {
      category: 'Databases & Systems',
      items: ['MongoDB', 'SQL', 'Database Design', 'RDBMS', 'Caching'],
      percentage: 88
    },
    {
      category: 'Competitive Programming',
      items: ['Algorithms', 'Data Structures', 'Problem Solving', 'ACM ICPC'],
      percentage: 92
    }
  ];

  const certifications = [
    {
      name: 'Google Developer Challenge Scholarship',
      issuer: 'Udacity',
      date: 'Nov 2017'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-accent/20">
        <div className="container flex items-center justify-between py-4">
          <div className="text-xl font-bold font-mono tracking-widest">
            <span className="text-accent">&lt;</span>KAREEM<span className="text-accent">/&gt;</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-foreground/60 hover:text-accent'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-abstract.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.4
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 floating-shape" style={{ animationDelay: '0s' }}>
          <div className="w-full h-full border-2 border-accent/30 transform rotate-45" />
        </div>
        <div className="absolute bottom-40 right-20 w-24 h-24 floating-shape" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full rounded-full border-2 border-accent/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 container text-center">
          <div className="stagger-in" style={{ animationDelay: '0s' }}>
            <h1 className="text-6xl md:text-8xl font-bold font-mono mb-4 tracking-tighter">
              KAREEM<br />
              <span className="text-accent glitch">MOKHTAR</span>
            </h1>
          </div>

          <div className="stagger-in mt-8" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl font-mono text-foreground/80 mb-2">
              Software Engineer @ Meta
            </p>
            <p className="text-sm md:text-base font-mono text-accent uppercase tracking-widest">
              Building scalable systems. Solving complex problems. Crafting elegant code.
            </p>
          </div>

          <div className="stagger-in mt-12" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2 text-accent font-mono uppercase tracking-wider hover:gap-4 transition-all duration-300"
            >
              Explore <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div
                className="relative w-80 h-80 mx-auto"
                style={{
                  backgroundImage: 'url(/images/profile-accent.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)'
                }}
              />
              <div className="absolute -inset-4 border-2 border-accent/30" style={{
                clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)'
              }} />
            </div>

            {/* About Content */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
                <span className="text-accent accent-line">ABOUT</span>
              </h2>
              <p className="text-lg font-mono text-foreground/80 mb-6 leading-relaxed">
                Experienced Software Engineer with a demonstrated history of working in the computer software industry. Passionate about building scalable systems, solving complex algorithmic problems, and creating elegant solutions to real-world challenges.
              </p>
              <p className="text-lg font-mono text-foreground/80 mb-8 leading-relaxed">
                Currently at Meta, contributing to high-impact projects. Previously competed in ACM programming contests and led software development initiatives. Specialized in backend systems, full-stack development, and competitive programming.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/kareem-mokhtar" target="_blank" rel="noopener noreferrer" className="hover-scale">
                  <Linkedin className="w-6 h-6 text-accent hover:text-accent/80" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover-scale">
                  <Github className="w-6 h-6 text-accent hover:text-accent/80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider relative">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
            fill="#262626"
            opacity="0.3"
          />
          <path
            d="M0,60 Q300,20 600,60 T1200,60"
            stroke="#00ff00"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 bg-card/30">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-16 tracking-tighter">
            <span className="text-accent accent-line">EXPERIENCE</span>
          </h2>

          <div className="experience-timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="border-l-2 border-accent pl-8 pb-8">
                  <h3 className="text-2xl font-bold font-mono text-accent mb-2">{exp.title}</h3>
                  <p className="text-lg font-mono text-foreground/80 mb-1">{exp.company}</p>
                  <p className="text-sm font-mono text-foreground/60 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-base font-mono text-foreground/70 flex items-start gap-3">
                        <span className="text-accent mt-1">→</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 bg-background">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-16 tracking-tighter">
            <span className="text-accent accent-line">PROJECTS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-mono text-accent flex-1">{project.name}</h3>
                  <span className="text-sm font-mono text-foreground/60 ml-4">{project.year}</span>
                </div>
                <p className="text-base font-mono text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono border border-accent/50 text-accent/80 hover:border-accent hover:text-accent transition-all duration-300"
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
      <section id="skills" className="relative py-32 bg-card/30">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-16 tracking-tighter">
            <span className="text-accent accent-line">SKILLS</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skillGroup, idx) => (
              <div key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>
                <h3 className="text-xl font-bold font-mono text-accent mb-4">{skillGroup.category}</h3>
                <div className="mb-6">
                  <div className="skill-bar" style={{ '--skill-percentage': `${skillGroup.percentage}%` } as any}>
                    <div className="skill-bar-fill" />
                  </div>
                  <p className="text-sm font-mono text-foreground/60 mt-2">{skillGroup.percentage}% Proficiency</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-accent/10 border border-accent/30 text-foreground/80 hover:bg-accent/20 hover:border-accent transition-all duration-300"
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

      {/* Certifications Section */}
      <section className="relative py-32 bg-background">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-16 tracking-tighter">
            <span className="text-accent accent-line">CERTIFICATIONS</span>
          </h2>

          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="border-l-4 border-accent pl-6 py-4 hover-scale"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-lg font-bold font-mono text-accent mb-1">{cert.name}</h3>
                <p className="text-base font-mono text-foreground/80">{cert.issuer}</p>
                <p className="text-sm font-mono text-foreground/60">Issued {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-card/30 border-t-2 border-accent/20">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold font-mono mb-8 tracking-tighter">
            <span className="text-accent glitch">GET IN TOUCH</span>
          </h2>
          <p className="text-lg font-mono text-foreground/80 mb-12 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's connect and build something amazing together.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:kareem@example.com" className="contact-button">
              <Mail className="inline w-5 h-5 mr-2" /> Email Me
            </a>
            <a href="https://linkedin.com/in/kareem-mokhtar" target="_blank" rel="noopener noreferrer" className="contact-button">
              <Linkedin className="inline w-5 h-5 mr-2" /> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-button">
              <Github className="inline w-5 h-5 mr-2" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-2 border-accent/20 py-8">
        <div className="container text-center">
          <p className="text-sm font-mono text-foreground/60">
            © 2025 Kareem Mokhtar. Built with React, Tailwind CSS, and kinetic design principles.
          </p>
          <p className="text-xs font-mono text-accent/60 mt-2">
            &lt;/&gt; Crafted with precision
          </p>
        </div>
      </footer>
    </div>
  );
}
