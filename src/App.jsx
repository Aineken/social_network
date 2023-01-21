import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Register from "./components/Pages/Register/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/reply" element={<Reply />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
