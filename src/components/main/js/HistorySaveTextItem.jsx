import React from "react";
import { FaTimes } from "react-icons/fa";
import "../style/HistorySaveTextItemStyle.css";

const HistorySaveTextItem = ({ data, onDelete, onOpenModal }) => {
  const handleDelete = () => {
    onDelete(data.id);
  };

  // Ograničen prikaz inputText i encryptedText na prvih 40 znakova
  const truncatedInputText = data.inputText
    ? data.inputText.length > 40
      ? data.inputText.slice(0, 40) + "  ..."
      : data.inputText
    : "";

  const truncatedEncryptedText = data.encryptedText
    ? data.encryptedText.length > 40
      ? data.encryptedText.slice(0, 40) + "..."
      : data.encryptedText
    : "";

  const handleItemClicked = () => {
    onOpenModal();
  };

  return (
    <div className="history-item">
      <div className="title_item" onClick={handleItemClicked}>
        <div className="time">
          <p>{data.timestamp}</p>
        </div>
        <div className="input">
          <p>{truncatedInputText}</p>
        </div>
        <div className="encrypt">
          <p>{truncatedEncryptedText}</p>
        </div>
      </div>
      <div className="delete_btn">
        <button onClick={handleDelete}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default HistorySaveTextItem;
