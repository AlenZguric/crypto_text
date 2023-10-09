import React, { useState, useEffect } from 'react';
import FlagHR from "../../../images/FlagHR.png";
import FlagEN from "../../../images/FlagEN.png";
import "../css/LanguageSelectorStyle.css";

const LanguageSelector = () => {
  // Koristimo useState hook za praćenje trenutnog jezika
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'hr');

  useEffect(() => {
    // Ovdje možete postaviti lokalnu memoriju ili bilo koju drugu metodu za pohranu jezika
    // Spremi trenutni jezik u localStorage
    localStorage.setItem('language', currentLanguage);
    
  }, [currentLanguage]);

  const changeLanguage = (language) => {
    // Ovdje implementirati logiku za promjenu jezika
    // Na primjer, možete ažurirati currentLanguage kad se jezik promijeni
    setCurrentLanguage(language);
    window.location.reload();
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('hr')} className={currentLanguage === 'hr' ? 'active' : ''}>
        <img src={FlagHR} alt="Hrvatski" />
      </button>
      <button onClick={() => changeLanguage('en')} className={currentLanguage === 'en' ? 'active' : ''}>
        <img src={FlagEN} alt="Engleski" />
      </button>
    </div>
  );
};

export default LanguageSelector;
