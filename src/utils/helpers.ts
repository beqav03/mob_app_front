import { CURRENCY_SYMBOL } from '../constants/config';

/**
 * Formats a number as a price string (e.g., "$10.50")
 */
export const formatPrice = (price: number): string => {
    return `${CURRENCY_SYMBOL}${price.toFixed(2)}`;
};

/**
 * Validates an email address format
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Generates a random ID
 */
export const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};

/**
 * Formats a date object to a readable string (e.g., "Mon, 12 Oct")
 */
export const formatDate = (date: Date | string): string => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
};

/**
 * Formats a time string or date to a readable time (e.g., "14:30")
 */
export const formatTime = (date: Date | string): string => {
    const d = new Date(date);
    return d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
};

/**
 * Truncates text with ellipsis if it exceeds maxLength
 */
export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
};
