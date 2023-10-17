import React, { useState, useEffect } from "react";
import InputCryptoTextComponent from "../components/main/js/InputCryptoTextComponent";
import InputTextComponent from "../components/main/js/InputTextComponent";
import PopUp from "../components/header/js/PopUp";
import CopyRight from "../components/footer/js/CopyRight";
import "../pages/css/CryptoPageStyle.css";
import { Link } from "react-router-dom";

export default function CryproPage() {
  const [showInputText, setShowInputText] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="crypto-page">
      <PopUp />
      <div className="crypto-title">
        <h2>Sigurno i Besplatno</h2>
        <p>Kriptiraj svoj text i budi siguran od znateželjnih očiju </p>
        <p>Uz našu aplikaciju</p>
      </div>
      <div className="hr-class">
      <hr />
      </div>
      <div className="toggle">
        <span>Šifriraj</span>
        <label className="iphone-toggle-switch">
          <input
            type="checkbox"
            checked={showInputText}
            onChange={() => setShowInputText(!showInputText)}
          />

          <div className="slider"></div>
        </label>
        <span>Dešifriraj</span>
      </div>

      <div className="crypto-history">
        <Link to="/history">Povijest...</Link>
      </div>
      <main>
        <section>{showInputText && <InputTextComponent />}</section>

        <section>{!showInputText && <InputCryptoTextComponent />}</section>
      </main>
      <footer>
        <CopyRight />
      </footer>
    </div>
  );
}
