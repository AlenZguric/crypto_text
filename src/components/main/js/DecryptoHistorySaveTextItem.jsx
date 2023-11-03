import React from "react";
import { FaTimes } from "react-icons/fa";
import "../style/DecryptoHistorySaveTextItemStyle.css";


const DecryptoHistorySaveTextItem = ({ data, onDelete, onOpenDecrypto }) => {
  const handleDelete = () => {
    onDelete(data.id);
  };

  const truncatedInputText = data.encryptedText
    ? data.encryptedText.length > 40
      ? data.encryptedText.slice(0, 40) + "  ..."
      : data.encryptedText
    : "";

  const truncatedEncryptedText = data.decryptedText
    ? data.decryptedText.length > 40
      ? data.decryptedText.slice(0, 40) + "..."
      : data.decryptedText
    : "";

  return (
    <div className="Dhistory-item">
      <div className="Dtitle_item" onClick={() => onOpenDecrypto(data)}>
        <div className="Dtime">
          <p>{data.timestamp}</p>
        </div>
        <div className="Dinput">
          <p>{truncatedInputText}</p>
        </div>
        <div className="Dencrypt">
          <p>{truncatedEncryptedText}</p>
        </div>
      </div>
      <div className="Ddelete_btn">
        <button onClick={handleDelete}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default DecryptoHistorySaveTextItem;
