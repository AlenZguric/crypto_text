import React, {useEffect, useState} from 'react';
import { shareOnMobile } from 'react-mobile-share';
import "../style/ShareCryptedTextStyle.css";

const ShareCryptedText = ({ encryptedText }) => {

const [showNotification, setShowNotification] = useState(false);

useEffect(() => {
  if (showNotification) {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 2000); 

    return () => {
      clearTimeout(timer);
    };
  }
}, [showNotification]);

const handleShare = () => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Šifrirani tekst',
        text: encryptedText,
      })
      .then(() => console.log('Tekst je uspješno podjeljen'))
      .catch((error) => console.error('Greška pri djeljenju teksta:', error));
  } else {
    
    shareOnMobile({
      text: encryptedText,
    });
  }
};

const handleCopy = () => {
  const textArea = document.createElement('textarea');
  textArea.value = encryptedText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  setShowNotification(true);
};

return (
  <div className='share-crypto-text-btn'>
    <button className='share-button' onClick={handleShare}>
      <i className="material-icons" style={{ fontSize: '24px' }}>
        share
      </i>
    </button>
    <button className='copy-button' onClick={handleCopy}>
      <i className="material-icons" style={{ fontSize: '24px' }}>
        content_copy
      </i>
    </button>
    {showNotification && <p>Tekst je uspješno kopiran!</p>}
  </div>
);
};

export default ShareCryptedText;