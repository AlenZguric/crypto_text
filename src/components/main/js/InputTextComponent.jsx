import React, { useState } from 'react';

const InputTextComponent = () => {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEncrypt = () => {
    const symbolMap = {
      a: 'Ⓞ',
      b: 'Ⓟ',
      c: 'Ⓠ',
      č: 'Ⓢ',
      ć: 'Ⓣ',
      d: 'Ⓤ',
      đ: 'Ⓥ',
      e: 'Ⓦ',
      f: 'Ⓧ',
      g: 'Ⓨ',
      h: 'Ⓩ',
      i: 'ⓐ',
      j: 'ⓑ',
      k: 'ⓒ',
      l: 'ⓓ',
      lj: 'ⓔ',
      m: 'ⓕ',
      n: 'ⓖ',
      nj: 'ⓗ',
      o: 'ⓘ',
      p: 'ⓙ',
      r: 'ⓚ',
      s: 'ⓛ',
      š: 'ⓜ',
      t: 'ⓝ',
      u: 'ⓞ',
      v: 'ⓟ',
      w: '&',
      x: '%',
      y: '$',
      z: 'ⓠ',
      ž: 'ⓡ',
      " ": '§',
      0: '•',
      1: '○',
      2: '▪',
      3: '▲',
      4: '★',
      5: '♦',
      6: '♣',
      7: '♥',
      8: '♠',
      9: '♣',
    };
    

    const replaceWithSymbols = (text) => {
      const textArray = text.split('');
      const encryptedArray = textArray.map((char) => {
        if (char.toLowerCase() in symbolMap) {
          return symbolMap[char.toLowerCase()];
        }
        return char;
      });
      return encryptedArray.join('');
    };

    const encrypted = replaceWithSymbols(inputText);
    setEncryptedText(encrypted);
  };

  return (
    <div>
      <h1>CryptoText</h1>
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
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Šifrirani tekst će se prikazati ovdje..."
          value={encryptedText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default InputTextComponent;
