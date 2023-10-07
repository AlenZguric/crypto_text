import React, { useState, useEffect } from 'react';
import FlagHR from "../../../images/FlagHR.png";
import FlagEN from "../../../images/FlagEN.png";
import "../css/LanguageSelectorStyle.css";

const LanguageSelector = () => {
  // Koristimo useState hook za praćenje trenutnog jezika
  const [currentLanguage, setCurrentLanguage] = useState('hr');

  useEffect(() => {
    // Ovdje možete postaviti lokalnu memoriju ili bilo koju drugu metodu za pohranu jezika
    // Primjer spremanja u localStorage:
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (language) => {
    // Ovdje možete implementirati logiku za promjenu jezika
    // Na primjer, možete ažurirati currentLanguage kad se jezik promijeni
    setCurrentLanguage(language);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('hr')}>
        <img src={FlagHR} alt="Hrvatski" />
      </button>
      <button onClick={() => changeLanguage('en')}>
        <img src={FlagEN} alt="Engleski" />
      </button>
    </div>
  );
};

export default LanguageSelector;
