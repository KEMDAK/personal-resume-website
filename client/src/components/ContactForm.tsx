/**
 * ContactForm Component
 * 
 * Contact form using Web3Forms for backend-less email delivery.
 * Features:
 * - Theme-aware styling (dark/light mode)
 * - Form validation
 * - Loading and success states
 * - Accessible form fields
 */

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

/**
 * ContactForm Component
 * 
 * @example
 * <ContactForm />
 */
export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'loading', message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState({
          status: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        form.reset();
        
        // Track successful form submission
        trackEvent('contact_form_submit', 'contact', 'form_success');
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
      
      // Track form error
      trackEvent('contact_form_error', 'contact', 'form_error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto text-left"
      aria-label="Contact form"
    >
      {/* Web3Forms access key */}
      <input
        type="hidden"
        name="access_key"
        value="17db9f9c-d304-472a-8af4-fd417209101e"
      />
      
      {/* Custom subject line */}
      <input
        type="hidden"
        name="subject"
        value="New Contact from kareem-mokhtar.com"
      />
      
      {/* Honeypot for spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
      />

      {/* Name field */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 theme-text-primary"
        >
          &gt; NAME
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Doe"
          className="w-full px-4 py-3 border rounded-sm theme-text-foreground focus:outline-none focus:ring-2"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border-muted)',
            transition: `
              border-color var(--transition-hover),
              box-shadow var(--transition-hover)
            `,
          }}
          aria-required="true"
        />
      </div>

      {/* Email field */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 theme-text-primary"
        >
          &gt; EMAIL
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john@example.com"
          className="w-full px-4 py-3 border rounded-sm theme-text-foreground focus:outline-none focus:ring-2"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border-muted)',
            transition: `
              border-color var(--transition-hover),
              box-shadow var(--transition-hover)
            `,
          }}
          aria-required="true"
        />
      </div>

      {/* Message field */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 theme-text-primary"
        >
          &gt; MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Your message here..."
          className="w-full px-4 py-3 border rounded-sm theme-text-foreground focus:outline-none focus:ring-2 resize-none"
          style={{
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border-muted)',
            transition: `
              border-color var(--transition-hover),
              box-shadow var(--transition-hover)
            `,
          }}
          aria-required="true"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={formState.status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 uppercase text-sm tracking-wider font-medium px-6 py-3 border rounded-sm theme-text-primary theme-border hover:glow focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          borderColor: 'var(--border-muted)',
          transition: `
            color var(--transition-hover),
            background-color var(--transition-hover),
            border-color var(--transition-hover)
          `,
        }}
        aria-label={formState.status === 'loading' ? 'Sending message...' : 'Send message'}
      >
        {formState.status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      {/* Status messages */}
      {formState.status === 'success' && (
        <div
          className="mt-4 p-4 rounded-sm flex items-center gap-2"
          style={{
            backgroundColor: 'var(--accent)',
            color: 'var(--accent-foreground)',
          }}
          role="alert"
          aria-live="polite"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span>{formState.message}</span>
        </div>
      )}

      {formState.status === 'error' && (
        <div
          className="mt-4 p-4 rounded-sm flex items-center gap-2"
          style={{
            backgroundColor: 'var(--destructive)',
            color: 'var(--destructive-foreground)',
          }}
          role="alert"
          aria-live="polite"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span>{formState.message}</span>
        </div>
      )}
    </form>
  );
};
