import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/PopUpStyle.css";

const PopUp = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  useEffect(() => {
    const storedCookieAcceptance = localStorage.getItem("cookieAccepted");

    if (storedCookieAcceptance === "true") {
      setIsCookieAccepted(true);
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
      <div className="cookie-paragaf">
        <h3>
          Crypt<span>O</span>
        </h3>
        <div className="text">
          <p>
            Ova stranica koristi kolačiće kako bi pružila najbolje moguće
            iskustvo. Ako nastavite koristiti ovu stranicu, smatramo da ste
            suglasni s upotrebom kolačića.
          </p>
          <br />
          <br />
          <p>Za više informacija pritisni "Saznaj više"</p>
        </div>
      </div>
      <div className="cookie-btn">
        <button>
          <Link to="/cookie">Saznaj više</Link>
        </button>
        <button onClick={acceptCookies}>Slažem se</button>
      </div>
    </div>
  );
};

export default PopUp;
