/**
 * Home Page Component
 * 
 * Main page that orchestrates all resume sections:
 * - Navigation
 * - Hero section
 * - About section
 * - Professional, volunteer, and teaching experience
 * - Education
 * - Skills, languages, certifications
 * - Contact section
 * 
 * Manages scroll-based visibility for animations across all sections.
 */

import { useScrollVisibility } from '@/utils/scrollUtils';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { TimelineSection } from '@/components/TimelineSection';
import { SkillsSection } from '@/components/SkillsSection';
import { LanguagesSection } from '@/components/LanguagesSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';
import { ProjectsSection } from '@/components/ProjectsSection';

// Import resume data
import {
  professionalExperience,
  volunteerExperience,
  teachingExperience,
  education,
  skills,
  languages,
  certifications
} from '@/data/resume';
import { projects } from '@/data/projects';

/**
 * Home Component
 * 
 * Renders the complete resume website with all sections.
 * Uses scroll visibility hook to trigger animations when sections come into view.
 */
export default function Home() {
  // Use scroll visibility hook to track which sections are visible
  const {
    sectionRefs,
    isSectionVisible,
    scrollToSection
  } = useScrollVisibility();

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-x-hidden">
      {/* Fixed Navigation Bar */}
      <Navigation onNavigate={scrollToSection} />

      {/* Hero Section */}
      <HeroSection onExplore={() => scrollToSection('about')} />

      {/* About Section */}
      <AboutSection
        isVisible={isSectionVisible('about')}
        onRegisterRef={(el) => {
          if (el) sectionRefs.current['about'] = el;
        }}
      />

      {/* Professional Experience Timeline */}
      <TimelineSection
        items={professionalExperience}
        title="PROFESSIONAL EXPERIENCE"
        id="experience"
        onRegisterRef={(el) => {
          if (el) sectionRefs.current['experience'] = el;
        }}
        isSectionVisible={isSectionVisible}
      />

      {/* Volunteer Experience Timeline */}
      <TimelineSection
        items={volunteerExperience}
        title="VOLUNTEER EXPERIENCE"
        id="volunteer"
        onRegisterRef={(el) => {
          if (el) sectionRefs.current['volunteer'] = el;
        }}
        isSectionVisible={isSectionVisible}
      />

      {/* Teaching Experience Timeline */}
      <TimelineSection
        items={teachingExperience}
        title="TEACHING EXPERIENCE"
        id="teaching"
        onRegisterRef={(el) => {
          if (el) sectionRefs.current['teaching'] = el;
        }}
        isSectionVisible={isSectionVisible}
      />

      {/* Education Timeline */}
      <section
        id="education"
        ref={(el) => {
          if (el) sectionRefs.current['education'] = el;
        }}
        className="relative py-16 md:py-32 border-b border-green-400/20"
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Section title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-green-300 glow">
            &gt; EDUCATION
          </h2>

          {/* Timeline container */}
          <div className="relative">
            {/* Vertical timeline line with gradient - extended to top to middle of first dot */}
            <div className="absolute left-1.5 md:left-2 -top-2 md:-top-2.5 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-green-400 to-green-400/30" />

            {/* Education items */}
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
                  {/* Date badge with glow */}
                  <div
                    className="absolute -top-5 md:-top-6 left-0 text-xs md:text-sm text-green-300 whitespace-nowrap font-mono"
                    style={{ textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00' }}
                  >
                    {edu.startDate} — {edu.endDate}
                  </div>

                  {/* Dot on timeline - positioned to overlap with vertical line */}
                  <div
                    className="absolute w-3 md:w-4 h-3 md:h-4 rounded-full bg-green-400 border-2 border-black"
                    style={{
                      boxShadow: '0 0 15px #00ff00, 0 0 30px #00ff00, inset 0 0 10px #00ff00',
                      left: '-31px',
                      top: '-19px'
                    }}
                  />

                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-green-300 mb-1 md:mb-2 break-words">
                      {edu.degree}
                    </h3>
                    <p className="text-base md:text-lg text-green-400 mb-1 md:mb-2 break-words">
                      {edu.schoolUrl ? (
                        <a 
                          href={edu.schoolUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-green-300 hover:glow transition-colors"
                        >
                          {edu.school}
                        </a>
                      ) : (
                        edu.school
                      )}
                    </p>
                    <p className="text-xs md:text-sm text-green-400/80 mb-2 md:mb-3">
                      {edu.field}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={(el) => {
          if (el) sectionRefs.current['projects'] = el;
        }}
        className="border-b border-green-400/20"
      >
        <ProjectsSection
          projects={projects}
          isVisible={isSectionVisible('projects')}
        />
      </section>

      {/* Skills Section */}
      <SkillsSection
        skills={skills}
        isVisible={isSectionVisible('skills')}
        onRegisterRef={(el) => {
          if (el) sectionRefs.current['skills'] = el;
        }}
      />

      {/* Languages Section */}
      <LanguagesSection
        languages={languages}
        isVisible={isSectionVisible('skills')}
      />

      {/* Certifications Section */}
      <CertificationsSection
        certifications={certifications}
        isVisible={isSectionVisible('skills')}
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
