import React, { useState, useEffect } from "react";

import "../css/CopyRightStyle.css";
import { Link } from "react-router-dom";
import { translate } from "../../../translation/Translate";

function CopyrightYear() {
  const [currentYear, setCurrentYear] = useState(0); // Početna vrijednost 0, bit će zamijenjena prilikom montiranja
  const [copyrightText, setCopyrightText] = useState("");

  useEffect(() => {
    // Funkcija za dohvaćanje trenutne godine
    const getCurrentYear = () => {
      const date = new Date();
      return date.getFullYear();
    };

    // Postavljamo trenutnu godinu kada se komponenta montira
    setCurrentYear(getCurrentYear());

    const yearDifference =
      currentYear > 2023 ? `2023 - ${currentYear}` : "2023";
    setCopyrightText(`| Copyright ® ${yearDifference}. CryptoText |`);
  }, [currentYear]);

  return (
    <div className="copyright">
      <Link to="/privacy">{translate("copyright", "terms")}</Link>

      <Link to="/privacy">
        <p className="copyright-link">{copyrightText}</p>
      </Link>
      <Link to="/privacy">{translate("copyright", "privacy")} </Link>
    </div>
  );
}

export default CopyrightYear;
