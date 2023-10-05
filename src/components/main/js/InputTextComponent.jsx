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
    // Ovdje koristite symbolMap za šifriranje teksta
    const encrypted = inputText
      .toLowerCase() // Prebacuje tekst u mala slova radi lakšeg mapiranja
      .split('') // Razdvaja tekst na karaktere
      .map((char) => (symbolMap[char] ? symbolMap[char] : char)) // Mapira simbole
      .join(''); // Spaja karaktere nazad

    setEncryptedText(encrypted);

    setShowResult(true);

  };

 

  return (
    <div>
      <h2>Šifriraj text...</h2>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Unesite tekst ovdje..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <button onClick={handleEncrypt}>Šifriraj</button>
      </div>
      {showResult && (
        <div>
         <span className='resultCrypto' aria-readonly>
         {encryptedText}
         <ShareCryptedText encryptedText={encryptedText} />
         </span>
        </div>
      )}
    </div>
  );
      };

export default InputTextComponent;
