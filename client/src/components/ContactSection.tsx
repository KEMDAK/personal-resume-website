/**
 * ContactSection Component
 * 
 * Contact section with:
 * - Section title
 * - Call-to-action description
 * - Contact action buttons (Email, LinkedIn, GitHub)
 */

import { Mail, Linkedin, Github } from 'lucide-react';
import { ContactButton } from './ContactButton';

/**
 * ContactSection Component
 * 
 * @example
 * <ContactSection />
 */
export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 theme-section-title glow">
          &gt; GET IN TOUCH
        </h2>

        {/* CTA description */}
        <p className="text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto theme-text-foreground" style={{ opacity: 0.8 }}>
          Interested in collaborating or have a project in mind? Let's connect and build something amazing together.
        </p>

        {/* Contact buttons */}
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          <ContactButton
            label="Email Me"
            href="mailto:contact@kareem-mokhtar.com"
            icon={<Mail className="w-4 md:w-5 h-4 md:h-5" />}
          />
          <ContactButton
            label="LinkedIn"
            href="https://linkedin.com/in/kareem-mokhtar"
            icon={<Linkedin className="w-4 md:w-5 h-4 md:h-5" />}
          />
          <ContactButton
            label="GitHub"
            href="https://github.com/KEMDAK"
            icon={<Github className="w-4 md:w-5 h-4 md:h-5" />}
          />
        </div>
      </div>
    </section>
  );
};
