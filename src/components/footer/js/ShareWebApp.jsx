import React from "react";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaViber, FaWhatsapp } from "react-icons/fa";
import "../css/ShareWebAppStyle.css";

const ShareWebApp = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  // Funkcija za dijeljenje na Facebooku
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank');
  };

  // Funkcija za dijeljenje na Instagramu
  const shareOnInstagram = () => {
    // URL adresa s pripremljenim sadržajem za objavu
    const instagramShareLink = `https://www.instagram.com/share?url=${currentUrl}`;
    window.open(instagramShareLink, '_blank');
  };
  

  // Funkcija za dijeljenje na LinkedIn-u
  const shareOnLinkedin = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`, '_blank');
  };

  // Funkcija za dijeljenje na Viberu
  const shareOnViber = () => {
    // URL adresa s pripremljenim sadržajem za dijeljenje
    const viberShareLink = `viber://forward?text=${encodeURIComponent(currentUrl)}`;
    window.open(viberShareLink);
  };
  
  

  // Funkcija za dijeljenje na WhatsApp-u
  const shareOnWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?text=${currentUrl}`, '_blank');
  };

  return (
    <div className="share-web-app">
      <span>Podijeli:</span>
      <FaFacebook onClick={shareOnFacebook} className="share-icon" />
      <FaInstagram onClick={shareOnInstagram} className="share-icon" />
      <FaLinkedin onClick={shareOnLinkedin} className="share-icon" />
      <FaViber onClick={shareOnViber} className="share-icon" />
      <FaWhatsapp onClick={shareOnWhatsapp} className="share-icon" />
    </div>
  );
};

export default ShareWebApp;
