// InputCryptoTextComponent.jsx
import React, { useState } from 'react';
import symbolMap from './symbolLib';
import ShareCryptedText from './ShareCryptedText';

const InputCryptoTextComponent = () => {
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (event) => {
    setEncryptedText(event.target.value);
    setShowResult(false);
  };

  const handleDecrypt = () => {
    const decrypted = encryptedText
      .split('') // Razdvajanje šifriranog teksta na karaktere
      .map((char) => {
        // Pronađite odgovarajuće slovo za svaki simbol
        const originalChar = Object.keys(symbolMap).find(
          (key) => symbolMap[key] === char
        );
        return originalChar || char; // Ako nema odgovarajućeg slova, zadržite simbol
      })
      .join(''); // Spajanje karaktera nazad

    setDecryptedText(decrypted);

    setShowResult(true);
  };

  return (
    <div>
      <h2>Dešifriraj text...</h2>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Unesite šifrirani tekst ovdje..."
          value={encryptedText}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <button onClick={handleDecrypt}>Dešifriraj</button>
      </div>
      {showResult && (
        <div>
          <span className='resultDecrypto' aria-readonly>
          {decryptedText}
          <ShareCryptedText decryptedText={decryptedText} />
          </span>
        </div>
      )}
    </div>
  );
};

export default InputCryptoTextComponent;
