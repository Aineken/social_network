import React, {useEffect} from "react";
import "./assets/tailwind.css";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import {MainContainer, MainDiv} from "./styles/GlobalComponents";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {initializeApp} from "./app/app-reducer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import {ToastContainer} from "react-toastify";
import {RootStateType} from "./app/store";
import ProfileContainer from "./components/Profile/ProfileContainer";

type PropsType = {
    initializeApp: () => void
    initialized: boolean

}
const App:React.FC<PropsType> = (props) => {

    const catchAllUnhandledErrors = (event :PromiseRejectionEvent) => {
        alert("some error occured")
        console.log(event.reason,event.promise)
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
                        <Route  path="/" element={<Hero/>}/>
                        <Route path="/profile/:profileId?" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/:dialogId?" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer testName={"hello"} />}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="*" element={<div>Error 404 page</div>}/>
                    </Routes>
                </MainDiv>
            </MainContainer>
        </BrowserRouter>
    )
}


const mapStateToProps = (state:RootStateType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);