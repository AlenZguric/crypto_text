import React from "react";
import "../style/ModalStyle.css";
import { translate } from "../../../translation/Translate";


const Modal = ({ data, onCloseModal }) => {
  return (
    <div className="modal">
      <span className="close-button" onClick={onCloseModal}>
        &times;
      </span>
      <div className="modal-content">
        <h2>{translate("modal", "h2")}</h2>
        <div className="time">
          <strong>{translate("modal", "time")}</strong>
          <p>{data.timestamp}</p>
        </div>
        <div className="input_text">
          <strong>{translate("modal", "input")}</strong>
          <p>{data.inputText}</p>
        </div>
        <div className="encrypted_text">
          <strong>{translate("modal", "output")}</strong>
          <p>{data.encryptedText}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
