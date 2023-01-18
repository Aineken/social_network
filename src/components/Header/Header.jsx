import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyled";

import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

import logo from "../../utils/andrzul_logo.svg";

function Header() {
  return (
    <Container>
      <Div1>
        <NavLink left main white href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ marginRight: "1rem", maxWidth: "100px", width: "100%" }}
          />

          <span>Portfolio</span>
        </NavLink>
      </Div1>
      <Div2>
        <NavLink href="#project">Project</NavLink>

        <NavLink href="#tech">Technologies</NavLink>

        <NavLink href="#about">About</NavLink>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Aineken" target="_blank">
          <FaGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/andrzul/"
          target="_blank"
        >
          <FaLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://t.me/andrzul" target="_blank">
          <FaTelegram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}

export default Header;
