import React from "react";
import "../style/ModalStyle.css";

const Modal = ({ data, onCloseModal }) => {
  return (
    // Stilizirajte modal da prekriva cijeli ekran
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onCloseModal}>
          &times;
        </span>
        <h2>Detalji šifriranog teksta</h2>
        <div>
          <strong>Input Text:</strong> {data.inputText}
        </div>
        <div>
          <strong>Encrypted Text:</strong> {data.encryptedText}
        </div>
        <div>
          <strong>Timestamp:</strong> {data.timestamp}
        </div>
      </div>
    </div>
  );
};

export default Modal;
