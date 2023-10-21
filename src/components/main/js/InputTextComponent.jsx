import React, { useState, useEffect } from "react";
import ShareCryptedText from "./ShareCryptedText";
import symbolMap from "./symbolLib";
import "../../main/style/InputTextComponent.css";
import moment from "moment";

const InputTextComponent = () => {
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setShowResult(false);
    setErrorMessage("");
  };

  const handleEncrypt = () => {
    if (!inputText) {
      setErrorMessage("* Unesite text *");
      return;
    }

    const encrypted = inputText
      .toLowerCase()
      .split("")
      .map((char) => (symbolMap[char] ? symbolMap[char] : char))
      .join("");

    setEncryptedText(encrypted);
    setShowResult(true);
    setErrorMessage("");
  };

  useEffect(() => {
    const saveDataToLocalStorage = () => {
      if (showResult && inputText && encryptedText) {
        try {
          const id = moment().format("HHmmssDDMMYYYY");
          const item = {
            id,
            inputText,
            encryptedText,
            timestamp: moment().format("HH:mm:ss DD.MM.YYYY"),
          };

          // Dohvatite postojeće podatke pod ključem "crypto"
          const existingData = JSON.parse(localStorage.getItem("crypto")) || [];

          // Pronađi indeks već postojećeg objekta s istim tekstom za šifriranje
          const existingItemIndex = existingData.findIndex(
            (existingItem) => existingItem.inputText === inputText
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

          // Spremi ažurirane podatke pod ključem "crypto"
          localStorage.setItem("crypto", JSON.stringify(existingData));

          setInputText("");
        } catch (error) {
          console.error("Greška pri spremanju u lokalno skladište:", error);
        }
      }
    };

    saveDataToLocalStorage();
  }, [showResult, inputText, encryptedText]);

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
        ></textarea>
        {errorMessage && <p className="error-message ">{errorMessage}</p>}
        <div className="textarea_btn">
          <button onClick={handleEncrypt} className="encrypt-button">
            Šifriraj
          </button>
        </div>
        {showResult && (
          <div className="result-container">
            <p className="result-crypto">{encryptedText}</p>
            <ShareCryptedText encryptedText={encryptedText} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputTextComponent;
