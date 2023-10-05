
import React from "react";
import "./App.css";
import NavBar from "./components/header/js/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Share from "./pages/Share";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <div className="App"> 
      <NavBar/> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/share" element={<Share />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes> 
    </div>
  );
}

export default App;
