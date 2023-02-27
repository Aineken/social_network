import React, {useEffect} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import {MainContainer, MainDiv} from "./styles/GlobalComponents/index.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {initializeApp} from "./app/app-reducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {ToastContainer} from "react-toastify";

const App = (props) => {

    const catchAllUnhandledErrors = (reason,promise) => {
        alert("some error occured")
        console.log(reason,promise)
    }
    useEffect(() => {
        props.initializeApp();
    }, [props]);

    useEffect(() => {
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
        return () => {
            window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
        }
    }, []);


    if (!props.initialized) {
        return <Preloader/>
    }
    return (<BrowserRouter>
            <ToastContainer/>
            <MainContainer>
                <HeaderContainer/>
                <MainDiv>
                    <Navbar/>
                    <Routes>
                        <Route exact path="/" element={<Hero/>}/>
                        <Route path="/profile/:profileId?" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/:dialogId?" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<div>Error 404 page</div>}/>
                    </Routes>
                </MainDiv>
            </MainContainer>
        </BrowserRouter>
    )
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);