/**
 * Analytics Utility
 * 
 * Provides helper functions for tracking events with Google Analytics 4.
 * All tracking functions are safe to call even if GA4 is not loaded.
 */

// Declare gtag on window for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Track a custom event in Google Analytics 4
 * @param eventName - The name of the event (e.g., 'download_cv', 'click_skill')
 * @param eventParams - Optional parameters to include with the event
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track when a user downloads the CV
 * @param theme - The current theme (dark/light) to track which CV version
 */
export function trackCVDownload(theme?: string): void {
  trackEvent('download_cv', {
    content_type: 'pdf',
    item_id: 'kareem_mokhtar_resume',
    cv_theme: theme || 'unknown'
  });
}

/**
 * Track when a user clicks on a skill link
 * @param skillName - The name of the skill clicked
 * @param category - The skill category (e.g., 'backend', 'frontend')
 */
export function trackSkillClick(skillName: string, category: string): void {
  trackEvent('click_skill', {
    skill_name: skillName,
    skill_category: category
  });
}

/**
 * Track when a user clicks on a project link
 * @param projectName - The name of the project clicked
 * @param linkType - The type of link (e.g., 'github', 'demo', 'view')
 */
export function trackProjectClick(projectName: string, linkType?: string): void {
  trackEvent('click_project', {
    project_name: projectName,
    link_type: linkType || 'view'
  });
}

/**
 * Track when a user clicks on a contact method
 * @param method - The contact method (e.g., 'email', 'linkedin', 'github')
 */
export function trackContactClick(method: string): void {
  trackEvent('click_contact', {
    contact_method: method
  });
}

/**
 * Track when a user navigates to a section
 * @param sectionName - The name of the section navigated to
 */
export function trackSectionView(sectionName: string): void {
  trackEvent('view_section', {
    section_name: sectionName
  });
}

/**
 * Track when a user uses keyboard navigation
 * @param key - The key pressed
 * @param action - The action performed (e.g., 'navigate_section', 'toggle_theme')
 */
export function trackKeyboardNavigation(key: string, action?: string): void {
  trackEvent('keyboard_navigation', {
    key_pressed: key,
    action: action || 'navigation'
  });
}

/**
 * Track when a user toggles the theme
 * @param newTheme - The theme switched to (e.g., 'dark', 'light', 'system')
 * @param previousTheme - The theme switched from
 */
export function trackThemeToggle(newTheme: string, previousTheme?: string): void {
  trackEvent('theme_toggle', {
    new_theme: newTheme,
    previous_theme: previousTheme || 'unknown'
  });
}

/**
 * Track when a user clicks an external link
 * @param linkUrl - The URL of the external link
 * @param linkText - The text/label of the link
 * @param context - Where the link was clicked (e.g., 'timeline', 'footer', 'skills')
 */
export function trackExternalLinkClick(linkUrl: string, linkText: string, context: string): void {
  trackEvent('click_external_link', {
    link_url: linkUrl,
    link_text: linkText,
    link_context: context
  });
}

/**
 * Track when a user clicks on a certification link
 * @param certificationName - The name of the certification
 * @param provider - The certification provider (e.g., 'Udacity', 'ACM ICPC')
 */
export function trackCertificationClick(certificationName: string, provider: string): void {
  trackEvent('click_certification', {
    certification_name: certificationName,
    certification_provider: provider
  });
}

/**
 * Track contact form interactions
 * @param action - The form action (e.g., 'submit_success', 'submit_error', 'field_focus')
 * @param fieldName - Optional field name for field-specific events
 */
export function trackContactForm(action: string, fieldName?: string): void {
  trackEvent('contact_form', {
    form_action: action,
    field_name: fieldName || 'none'
  });
}

/**
 * Track scroll depth milestones
 * @param depth - The scroll depth percentage (25, 50, 75, 100)
 */
export function trackScrollDepth(depth: number): void {
  trackEvent('scroll_depth', {
    depth_percentage: depth
  });
}

/**
 * Track timeline/experience item expansion
 * @param itemTitle - The title of the timeline item
 * @param company - The company name
 */
export function trackTimelineExpand(itemTitle: string, company: string): void {
  trackEvent('timeline_expand', {
    item_title: itemTitle,
    company: company
  });
}
