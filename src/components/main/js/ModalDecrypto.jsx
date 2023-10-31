import React  from "react";
import "../style/ModalStyle.css";

const ModalDecrypto = ({ data,  onCloseModal }) => {

  return (
    <div className="modal">
      <span className="close-button" onClick={onCloseModal}>
        &times;
      </span>
      <div className="modal-content">
        <h2>Detalji šifriranog teksta</h2>
        <div className="time">
          <strong>Vrijeme:</strong>
          <p>{data.timestamp}</p>
        </div>
        <div className="input_text">
          <strong>Ulazni text:</strong>
          <p>{data.encryptedText}</p>
        </div>
        <div className="encrypted_text">
          <strong>Izlazni text:</strong>
          <p>{data.decryptedText
}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalDecrypto;
