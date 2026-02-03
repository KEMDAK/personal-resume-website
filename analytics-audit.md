# Google Analytics Event Tracking Audit

## Summary

All website interactions are now tracked with Google Analytics 4 (GA4). The implementation uses a centralized analytics utility that safely handles events even if GA4 is not loaded.

## Events Tracked

| Event Name | Component | Parameters | Description |
|------------|-----------|------------|-------------|
| `download_cv` | HeroSection | `content_type`, `item_id`, `cv_theme` | CV download button click |
| `view_section` | Navigation, SectionIndicator | `section_name` | Section navigation |
| `click_contact` | ContactButton | `contact_method` | Email, LinkedIn, GitHub clicks |
| `click_skill` | SkillGroup | `skill_name`, `skill_category` | Skill link clicks |
| `click_project` | ProjectCard | `project_name`, `link_type` | Project view link clicks |
| `click_external_link` | TimelineItem | `link_url`, `link_text`, `link_context` | Company/organization links |
| `click_certification` | CertificationCard | `certification_name`, `certification_provider` | Certification issuer links |
| `theme_toggle` | ThemeToggle | `new_theme`, `previous_theme` | Theme switch events |
| `contact_form` | ContactForm | `form_action`, `field_name` | Form submit success/error |

## Additional Tracking Functions Available

These functions are defined in `analytics.ts` and can be used for future enhancements:

- `trackScrollDepth(depth)` - Track scroll depth milestones (25%, 50%, 75%, 100%)
- `trackTimelineExpand(itemTitle, company)` - Track timeline item expansion
- `trackKeyboardNavigation(key, action)` - Track keyboard navigation usage

## Implementation Details

### Analytics Utility (`client/src/utils/analytics.ts`)

The analytics utility provides:
- Type-safe tracking functions
- Safe handling when GA4 is not loaded
- Consistent event naming and parameter structure
- Global TypeScript declarations for `window.gtag`

### Components Updated

1. **HeroSection** - CV download with theme tracking
2. **SkillGroup** - Skill link click tracking
3. **ProjectCard** - Project link click tracking
4. **ThemeToggle** - Theme change tracking
5. **TimelineItem** - External company link tracking
6. **CertificationCard** - Certification issuer link tracking
7. **ContactForm** - Form submission tracking
8. **Navigation** - Section navigation tracking
9. **SectionIndicator** - Section navigation tracking
10. **ContactButton** - Contact method click tracking

## Google Analytics Configuration

GA4 is configured in `client/index.html` with:
- Measurement ID: `G-XXXXXXXXXX` (configured in production)
- gtag.js loaded asynchronously
- dataLayer initialized before gtag loads

## Testing

Events can be verified using:
1. **Google Analytics Realtime** - View events in real-time
2. **Browser Console** - Check `window.dataLayer` for events
3. **Google Tag Assistant** - Debug tag implementation

## Best Practices Followed

1. All tracking functions are safe to call even if GA4 is not loaded
2. Event names follow GA4 naming conventions (snake_case)
3. Parameters are descriptive and consistent
4. No PII (Personally Identifiable Information) is tracked
5. Events are tracked on user interaction, not page load
