import React from 'react';

const ShareCryptedText = ({ encryptedText }) => {
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
      console.log('Web preglednik ne podržava djeljenje.');
    }
  };

  const handleCopy = () => {
    const textArea = document.createElement('textarea');
    textArea.value = encryptedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };
  
  return (
    <div>
      <button onClick={handleShare}>
        <i className="material-icons" style={{ fontSize: '24px' }}>
          share
        </i>
      </button>
      <button onClick={handleCopy}>
        <i className="material-icons" style={{ fontSize: '24px' }}>
          content_copy
        </i>
      </button>
    </div>
  );
};


export default ShareCryptedText;
