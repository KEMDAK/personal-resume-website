/**
 * ThemeToggle Component
 * 
 * A floating button that toggles between light and dark themes.
 * Positioned on the left bottom corner, similar to BackToTop button.
 * Shows a sun icon in dark mode (click to switch to light)
 * Shows a moon icon in light mode (click to switch to dark)
 */

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * ThemeToggle Component
 * 
 * @example
 * <ThemeToggle />
 */
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 p-3 border rounded-full shadow-lg hover:glow focus:outline-none focus:ring-2 focus:ring-offset-2 theme-text-primary theme-hover-bg"
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--border-muted)',
        outlineColor: 'var(--primary)',
        transition: `
          border-color var(--transition-hover),
          color var(--transition-hover),
          background-color var(--transition-theme),
          box-shadow var(--transition-hover)
        `
      }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Show sun in dark mode (to switch to light), moon in light mode (to switch to dark) */}
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
};
