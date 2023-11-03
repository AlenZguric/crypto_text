import Data from "./Data.json";


export const translate = (component, key, currentLanguage) => {
  // Provjerite jezik u lokalnom skladištu
  const storedLanguage = localStorage.getItem('language');

  // Ako nije naveden trenutni jezik, koristite jezik iz lokalnog skladišta
  const language = currentLanguage || storedLanguage || 'hr';

  // Dohvati prijevode za određenu komponentu i trenutni jezik
  const translations = Data[component]?.[language];

  // Ako nema prijevoda za navedeni ključ, koristi ključ kao tekst
  const translatedText = translations?.[key] || `No translation for "${key}"`;

  return translatedText;
};

