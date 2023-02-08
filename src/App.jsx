import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";
import {MainContainer} from "./styles/GlobalComponents/index.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {initializeApp} from "./app/app-reducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App=(props)=> {

    useEffect(() => {
        props.initializeApp();

    }, [props]);

    if (!props.initialized) {
        return <Preloader/>
    }


    return (
        <BrowserRouter>
            <ToastContainer position="top-center"/>
            <Header/>

            <MainContainer>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Hero/>}/>
                    <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="/dialogs" element={<DialogsContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </MainContainer>
            {/*<Footer/>*/}
        </BrowserRouter>
    );
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);