import React from "react";
import { useLocation } from "react-router-dom";
import {
  FacebookShareButton,
  ViberShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  ViberIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const ShareWebApp = () => {
   const location = useLocation("https://alenzguric.github.io/crypto_text/");
  const currentUrl = location.pathname;

  return (
    <div>
      <h2>Podijeli ovu stranicu:</h2>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <ViberShareButton url={currentUrl}>
        <ViberIcon size={32} round />
      </ViberShareButton>
      <WhatsappShareButton url={currentUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton
        subject="Pogledajte ovu sjajnu web aplikaciju"
        body={`Pogledajte ovu sjajnu web aplikaciju:\n\n${currentUrl}`}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareWebApp;
