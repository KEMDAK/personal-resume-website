'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

/**
 * DESIGN PHILOSOPHY: Green Terminal Vibe with Advanced Animations
 * - Retro hacker aesthetic with deep black background and bright green text
 * - Line-by-line fade-in animations with upward movement on scroll
 * - Animations reverse when scrolling up
 * - Mobile-first responsive design
 * - Separate professional, volunteer, and teaching experience
 * - Complete LinkedIn data integration
 * - Enhanced timeline with vertical bar, aligned dots, and glowing dates
 * - Dynamic duration calculation for current positions
 */

interface TimelineItem {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  duration?: string;
  location?: string;
  description: string[];
  type?: 'professional' | 'volunteer' | 'teaching';
  isCurrent?: boolean;
}

interface AnimatedLineProps {
  text: string;
  index: number;
  isVisible: boolean;
}

const calculateDuration = (startDate: string, endDate: string): string => {
  const parseDate = (dateStr: string): Date => {
    const [month, year] = dateStr.trim().split(' ');
    const monthMap: { [key: string]: number } = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    return new Date(parseInt(year), monthMap[month] || 0, 1);
  };

  try {
    const start = parseDate(startDate);
    const end = endDate.toLowerCase() === 'present' ? new Date() : parseDate(endDate);
    
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    if (years === 0 && months === 0) return 'Less than 1 month';
    if (years === 0) return `${months} mo${months > 1 ? 's' : ''}`;
    if (months === 0) return `${years} yr${years > 1 ? 's' : ''}`;
    return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`;
  } catch {
    return '';
  }
};

const AnimatedLine: React.FC<AnimatedLineProps> = ({ text, index, isVisible }) => {
  const delay = index * 0.05;
  
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
        transition: `all 0.6s ease-out ${delay}s`,
      }}
      className="text-base text-green-400/80 leading-relaxed"
    >
      {text}
    </div>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const newVisible = new Set<string>();
      
      Object.entries(sectionRefs.current).forEach(([id, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          // Trigger animation when section is 60% into viewport
          if (rect.top < window.innerHeight * 0.6) {
            newVisible.add(id);
          } else {
            // Remove from visible set when scrolling back up past threshold
            if (rect.top > window.innerHeight * 0.7) {
              newVisible.delete(id);
            }
          }
        }
      });
      
      setVisibleSections(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSectionVisible = (sectionId: string): boolean => {
    return visibleSections.has(sectionId);
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const professionalExperience: TimelineItem[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Meta',
      startDate: 'Jun 2024',
      endDate: 'Present',
      location: 'Greater London, England, United Kingdom',
      description: [
        'Leading technical initiatives and architecting scalable systems',
        'Mentoring junior engineers and driving code quality improvements',
        'Contributing to high-impact projects across Meta platforms'
      ],
      type: 'professional' as const,
      isCurrent: true
    },
    {
      title: 'Software Engineer',
      company: 'Meta',
      startDate: 'Jan 2023',
      endDate: 'Jun 2024',
      location: 'Greater London, England, United Kingdom',
      description: [
        'Developing scalable systems and features for Meta platforms',
        'Collaborating with cross-functional teams on high-impact projects',
        'Contributing to codebase optimization and performance improvements'
      ],
      type: 'professional' as const
    },
    {
      title: 'Junior Software Engineer',
      company: 'Meta',
      startDate: 'Jun 2022',
      endDate: 'Jan 2023',
      location: 'Greater London, England, United Kingdom',
      description: [
        'Building and maintaining backend services',
        'Participating in code reviews and design discussions',
        'Implementing features for Meta products'
      ],
      type: 'professional' as const
    },
    {
      title: 'Lead Software Engineer',
      company: 'Bleenco',
      startDate: 'Dec 2018',
      endDate: 'Feb 2021',
      location: 'Munich, Bavaria, Germany',
      description: [
        'Led a team of developers designing scalable software solutions',
        'Architected systems for occupational safety and compliance',
        'Tools: Golang, C++, TypeScript, TimeScaleDB, RabbitMQ, GRPC, AngularJS, Kubernetes'
      ],
      type: 'professional' as const
    },
    {
      title: 'Back-end Developer',
      company: 'elmenus',
      startDate: 'Jul 2018',
      endDate: 'Sep 2018',
      description: [
        'Developed backend services for restaurant discovery and ordering platform',
        'Analyzed user data to improve platform experience',
        'Tools: NodeJS, Scala, Apache Spark, MariaDB, Apache Cassandra, Elastic Search'
      ],
      type: 'professional' as const
    },
    {
      title: 'Software Engineer Intern',
      company: 'Meta',
      startDate: 'Jun 2021',
      endDate: 'Aug 2021',
      description: [
        'Part of the Integrity Experience team',
        'Responsible for empowering users to make informed decisions on Meta platforms',
        'Tools: Hacklang (PHP), Python'
      ],
      type: 'professional' as const
    },
    {
      title: 'Software Engineer Intern',
      company: 'HubSpot',
      startDate: 'Mar 2021',
      endDate: 'May 2021',
      description: [
        'Part of the Billing Management Experience team',
        'Responsible for comprehensibility of Billing-related PDF documents',
        'Tools: Java, React, HTML, CSS, Kafka'
      ],
      type: 'professional' as const
    },
    {
      title: 'Master Thesis Project',
      company: 'ABB',
      startDate: 'Sep 2021',
      endDate: 'Feb 2022',
      location: 'Baden-Württemberg, Germany',
      description: [
        'Conducted research and development for industrial automation',
        'Skills: C, C++'
      ],
      type: 'professional' as const
    },
    {
      title: 'Software Engineer (Free Lancing)',
      company: 'Deutsches Forschungszentrum für Künstliche Intelligenz (DFKI)',
      startDate: 'Jan 2018',
      endDate: 'Dec 2018',
      description: [
        'Developed proof of concept for Tensor Factorization Music Recommender system',
        'Implemented recommendation algorithm, backend server, and Android application',
        'Tools: Java, ExpressJS, MySQL'
      ],
      type: 'professional' as const
    },
    {
      title: 'Junior Researcher',
      company: 'Deutsches Forschungszentrum für Künstliche Intelligenz (DFKI)',
      startDate: 'Jan 2017',
      endDate: 'Dec 2018',
      description: [
        'Designed and implemented OCR correction system for historical documents',
        'System based on Recurrent Neural Networks, reducing error by 3% over state-of-the-art',
        'Part of Excellence scholarship funded by DFKI and DAAD'
      ],
      type: 'professional' as const
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
      type: 'professional' as const
    }
  ].sort((a, b) => {
    const parseDate = (dateStr: string): Date => {
      if (dateStr.toLowerCase() === 'present') return new Date();
      const [month, year] = dateStr.trim().split(' ');
      const monthMap: { [key: string]: number } = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      return new Date(parseInt(year), monthMap[month] || 0, 1);
    };
    return parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime();
  });

  const volunteerExperience: TimelineItem[] = [
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
      type: 'volunteer' as const,
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
      type: 'volunteer' as const
    }
  ].sort((a, b) => {
    const parseDate = (dateStr: string): Date => {
      if (dateStr.toLowerCase() === 'present') return new Date();
      const [month, year] = dateStr.trim().split(' ');
      const monthMap: { [key: string]: number } = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      return new Date(parseInt(year), monthMap[month] || 0, 1);
    };
    return parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime();
  });

  const teachingExperience: TimelineItem[] = [
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
      type: 'teaching' as const
    }
  ];

  const education = [
    {
      degree: 'Master of Science',
      school: 'Technical University Munich',
      field: 'Computer Science',
      startDate: 'Sep 2018',
      endDate: 'Feb 2022'
    },
    {
      degree: 'Bachelor of Science',
      school: 'German University in Cairo',
      field: 'Computer Science & Engineering',
      startDate: 'Sep 2013',
      endDate: 'Jun 2018'
    }
  ];

  const skills = [
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

  const languages = [
    { name: 'Arabic', level: 'Native or bilingual proficiency' },
    { name: 'English', level: 'Native or bilingual proficiency' },
    { name: 'German', level: 'Elementary proficiency' }
  ];

  const certifications = [
    {
      name: 'Google Developer Challenge Scholarship',
      issuer: 'Udacity',
      date: 'Nov 2017'
    }
  ];

  const TimelineSection = ({ items, title, id }: { items: TimelineItem[]; title: string; id: string }) => {
    return (
      <section id={id} ref={(el) => { if (el) sectionRefs.current[id] = el; }} className="relative py-16 md:py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-green-300 glow">
            &gt; {title}
          </h2>
          <div className="relative">
            {/* Vertical timeline line - centered */}
            <div className="absolute left-1.5 md:left-2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-green-400 to-green-400/30" />
            
            <div className="space-y-12 md:space-y-16 pl-8 md:pl-12">
              {items.map((item, idx) => {
                const duration = item.isCurrent ? calculateDuration(item.startDate, 'Present') : (item.duration || calculateDuration(item.startDate, item.endDate));
                const dateDisplay = item.isCurrent 
                  ? `${item.startDate} — Present`
                  : `${item.startDate} — ${item.endDate}`;

                return (
                  <div
                    key={idx}
                    id={`${id}-${idx}`}
                    className="relative transition-all duration-1000 pt-2 md:pt-3"
                    style={{
                      opacity: isSectionVisible(id) ? 1 : 0,
                      transform: isSectionVisible(id) ? 'translateY(0px)' : 'translateY(20px)',
                      transitionDelay: `${idx * 0.1}s`
                    }}
                  >
                    {/* Date badge - positioned just above the item, closer */}
                    <div className="absolute -top-5 md:-top-6 left-0 text-xs md:text-sm text-green-300 whitespace-nowrap font-mono glow">
                      {dateDisplay}
                    </div>

                    {/* Dot on timeline - perfectly centered on the line */}
                    <div className="absolute -left-3.5 md:-left-4.5 -top-4 md:-top-5 w-3 md:w-4 h-3 md:h-4 rounded-full bg-green-400 glow border-2 border-black" />

                    {/* Content */}
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-green-300 mb-1 md:mb-2 break-words">{item.title}</h3>
                      <p className="text-base md:text-lg text-green-400 mb-1 md:mb-2 break-words">{item.company}</p>
                      {duration && (
                        <p className="text-xs md:text-sm text-green-400/60 mb-2 md:mb-3">{duration}</p>
                      )}
                      {item.location && (
                        <p className="text-xs md:text-sm text-green-400/60 mb-3 md:mb-4">{item.location}</p>
                      )}
                      <div className="space-y-2 md:space-y-3">
                        {item.description.map((desc, i) => (
                          <AnimatedLine
                            key={i}
                            text={desc}
                            index={i}
                            isVisible={isSectionVisible(id)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-green-400/30">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center gap-4">
          <div className="text-lg md:text-2xl font-bold text-green-400 glow flex-shrink-0">
            &lt;KAREEM /&gt;
          </div>
          <div className="flex gap-2 md:gap-8 flex-wrap justify-end">
            {['about', 'experience', 'education', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-xs md:text-sm text-green-400 hover:text-green-200 uppercase tracking-widest transition-colors duration-300 hover:glow flex-shrink-0"
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
          <div className="absolute top-10 left-10 w-32 md:w-64 h-32 md:h-64 border-2 border-green-400/10 rotate-45 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 md:w-96 h-48 md:h-96 border-2 border-green-400/5 rounded-full animate-pulse" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="mb-8 animate-pulse">
            <span className="text-green-400/60">&gt; _</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-4 glow">
            KAREEM
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-green-300">
            MOKHTAR
          </h2>
          <p className="text-lg md:text-2xl text-green-400 mb-3 md:mb-4">Senior Software Engineer @ Meta</p>
          <p className="text-sm md:text-lg text-green-400/80 mb-8 md:mb-12 max-w-2xl mx-auto">
            Building scalable systems. Solving complex problems. Crafting elegant code.
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-200 uppercase text-xs md:text-sm tracking-wider transition-all duration-300 hover:glow border border-green-400/50 px-4 md:px-6 py-2 md:py-3 hover:bg-green-400/10"
          >
            Explore <ChevronDown className="w-4 md:w-5 h-4 md:h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={(el) => { if (el) sectionRefs.current['about'] = el; }} className="relative py-16 md:py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-16 text-green-300 glow">
            &gt; ABOUT
          </h2>
          <div className="space-y-4 md:space-y-6">
            <AnimatedLine
              text="Experienced Software Engineer with a demonstrated history of working in the computer software industry. Currently Senior Software Engineer at Meta, building scalable systems and solving complex problems."
              index={0}
              isVisible={isSectionVisible('about')}
            />
            <AnimatedLine
              text="Specialized in backend systems, full-stack development, and competitive programming. Previously led teams at Bleenco, conducted AI research at DFKI, and competed in ACM programming contests."
              index={1}
              isVisible={isSectionVisible('about')}
            />
            <AnimatedLine
              text="Passionate about creating elegant solutions, mentoring engineers, and building products that impact millions of users."
              index={2}
              isVisible={isSectionVisible('about')}
            />
            <div className="flex gap-4 pt-4 md:pt-6">
              <a href="mailto:kareem@example.com" className="text-green-400 hover:text-green-200 hover:glow transition-colors">
                <Mail className="w-5 md:w-6 h-5 md:h-6" />
              </a>
              <a href="https://linkedin.com/in/kareem-mokhtar" className="text-green-400 hover:text-green-200 hover:glow transition-colors">
                <Linkedin className="w-5 md:w-6 h-5 md:h-6" />
              </a>
              <a href="https://github.com" className="text-green-400 hover:text-green-200 hover:glow transition-colors">
                <Github className="w-5 md:w-6 h-5 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <TimelineSection items={professionalExperience} title="PROFESSIONAL EXPERIENCE" id="experience" />

      {/* Volunteer Experience */}
      <TimelineSection items={volunteerExperience} title="VOLUNTEER EXPERIENCE" id="volunteer" />

      {/* Teaching Experience */}
      <TimelineSection items={teachingExperience} title="TEACHING EXPERIENCE" id="teaching" />

      {/* Education Section */}
      <section id="education" ref={(el) => { if (el) sectionRefs.current['education'] = el; }} className="relative py-16 md:py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-green-300 glow">
            &gt; EDUCATION
          </h2>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1.5 md:left-2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-green-400 to-green-400/30" />
            
            <div className="space-y-12 md:space-y-16 pl-8 md:pl-12">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  id={`edu-${idx}`}
                  className="relative transition-all duration-1000 pt-2 md:pt-3"
                  style={{
                    opacity: isSectionVisible('education') ? 1 : 0,
                    transform: isSectionVisible('education') ? 'translateY(0px)' : 'translateY(20px)',
                    transitionDelay: `${idx * 0.1}s`
                  }}
                >
                  {/* Date badge - positioned just above the item, closer */}
                  <div className="absolute -top-5 md:-top-6 left-0 text-xs md:text-sm text-green-300 whitespace-nowrap font-mono glow">
                    {edu.startDate} — {edu.endDate}
                  </div>

                  {/* Dot on timeline - perfectly centered on the line */}
                  <div className="absolute -left-3.5 md:-left-4.5 -top-4 md:-top-5 w-3 md:w-4 h-3 md:h-4 rounded-full bg-green-400 glow border-2 border-black" />

                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-green-300 mb-1 md:mb-2 break-words">{edu.degree}</h3>
                    <p className="text-base md:text-lg text-green-400 mb-1 md:mb-2 break-words">{edu.school}</p>
                    <p className="text-xs md:text-sm text-green-400/80 mb-2 md:mb-3">{edu.field}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={(el) => { if (el) sectionRefs.current['skills'] = el; }} className="relative py-16 md:py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-green-300 glow">
            &gt; SKILLS
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                id={`skill-${idx}`}
                className="transition-all duration-1000"
                style={{
                  opacity: isSectionVisible('skills') ? 1 : 0,
                  transform: isSectionVisible('skills') ? 'translateY(0px)' : 'translateY(20px)',
                  transitionDelay: `${idx * 0.05}s`
                }}
              >
                <h3 className="text-lg md:text-xl font-bold text-green-300 mb-4 md:mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 md:px-4 py-1 md:py-2 border border-green-400/50 text-xs md:text-sm text-green-400/80 hover:border-green-400 hover:text-green-400 hover:bg-green-400/10 transition-all cursor-default"
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
      <section className="relative py-16 md:py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-green-300 glow">
            &gt; LANGUAGES
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                id={`lang-${idx}`}
                className="border border-green-400/30 p-4 md:p-6 transition-all duration-1000"
                style={{
                  opacity: isSectionVisible('skills') ? 1 : 0,
                  transform: isSectionVisible('skills') ? 'translateY(0px)' : 'translateY(20px)',
                  transitionDelay: `${idx * 0.05}s`
                }}
              >
                <h3 className="text-base md:text-lg font-bold text-green-300 mb-2">{lang.name}</h3>
                <p className="text-sm md:text-base text-green-400/80">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-16 md:py-32 border-b border-green-400/20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-green-300 glow">
            &gt; CERTIFICATIONS
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                id={`cert-${idx}`}
                className="border-l-4 border-green-400 pl-4 md:pl-6 py-3 md:py-4 transition-all duration-1000"
                style={{
                  opacity: isSectionVisible('skills') ? 1 : 0,
                  transform: isSectionVisible('skills') ? 'translateY(0px)' : 'translateY(20px)',
                  transitionDelay: `${idx * 0.05}s`
                }}
              >
                <h3 className="text-base md:text-lg font-bold text-green-300 mb-1">{cert.name}</h3>
                <p className="text-sm md:text-base text-green-400/80">{cert.issuer}</p>
                <p className="text-xs md:text-sm text-green-400/60">Issued {cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-green-300 glow">
            &gt; GET IN TOUCH
          </h2>
          <p className="text-base md:text-lg text-green-400/80 mb-8 md:mb-12 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Let's connect and build something amazing together.
          </p>
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            <a
              href="mailto:kareem@example.com"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-green-400 text-xs md:text-sm text-green-400 hover:bg-green-400/10 hover:text-green-200 transition-all hover:glow"
            >
              <Mail className="w-4 md:w-5 h-4 md:h-5" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/kareem-mokhtar"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-green-400 text-xs md:text-sm text-green-400 hover:bg-green-400/10 hover:text-green-200 transition-all hover:glow"
            >
              <Linkedin className="w-4 md:w-5 h-4 md:h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border border-green-400 text-xs md:text-sm text-green-400 hover:bg-green-400/10 hover:text-green-200 transition-all hover:glow"
            >
              <Github className="w-4 md:w-5 h-4 md:h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
