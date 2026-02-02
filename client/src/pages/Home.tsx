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
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { TimelineSection } from '@/components/TimelineSection';
import { SkillsSection } from '@/components/SkillsSection';
import { LanguagesSection } from '@/components/LanguagesSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';
import { BackToTop } from '@/components/BackToTop';
import { SectionIndicator } from '@/components/SectionIndicator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExternalLink } from 'lucide-react';

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

  // Enable keyboard navigation (Arrow keys, J/K, Home/End, 1-7)
  useKeyboardNavigation();

  return (
    <div className="theme-page">
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
        className="theme-section"
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Section title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 theme-section-title glow">
            &gt; EDUCATION
          </h2>

          {/* Timeline container */}
          <div className="relative">
            {/* Vertical timeline line with gradient - extended to top to middle of first dot */}
            <div className="absolute left-1.5 md:left-2 -top-2 md:-top-2.5 bottom-0 w-0.5 md:w-1 theme-timeline-line" />

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
                  <div className="absolute -top-5 md:-top-6 left-0 text-xs md:text-sm whitespace-nowrap font-mono theme-date-badge">
                    {edu.startDate} — {edu.endDate}
                  </div>

                  {/* Dot on timeline - positioned to overlap with vertical line */}
                  <div className="absolute w-3 md:w-4 h-3 md:h-4 rounded-full -left-[31px] md:-left-[46px] -top-[19px] md:-top-[22px] theme-timeline-dot" />

                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 break-words theme-section-title">
                      {edu.degree}
                    </h3>
                    <p className="text-base md:text-lg mb-1 md:mb-2 break-words theme-text-primary">
                      {edu.schoolUrl ? (
                        <a 
                          href={edu.schoolUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:opacity-80 hover:glow transition-colors"
                        >
                          {edu.school}
                          <ExternalLink size={14} className="flex-shrink-0" />
                        </a>
                      ) : (
                        edu.school
                      )}
                    </p>
                    <p className="text-xs md:text-sm mb-2 md:mb-3 theme-text-subtle">
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
        className="theme-section"
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

      {/* Back to Top Button */}
      <BackToTop />

      {/* Theme Toggle Button (floating, bottom left) */}
      <ThemeToggle />

      {/* Section Progress Indicator */}
      <SectionIndicator />
    </div>
  );
}
