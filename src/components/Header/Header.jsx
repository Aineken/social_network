import {
    Container,
    Div1,
    Div2,
    Div3,
    HeaderDiv,
    NavLink,
    RegisterButton,
} from "./HeaderStyled";
import logo from "../../utils/img.png";
import {Link} from "react-router-dom";
import Navbar from "./Dropdown/Navbar";
import Search from "../../styles/GlobalComponents/Search/Search.jsx";

function Header() {

    return (
        <Container>
            <HeaderDiv>
                <Div1>
                    <Link to="/">
                        <NavLink logo>
                            <img src={logo} alt="Logo"/>
                            <span>University</span>
                        </NavLink>
                    </Link>
                </Div1>
                <Div2>
                    <Navbar/>
                    <Search/>
                </Div2>
                <Div3>
                    <Link to="/reply">
                        <NavLink>Application</NavLink>
                    </Link>
                    <Link to="/login">
                        <NavLink main>Login</NavLink>
                    </Link>
                    <Link to="/register">
                        <RegisterButton>Register</RegisterButton>
                    </Link>
                </Div3>
            </HeaderDiv>
        </Container>
    );
}

export default Header;
