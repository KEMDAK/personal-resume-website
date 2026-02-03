# Google Analytics Event Tracking Audit

## Current Implementation Status

### ✅ Events Currently Tracked
1. **CV Download** (`download_cv`) - HeroSection.tsx
2. **Section Navigation** (`view_section`) - Navigation.tsx, SectionIndicator.tsx
3. **Contact Button Clicks** (`click_contact`) - ContactButton.tsx
4. **Contact Form Submit** (`contact_form_submit`) - ContactForm.tsx
5. **Contact Form Error** (`contact_form_error`) - ContactForm.tsx

### ❌ Events NOT Currently Tracked
1. **Skill Clicks** (`click_skill`) - Function exists but not used in SkillsSection
2. **Project Clicks** (`click_project`) - Function exists but not used in ProjectsSection
3. **Keyboard Navigation** (`keyboard_navigation`) - Function exists but not used
4. **Theme Toggle** - No tracking function exists
5. **External Link Clicks** - No tracking for timeline company links
6. **Certification Clicks** - No tracking for certification links
7. **Page Scroll Depth** - No scroll tracking

## Missing Implementations

### High Priority
- [ ] Track skill link clicks in SkillsSection
- [ ] Track project link clicks in ProjectsSection
- [ ] Track theme toggle changes
- [ ] Track external link clicks (company links, certification links)

### Medium Priority
- [ ] Track keyboard navigation usage
- [ ] Track scroll depth (25%, 50%, 75%, 100%)

### Low Priority
- [ ] Track time on page
- [ ] Track form field focus events
