import React from "react";
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

const ShareComponent = () => {
  const currentUrl = window.location.href; // Ili location.href ako želite cijeli URL

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

export default ShareComponent;
