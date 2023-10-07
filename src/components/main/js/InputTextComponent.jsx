import React, { useState } from 'react';
import ShareCryptedText from './ShareCryptedText';
import symbolMap from './symbolLib';

const InputTextComponent = () => {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setShowResult(false);
  };

  const handleEncrypt = () => {
    // Ovdje koristi symbolMap za šifriranje teksta
    const encrypted = inputText
      .toLowerCase() // Prebacuje tekst u mala slova radi lakšeg mapiranja
      .split('') // Razdvaja tekst na karaktere
      .map((char) => (symbolMap[char] ? symbolMap[char] : char)) // Mapira simbole
      .join(''); // Spaja karaktere nazad

    setEncryptedText(encrypted);
    setShowResult(true);
  };
  const handleKeyPress = (event) => {
    if(event.key === "Enter") {
      handleEncrypt();
    }
  }

  return (
    <div className="input-text-component">
      <div className="title">
        <h3>ŠIFRIRAJ TEXT</h3>
        <article>
          <p>Šifrirajte i zaštitite svoje poruke s lakoćom.</p>
          <p>Osiguravajući privatnost i sigurnost vaše komunikacije.</p>
        </article>
      </div>
      <div className='input-text-area'>
        <textarea
          rows="10"
          cols="40"
          placeholder="Unesite tekst ovdje..."
          color='white'
          value={inputText}
          onChange={handleInputChange}
          className="input-textarea"
          onKeyPress={handleKeyPress}
        ></textarea>
        <div>
          <button onClick={handleEncrypt} className="encrypt-button">
            Šifriraj
          </button>
        </div>
        {showResult && (
          <div className="result-container">
            <span className="result-crypto">{encryptedText}</span>
            <ShareCryptedText encryptedText={encryptedText} />
          </div>
        )}
      </div>
    </div>
  );
 }  
export default InputTextComponent;
