import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";
import { MainContainer } from "./styles/GlobalComponents/index.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Messages from "./components/Messages/Messages.jsx";
import Hero from "./components/Hero/Hero.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Header />

      <MainContainer>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Messages />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainContainer>

      {/*<Footer/>*/}
    </BrowserRouter>
  );
}

export default App;
