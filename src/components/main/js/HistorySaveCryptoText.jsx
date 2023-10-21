import React, { useState, useEffect } from "react";
import HistorySaveTextItem from "./HistorySaveTextItem";
import Modal from "./Modal";

const HistorySaveCryptoText = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [sortOrder, setSortOrder] = useState("newestToOldest"); // Početni poredak: od najnovijeg do najstarijeg
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // Dodajte stanje za podatke u modalu

  const ulStyle = {
    backgroundColor: 'white',
  };

  const openModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  useEffect(() => {
    // Dohvati podatke iz lokalnog skladišta "crypto" i postavi ih u stanje
    const savedCryptoData = JSON.parse(localStorage.getItem("crypto")) || [];

    // Sortiraj podatke ovisno o odabiru korisnika
    const sortedData = savedCryptoData.slice();
    if (sortOrder === "newestToOldest") {
      sortedData.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
    } else if (sortOrder === "oldestToNewest") {
      sortedData.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
    }

    setCryptoData(sortedData);
  }, [sortOrder]);

  const handleDelete = (id) => {
    // Ukloni stavku iz lokalnog skladišta
    const updatedCryptoData = cryptoData.filter((data) => data.id !== id);
    localStorage.setItem("crypto", JSON.stringify(updatedCryptoData));
    setCryptoData(updatedCryptoData);
  };

  return (
    <div>
      <h2>Povijest šifriranih tekstova</h2>
      <div>
        <label>Sortiraj: </label>
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="newestToOldest">Najnovije do najstarijeg</option>
          <option value="oldestToNewest">Najstarije do najnovijeg</option>
        </select>
      </div>
      {cryptoData.length === 0 ? (
        <p>Nema spremljenih šifriranih tekstova.</p>
      ) : (
        <ul style={ulStyle}>
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
       {isModalOpen && <Modal data={modalData} onCloseModal={() => setModalOpen(false)} />}
    </div>
  );
};

export default HistorySaveCryptoText;
