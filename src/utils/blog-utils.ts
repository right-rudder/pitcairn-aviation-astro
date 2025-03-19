/**
 * Utility functions for blog posts
 */

/**
 * Calculates the estimated reading time for content
 * @param content - The text content to calculate reading time for
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(
  content: string,
  wordsPerMinute = 200,
): number {
  // Remove HTML tags if present
  const text = content.replace(/<\/?[^>]+(>|$)/g, "");

  // Count words (split by spaces and filter empty strings)
  const words = text.split(/\s+/).filter(Boolean).length;

  // Calculate reading time and round up to nearest minute
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

/**
 * Extracts a short excerpt from content
 * @param content - The content to extract excerpt from
 * @param maxLength - Maximum length of excerpt
 * @returns Short excerpt
 */
export function getExcerpt(content: string, maxLength = 160): string {
  // Remove HTML tags
  const text = content.replace(/<\/?[^>]+(>|$)/g, "");

  // Return truncated text with ellipsis if needed
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength).trim() + "...";
}

/**
 * Creates a properly slugified URL-friendly string
 * @param text - The text to slugify
 * @returns URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-"); // Replace multiple hyphens with single hyphen
}
