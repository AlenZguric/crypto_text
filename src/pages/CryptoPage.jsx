import React, { useState, useEffect } from "react";
import InputCryptoTextComponent from "../components/main/js/InputCryptoTextComponent";
import InputTextComponent from "../components/main/js/InputTextComponent";
import PopUp from "../components/header/js/PopUp";
import CopyRight from "../components/footer/js/CopyRight";
import "../pages/css/CryptoPageStyle.css";
import "../components/main/style/InputCryptoTextComponentStyle.css";
import "../components/main/style/InputTextComponent.css";
import { Link } from "react-router-dom";
import { translate } from "../translation/Translate";


export default function CryproPage() {
  const [showInputText, setShowInputText] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="crypto-page">
      <PopUp />
      <div className="crypto-title">
        <h2>{translate("pageCrypto","title-h2")}</h2>
        <p>{translate("pageCrypto","title-p1")}</p>
        <p>{translate("pageCrypto","title-p2")}</p>
      </div>
      <div className="hr-class">
      <hr />
      </div>
      <div className="toggle">
        <span>{translate("pageCrypto","toggle-span1")}</span>
        <label className="iphone-toggle-switch">
          <input
            type="checkbox"
            checked={!showInputText}
            onChange={() => setShowInputText(!showInputText)}
          />

          <div className="slider"></div>
        </label>
        <span>{translate("pageCrypto","toggle-span2")}</span>
      </div>

      <div className="crypto-history">
        <Link to="/history">{translate("pageCrypto","history-btn")}</Link>
      </div>
      <main>
        <section>
          {showInputText && <InputTextComponent />}
     {!showInputText && <InputCryptoTextComponent />}
        </section>

      </main>
      <footer>
        <CopyRight />
      </footer>
    </div>
  );
}
