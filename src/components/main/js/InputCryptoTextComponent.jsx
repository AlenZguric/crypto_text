import React, { useState } from "react";
import symbolMap from "./symbolLib";
import "../style/InputCryptoTextComponentStyle.css";

const InputCryptoTextComponent = () => {
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setEncryptedText(event.target.value);
    setShowResult(false);
    setErrorMessage("");
  };

  const handleDecrypt = () => {
    if (!encryptedText) {
      setErrorMessage("* Unesite šifrirani text *"); // Postavljanje obavijesti o pogrešci
      return;
    }
    const decrypted = encryptedText
      .split("") // Razdvajanje šifriranog teksta na karaktere
      .map((char) => {
        // Pronađite odgovarajuće slovo za svaki simbol
        const originalChar = Object.keys(symbolMap).find(
          (key) => symbolMap[key] === char
        );
        return originalChar || char; // Ako nema odgovarajućeg slova, zadržite simbol
      })
      .join(""); // Spajanje karaktera nazad

    setDecryptedText(decrypted);

    setShowResult(true);
  };

  return (
    <div className="input-text-component">
      <div className="title">
        <h3>Dešifriraj text...</h3>
      </div>
      <div className="input-Cryptotext-area">
        <textarea
          className="input-textarea"
          placeholder="Unesite šifrirani tekst ovdje..."
          value={encryptedText}
          onChange={handleInputChange}
        ></textarea>
        {errorMessage && <p className="error-message ">{errorMessage}</p>}

        <div className="textarea_btn">
          <button onClick={handleDecrypt} className="encrypt-button">
            Dešifriraj
          </button>
        </div>
        {showResult && (
          <div className="result-container">
            <p className="resultDecrypto">{decryptedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCryptoTextComponent;
