// InputCryptoTextComponent.jsx
import React, { useState } from 'react';
import symbolMap from './symbolLib';

const InputCryptoTextComponent = () => {
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleInputChange = (event) => {
    setEncryptedText(event.target.value);
  };

  const handleDecrypt = () => {
    // Obrnite mapiranje simbola kako biste dobili originalni tekst
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
  };

  return (
    <div>
      <h1>Decrypt CryptoText</h1>
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
      {decryptedText && (
        <div>
          <textarea
            rows="4"
            cols="50"
            placeholder="Originalni tekst će se prikazati ovdje..."
            value={decryptedText}
            readOnly
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default InputCryptoTextComponent;
