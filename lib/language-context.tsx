'use client';

/**
 * Language Context
 * Re-exports from I18nProvider with Header-compatible API
 */

import { useI18n as useI18nOriginal, LanguageSwitcher as LanguageSwitcherOriginal } from '@/components/I18nProvider';
import type { Locale } from '@/i18n/config';

export interface LanguageContextType {
  language: Locale;
  toggleLanguage: () => void;
  setLanguage: (lang: Locale) => void;
  t: (key: string) => string | string[];
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export function useLanguage(): LanguageContextType {
  const { locale, setLocale, t } = useI18nOriginal();
  
  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'zh' : 'en');
  };
  
  const setLanguage = (lang: Locale) => {
    setLocale(lang);
  };
  
  return {
    language: locale,
    toggleLanguage,
    setLanguage,
    t,
    locale,
    setLocale,
  };
}

export { LanguageSwitcherOriginal as LanguageSwitcher };
export type { Locale };

// Re-export I18nProvider as LanguageProvider
export { I18nProvider as LanguageProvider } from '@/components/I18nProvider';
