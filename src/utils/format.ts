
/* Add spaces for credit card */
export const formatNumber = (num: string): string => num?.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();

/* Mask credit card number */
export const mask = (card: string): string => {
    const masked = card.slice(4, -2).replace(/[0-9]/g, "#");
    return `${card.slice(0, 4)} ${masked}${card.slice(-2)}`;
};