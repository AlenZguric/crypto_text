import React, {useEffect, useState} from "react";

import {
  FacebookShareButton,
  ViberShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookIcon,
  ViberIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const ShareWebApp = () => {
   const [currentUrl, setCurrentUrl] = useState(""); // State za pohranu trenutnog URL-a

   useEffect(() => {
     // Dohvaćanje trenutnog URL-a i postavljanje u state
     const url = window.location.href;
     // Brisanje undefined
     const cleanUrl = url.replace(/ undefined$/, "");
     setCurrentUrl(url, cleanUrl);
   }, []);

  return (
    <div>
      <h2>Podijeli ovu stranicu:</h2>
      <LinkedinShareButton url={currentUrl}>
        <LinkedinIcon  size={32} round />
      </LinkedinShareButton>
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
          body={`Pogledajte ovu sjajnu web aplikaciju:\n\n${currentUrl}`} >
          <EmailIcon size={32} round />
        </EmailShareButton>
      
    </div>
  );
};

export default ShareWebApp;
