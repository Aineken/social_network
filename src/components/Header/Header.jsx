import {
  CategoryButton,
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  RegisterButton,
} from "./HeaderStyled";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../utils/img.png";
import { Link } from "react-router-dom";
import { SearchButton, SearchWrapper } from "../../styles/GlobalComponents";

function Header() {
  return (
    <Container>
      <Div1>
        <Link to="/">
          <NavLink>
            <img src={logo} alt="Logo" />
            <span>University</span>
          </NavLink>
        </Link>
      </Div1>
      <Div2>
        <Link to="/">
          <CategoryButton>Category</CategoryButton>
        </Link>
        <Link to="/">
          <SearchWrapper>
            <SearchIcon sx={{ fontSize: 30, color: "black" }} />
            <SearchButton placeholder="Search" />
          </SearchWrapper>
        </Link>
      </Div2>
      <Div3>
        <Link to="/">
          <NavLink>Teach</NavLink>
        </Link>
        <Link to="/">
          <NavLink main>Login</NavLink>
        </Link>
        <Link to="/">
          <RegisterButton>Register</RegisterButton>
        </Link>
      </Div3>
    </Container>
  );
}

export default Header;
