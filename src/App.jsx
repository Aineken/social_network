import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Register from "./components/Pages/Register/Register.jsx";
import Login from "./components/Pages/Login/Login.jsx";
import Reply from "./components/Pages/Reply/Reply.jsx";
import ScrollToTop from "./components/HOC/ScrollToTop.jsx";
import SkillPage from "./components/Pages/SkiilPage/SkillPage.jsx";
import {MainContainer} from "./styles/GlobalComponents/index.js";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer position="top-center"/>
            <Header/>
            <ScrollToTop>
                <MainContainer>
                    <Routes>
                        <Route exact path="/" element={<Hero/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/reply" element={<Reply/>}/>
                        <Route path="/skills/:id" element={<SkillPage/>}/>
                    </Routes>
                </MainContainer>
            </ScrollToTop>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
