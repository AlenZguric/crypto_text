import React  from "react";
import "../style/ModalStyle.css";
import { translate } from "../../../translation/Translate";


const ModalDecrypto = ({ data,  onCloseModal }) => {

  return (
    <div className="modal">
      <span className="close-button" onClick={onCloseModal}>
        &times;
      </span>
      <div className="modal-content">
        <h2>{translate("ModalDecrypto", "h2")}</h2>
        <div className="time">
          <strong>{translate("ModalDecrypto", "time")}</strong>
          <p>{data.timestamp}</p>
        </div>
        <div className="input_text">
          <strong>{translate("ModalDecrypto", "input")}</strong>
          <p>{data.encryptedText}</p>
        </div>
        <div className="encrypted_text">
          <strong>{translate("ModalDecrypto", "output")}</strong>
          <p>{data.decryptedText
}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalDecrypto;
