import React, { useState, useEffect } from "react";
import LanguageSelector from "../js/LanguageSelector";
import { Link } from "react-router-dom";
import "../css/PopUpStyle.css";
import { translate } from "../../../translation/Translate";


const PopUp = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  useEffect(() => {
    const storedCookieAcceptance = localStorage.getItem("cookieAccepted");

    if (storedCookieAcceptance === "true") {
      setIsCookieAccepted(true);

      if (!localStorage.getItem("crypto")) {
        localStorage.setItem("crypto", JSON.stringify([]));
      }
  
      // Provjeri postoji li lokalno skladište za dešifriranje
      if (!localStorage.getItem("decrypto")) {
        localStorage.setItem("decrypto", JSON.stringify([]));
      }
    }
  }, []);

  const acceptCookies = () => {
    setIsCookieAccepted(true);
    localStorage.setItem("cookieAccepted", true);
  };

  useEffect(() => {
    if (window.location.pathname === "/cookie") {
      setIsCookieAccepted(true);
    }
  }, []);

  if (isCookieAccepted) {
    return null;
  }

  if (isCookieAccepted || window.location.pathname === "/cookie") {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className="flags-right">
        <LanguageSelector/>
      </div>
      <div className="cookie-paragaf">
        <h3>
          Crypt<span>O</span>
        </h3>
        <div className="text">
          <p>
           {translate("popup", "popup-p1")}
          </p>
          <br />
          <br />
          <p>{translate("popup", "popup-p2")}</p>
        </div>
      </div>
      <div className="cookie-btn">
        <button>
          <Link to="/privacy">{translate("popup", "learnmore-btn")}</Link>
        </button>
        <button onClick={acceptCookies}>{translate("popup", "accept-btn")}</button>
      </div>
    </div>
  );
};

export default PopUp;