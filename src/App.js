
import React from "react";
import "./App.css";
import NavBar from "./components/header/js/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SharePage from "./pages/SharePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import CryptoPage from "./pages/CryproPage";


function App() {
  return (
    <div className="App"> 
      <header>
      <NavBar/> 
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crypto" element={<CryptoPage />} />
        <Route path="/share" element={<SharePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes> 
    </div>
  );
}

export default App;
