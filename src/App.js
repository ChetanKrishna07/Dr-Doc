import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diagnostics from './pages/diagnostics';
import Medicines from './pages/medicines';
import Doctors from './pages/doctors'
import About from './pages/about'
import Support from './pages/support'
import Home from './pages/home'
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
