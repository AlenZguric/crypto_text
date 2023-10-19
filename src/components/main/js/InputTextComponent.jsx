import React, { useState } from 'react';
import ShareCryptedText from './ShareCryptedText';
import symbolMap from './symbolLib';

const InputTextComponent = () => {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setShowResult(false);
    setErrorMessage('');
  };

  const handleEncrypt = () => {
    // Provjera je li unesen tekst
    if (!inputText) {
      setErrorMessage('* Unesite text *'); // Postavljanje obavijesti o pogrešci
      return;
    }

    // Ovdje koristi symbolMap za šifriranje teksta
    const encrypted = inputText
      .toLowerCase() // Prebacuje tekst u mala slova radi lakšeg mapiranja
      .split('') // Razdvaja tekst na karaktere
      .map((char) => (symbolMap[char] ? symbolMap[char] : char)) // Mapira simbole
      .join(''); // Spaja karaktere nazad

    setEncryptedText(encrypted);
    setShowResult(true);
    setErrorMessage(''); // Postavljanje prazne obavijesti nakon uspješnog šifriranja
    setInputText(''); // Isprazni textarea nakon šifriranja
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleEncrypt();
    }
  };

  return (
    <div className="input-text-component">
      <div className="title">
        <h3>Šifriraj text...</h3>
        
       
      </div>
      <div className="input-text-area">
        <textarea
          
          placeholder="Unesite tekst ovdje..."
          value={inputText}
          onChange={handleInputChange}
          className="input-textarea"
          onKeyPress={handleKeyPress}
        ></textarea>
        {errorMessage && <p className="error-message ">{errorMessage}</p>}
        <div className='textarea_btn'>
          <button onClick={handleEncrypt}
                  onKeyPress={handleKeyPress}
                   className="encrypt-button">
            Šifriraj
          </button>
        </div>
        {showResult && (
          <div className="result-container">
            <textarea className="result-crypto" >
              {encryptedText}
              </textarea>
            <ShareCryptedText encryptedText={encryptedText} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputTextComponent;
