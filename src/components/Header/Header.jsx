import {
    Container,
    Div1,
    Div2,
    HeaderDiv,
    LoginButton,
    NavLink,
} from "./HeaderStyled";
import logo from "../../utils/andrzul_logo.svg";
import {Link} from "react-router-dom";

function Header() {

    return (
        <Container>
            <HeaderDiv>
                <Div1>
                    <Link to="/">
                        <NavLink logo>
                            <img src={logo} alt="Logo"/>
                            <span>Social Network</span>
                        </NavLink>
                    </Link>
                </Div1>
                <Div2>

                    <Link to="/login">
                        <LoginButton>Login</LoginButton>
                    </Link>

                </Div2>
            </HeaderDiv>
        </Container>
    );
}

export default Header;
