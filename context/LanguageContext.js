'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import en from '@/lib/translations/en';
import si from '@/lib/translations/si';
import de from '@/lib/translations/de';

const translations = { en, si, de };

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

function getNestedValue(obj, key) {
  return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sankassapura-lang');
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('sankassapura-lang', lang);
    }
  };

  const t = (key) => {
    const value = getNestedValue(translations[language], key);
    if (value !== undefined && value !== null) return value;
    // Fallback to English
    return getNestedValue(translations['en'], key) ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
