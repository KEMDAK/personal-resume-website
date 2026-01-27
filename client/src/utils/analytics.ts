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
 */
export function trackCVDownload(): void {
  trackEvent('download_cv', {
    content_type: 'pdf',
    item_id: 'kareem_mokhtar_resume'
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
 */
export function trackProjectClick(projectName: string): void {
  trackEvent('click_project', {
    project_name: projectName
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
 */
export function trackKeyboardNavigation(key: string): void {
  trackEvent('keyboard_navigation', {
    key_pressed: key
  });
}
