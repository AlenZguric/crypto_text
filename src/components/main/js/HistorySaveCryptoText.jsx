import React, { useState, useEffect } from "react";
import HistorySaveTextItem from "./HistorySaveTextItem";
import Modal from "./Modal";
import moment from "moment";
import "../style/HistorySaveCryptoTextStyle.css";
import { translate } from "../../../translation/Translate";

const HistorySaveCryptoText = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [sortOrder, setSortOrder] = useState("newestToOldest");
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  useEffect(() => {
    const savedCryptoData = JSON.parse(localStorage.getItem("crypto")) || [];
    const sortedData = savedCryptoData.slice();

    sortedData.sort((a, b) => {
      const dateComparison = moment(b.timestamp, "HH:mm:ss DD.MM.YYYY").diff(
        moment(a.timestamp, "HH:mm:ss DD.MM.YYYY")
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
    localStorage.setItem("crypto", JSON.stringify(updatedCryptoData));
    setCryptoData(updatedCryptoData);
  };

  const handleDeleteAll = () => {
    // Izbriši sve stavke iz lokalnog skladišta
    localStorage.removeItem("crypto");
    setCryptoData([]);
  };

  return (
    <div className="HistorySaveCryptoText">
      <div className="title-item">
        <h3>{translate("HistorySaveCryptoText", "h3")}</h3>
      </div>
      <div className="sort-delete">
        <div className="sort">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="newestToOldest">
              {translate("HistorySaveCryptoText", "option1")}
            </option>
            <option value="oldestToNewest">
              {translate("HistorySaveCryptoText", "option2")}
            </option>
          </select>
        </div>
        <div className="delete">
          <button onClick={handleDeleteAll}>
            {translate("HistorySaveCryptoText", "delete-btn")}
          </button>
        </div>
      </div>

      {cryptoData.length === 0 ? (
        <p className="error-msg">
          {translate("HistorySaveCryptoText", "error-msg")}
        </p>
      ) : (
        <ul>
          {cryptoData.map((data) => (
            <li key={data.id}>
              <HistorySaveTextItem
                key={data.id}
                data={data}
                onDelete={handleDelete}
                onOpenModal={() => openModal(data)}
              />
            </li>
          ))}
        </ul>
      )}
      {isModalOpen && (
        <Modal data={modalData} onCloseModal={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default HistorySaveCryptoText;
