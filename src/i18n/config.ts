export type Locale = (typeof locales)[number];

export const locales = ['fa', 'en'] as const;
export const defaultLocale: Locale = 'fa';