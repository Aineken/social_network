import {
    Container,
    Div1,
    Div2, HeaderButton,
    HeaderDiv,
    NavLink,
} from "./HeaderStyled";
import logo from "../../utils/andrzul_logo.svg";
import {Link} from "react-router-dom";

function Header(props) {

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
                    {props.isAuth
                        ? <NavLink>
                            <span>{props.login}</span>
                            <HeaderButton onClick={props.logout}> Logout</HeaderButton>
                        </NavLink>
                        : <Link to="/login">
                            <HeaderButton>Login</HeaderButton>
                        </Link>}

                </Div2>
            </HeaderDiv>
        </Container>
    );
}

export default Header;
