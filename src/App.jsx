import React from "react"
import {MainContainer} from "./styles/GlobalComponents/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
      <BrowserRouter>
        <MainContainer>
          <ToastContainer position="top-center" />
          <Header />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            {/*<Route path="/register" element={<NewUser />} />*/}
            {/*<Route path="/edit/:id" element={<EditUser />} />*/}
          </Routes>
           <Footer/>
        </MainContainer>
      </BrowserRouter>
  )
}

export default App
