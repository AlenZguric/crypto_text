import React, { useState, useEffect } from "react";
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

  if (isCookieAccepted) {
    return null;
  }



  return (
    <div className="cookie-banner">
      <div className="cookie-paragaf">
      <p>
        Ova stranica koristi kolačiće kako bi pružila najbolje moguće
        iskustvo. Ako nastavite koristiti ovu stranicu, smatramo da ste
        saglasni s upotrebom kolačića.
      </p>
      </div>
      <div className="cookie-btn">
      <button onClick={acceptCookies}>Slažem se</button>

      </div>
      
    </div>
  );
};

export default PopUp;