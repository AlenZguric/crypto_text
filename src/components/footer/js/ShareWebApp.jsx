import React, {useEffect, useState} from "react";
import "../css/ShareWebAppStyle.css";
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
   }, [currentUrl]);

  return (
    <div className="shareWebApp">
      <div className="title">
        <h2 >Podijeli na druge platforme</h2>
      </div>
      <div className="shareWebButtons">
      <LinkedinShareButton url={currentUrl}>
        <LinkedinIcon  size={30} round />
      </LinkedinShareButton>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={30} round />
      </FacebookShareButton>
      <ViberShareButton url={currentUrl}>
        <ViberIcon size={30} round />
      </ViberShareButton>
      <WhatsappShareButton url={currentUrl}>
        <WhatsappIcon size={30} round />
      </WhatsappShareButton>
        <EmailShareButton
          subject="Pogledajte ovu sjajnu web aplikaciju"
          body={`Web app možeš skinuti na:\n\n${currentUrl}`} >
          <EmailIcon size={30} round />
        </EmailShareButton>
      </div>
      
    </div>
  );
};

export default ShareWebApp;
