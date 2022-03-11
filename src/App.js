import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diagnostics from './pages/diagnostics';
import Medicines from './pages/medicines';
import Doctors from './pages/doctors'
import About from './pages/about'
import Support from './pages/support'
import Home from './pages/home'
import Login from './pages/login'
import Navigation from './Components/Navbar';
import Footer from './Components/Footer';
import MainLogo from './Components/MainLogo'
import LogoSrc from './images/main_logo.png'
import Register from './pages/register';

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <MainLogo src={LogoSrc} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
