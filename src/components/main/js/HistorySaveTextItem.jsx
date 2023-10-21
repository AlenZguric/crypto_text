import React from "react";
import { FaTimes } from "react-icons/fa";

const HistorySaveTextItem = ({ data, onDelete, onOpenModal }) => {
  const handleDelete = () => {
    onDelete(data.id);
  };

  // Ograničite prikaz inputText i encryptedText na prvih 40 znakova
  const truncatedInputText =
    data.inputText.length > 40 ? data.inputText.slice(0, 40) + "  ..." : data.inputText;
  const truncatedEncryptedText =
    data.encryptedText.length > 40
      ? data.encryptedText.slice(0, 40) + "..."
      : data.encryptedText;

  const handleItemClicked = () => {
    onOpenModal();
  };

  return (
    <div className="history-item" onClick={handleItemClicked}>
      <div className="title">
        <div>
          <span>{data.timestamp}</span>
        </div>
        <div>
          <span>{truncatedInputText}</span>
        </div>
        <div>
          <span>{truncatedEncryptedText}</span>
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
