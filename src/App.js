import React from "react";
import "./App.css";
import NavBar from "./components/header/js/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import CryptoPage from "./pages/CryptoPage";
import HistoryPage from "./pages/HistoryPage";
import PrivacyAndTerm from "./pages/PrivacyAndTerm";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crypto" element={<CryptoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/privacy" element={<PrivacyAndTerm />} />

      </Routes>
    </div>
  );
}

export default App;