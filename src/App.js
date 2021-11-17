import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diagnostics from './pages/diagnostics';
import Medicines from './pages/medicines';
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Medicines />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
