import React, { useState, useEffect } from "react";
import DecryptoHistorySaveTextItem from "./DecryptoHistorySaveTextItem";
import ModalDecrypto from "./ModalDecrypto";
import moment from "moment";
import "../style/DecryptoHistorySaveCryptoTextStyle.css";
import { translate } from "../../../translation/Translate";

const DecryptoHistorySaveCryptoText = ({ handleDelete: parentHandleDelete, decryptedText }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [sortOrder, setSortOrder] = useState("newestToOldest");
  const [modalData, setModalData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  useEffect(() => {
    const savedCryptoData = JSON.parse(localStorage.getItem("decrypto")) || [];
    const sortedData = savedCryptoData.slice();

    sortedData.sort((a, b) => {
      const dateComparison = moment(b.timestamp, "HH:mm:ss  DD.MM.YYYY").diff(
        moment(a.timestamp, "HH:mm:ss  DD.MM.YYYY")
      );
      if (dateComparison === 0) {
        return moment(b.timestamp, "HH:mm:ss DD.MM.YYYY").diff(
          moment(a.timestamp, "HH:mm:ss DD.MM.YYYY")
        );
      }
      return dateComparison;
    });

    if (sortOrder === "oldestToNewest") {
      sortedData.reverse();
    }

    setCryptoData(sortedData);
  }, [sortOrder]);

  const handleDelete = (id) => {
    const updatedCryptoData = cryptoData.filter((data) => data.id !== id);
    localStorage.setItem("decrypto", JSON.stringify(updatedCryptoData));
    setCryptoData(updatedCryptoData);
  };

  const handleDeleteAll = () => {
    // Izbriši sve stavke iz lokalnog skladišta
    localStorage.removeItem("decrypto");
    setCryptoData([]);
  };

  return (
    <div className="DHistorySaveCryptoText">
      <div className="Dtitle-item">
        <h3>{translate("DecryptoHistorySaveCryptoText", "h3")}</h3>
      </div>
      <div className="Dsort-delete">
        <div className="Dsort">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="newestToOldest">{translate("DecryptoHistorySaveCryptoText", "option1")}</option>
            <option value="oldestToNewest">{translate("DecryptoHistorySaveCryptoText", "option2")}</option>
          </select>
        </div>
        <div className="Ddelete">
          <button onClick={handleDeleteAll}>{translate("DecryptoHistorySaveCryptoText", "delete-btn")}</button>
        </div>
      </div>

      {cryptoData.length === 0 ? (
        <p className="Derror-msg">{translate("DecryptoHistorySaveCryptoText", "error-msg")}</p>
      ) : (
        <ul>
          {cryptoData.map((data) => (
            <li key={data.id}>
              <DecryptoHistorySaveTextItem
                data={data}
                onDelete={handleDelete}
                onOpenDecrypto={openModal}
              />
            </li>
          ))}
        </ul>
      )}
      {modalOpen && (
        <ModalDecrypto
          data={modalData}
          decryptedText={decryptedText}
          onCloseModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default DecryptoHistorySaveCryptoText;
