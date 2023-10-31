import React, { useState, useEffect } from "react";
import symbolMap from "./symbolLib";
import "../../main/style/InputCryptoTextComponentStyle.css";
import moment from "moment";

const InputCryptoTextComponent = () => { // Promijenjeno ime komponente
  const [encryptedText, setEncryptedText] = useState(""); // Promijenjeno ime stanja
  const [decryptedText, setDecryptedText] = useState(""); // Dodano stanje za dešifrirani tekst
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setEncryptedText(event.target.value);
    setShowResult(false);
    setErrorMessage("");
  };

  const handleDecrypt = () => { // Promijenjena funkcija za dešifriranje
    if (!encryptedText) {
      setErrorMessage("* Unesite šifrirani text *");
      return;
    }

    const decrypted = encryptedText
      .split("")
      .map((char) => {
        const originalChar = Object.keys(symbolMap).find(
          (key) => symbolMap[key] === char
        );
        return originalChar || char;
      })
      .join("");

    setDecryptedText(decrypted);
    setShowResult(true);
    setErrorMessage("");
  };

  useEffect(() => { // Promijenjeno ime ključa za lokalno spremanje
    const saveDataToLocalStorage = () => {
      if (showResult && encryptedText && decryptedText) { // Promijenjeno na "decryptedText"
        try {
          const id = moment().format("HHmmssDDMMYYYY");
          const item = {
            id,
            encryptedText, // Promijenjeno na "encryptedText"
            decryptedText, // Dodano "decryptedText"
            timestamp: moment().format("HH:mm:ss DD.MM.YYYY"),
          };

          // Dohvatite postojeće podatke pod ključem "decrypto" // Promijenjeno ime ključa
          const existingData = JSON.parse(localStorage.getItem("decrypto")) || [];

          // Pronađi indeks već postojećeg objekta s istim tekstom za dešifriranje
          const existingItemIndex = existingData.findIndex(
            (existingItem) => existingItem.encryptedText === encryptedText // Promijenjeno na "encryptedText"
          );

          // Ako objekt već postoji, ažuiranje samo ako je noviji od onoga koji se već nalazi u lokalnom skladištu
          if (existingItemIndex > -1) {
            if (existingData[existingItemIndex].id < id) {
              existingData[existingItemIndex] = item;
            }
          } else {
            // Dodaj novi objekt u postojeće podatke ako ga ne postoji već
            existingData.push(item);
          }

          // Spremi ažurirane podatke pod ključem "decrypto" // Promijenjeno ime ključa
          localStorage.setItem("decrypto", JSON.stringify(existingData));

          setEncryptedText(""); // Promijenjeno na "setEncryptedText"
        } catch (error) {
          console.error("Greška pri spremanju u lokalno skladište:", error);
        }
      }
    };

    saveDataToLocalStorage();
  }, [showResult, encryptedText, decryptedText]); // Dodano decryptedText

  return (
    <div className="Dinput-text-component">
      <div className="Dtitle">
        <h3>Dešifriraj text...</h3> 
        
      </div>
      <div className="Dinput-text-area">
        <textarea
          placeholder="Unesite šifrirani tekst ovdje..."
          value={encryptedText}
          onChange={handleInputChange}
          className="Dinput-textarea"
        ></textarea>
        {errorMessage && <p className="Derror-message ">{errorMessage}</p>}
        <div className="textarea_btn">
          <button onClick={handleDecrypt} className="encrypt-button">
            Dešifriraj
          </button>
        </div>
        {showResult && (
          <div className="Dresult-container">
            <p className="Dresult-decrypto">{decryptedText}</p> 
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCryptoTextComponent; 
