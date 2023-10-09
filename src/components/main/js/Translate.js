import Data from "../../../translation/Data.json";


export const translate = (key, currentLanguage) => {
  // Provjerite jezik u lokalnom skladištu
  const storedLanguage = localStorage.getItem('language');

  // Ako nije naveden trenutni jezik, koristite jezik iz lokalnog skladišta
  const language = currentLanguage || storedLanguage || 'hr';

  // Dohvati prijevode za trenutni jezik
  const translations = Data[language];

  // Ako nema prijevoda za navedeni ključ, koristi ključ kao tekst
  const translatedText = translations?.[key] || "nema prijevoda";

  return translatedText;
};


