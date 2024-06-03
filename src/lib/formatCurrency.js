
// formatCurrency.js
// This utility file includes a function to format numbers as currency. It's used in the PropertyCard component
// to display property prices in a user-friendly format. This function takes a number and returns it as a string
// formatted in USD currency style.

/**
 * Formats a number into a currency string.
 * @param {number} amount - The amount to format.
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}
