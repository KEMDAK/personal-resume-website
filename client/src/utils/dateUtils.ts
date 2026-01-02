/**
 * Date Utility Functions
 * 
 * This module provides utility functions for working with dates, including:
 * - Parsing date strings in "Mon YYYY" format
 * - Calculating duration between two dates
 * - Formatting duration as human-readable strings
 */

/**
 * Map of month abbreviations to their numeric values (0-indexed)
 * Used to parse date strings like "Jun 2024"
 */
const MONTH_MAP: { [key: string]: number } = {
  'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
  'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
};

/**
 * Parses a date string in "Mon YYYY" format to a Date object
 * 
 * @param dateStr - Date string in format "Mon YYYY" (e.g., "Jun 2024")
 * @returns Date object representing the first day of that month/year
 * @throws Will return a default date if parsing fails
 * 
 * @example
 * const date = parseDate("Jun 2024"); // June 1, 2024
 */
export const parseDate = (dateStr: string): Date => {
  const [month, year] = dateStr.trim().split(' ');
  return new Date(parseInt(year), MONTH_MAP[month] || 0, 1);
};

/**
 * Calculates the duration between two dates and returns a human-readable string
 * 
 * Handles various cases:
 * - Less than 1 month: "Less than 1 month"
 * - Only months: "6 mos"
 * - Only years: "2 yrs"
 * - Both: "2 yrs 6 mos"
 * 
 * @param startDate - Start date in format "Mon YYYY" (e.g., "Jun 2024")
 * @param endDate - End date in format "Mon YYYY" or the string "Present"
 * @returns Human-readable duration string
 * 
 * @example
 * calculateDuration("Jun 2024", "Present"); // "1 yr 7 mos"
 * calculateDuration("Jan 2023", "Jun 2024"); // "1 yr 5 mos"
 * calculateDuration("Jul 2024", "Aug 2024"); // "1 mo"
 */
export const calculateDuration = (startDate: string, endDate: string): string => {
  try {
    // Parse the start date
    const start = parseDate(startDate);
    
    // Parse the end date (or use current date if "Present")
    const end = endDate.toLowerCase() === 'present' ? new Date() : parseDate(endDate);
    
    // Calculate year and month differences
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    
    // Adjust if months is negative (e.g., Jan 2024 to Dec 2023 = -1 month)
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Format the duration string based on years and months
    if (years === 0 && months === 0) return 'Less than 1 month';
    if (years === 0) return `${months} mo${months > 1 ? 's' : ''}`;
    if (months === 0) return `${years} yr${years > 1 ? 's' : ''}`;
    return `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}`;
  } catch {
    // Return empty string if parsing fails
    return '';
  }
};
