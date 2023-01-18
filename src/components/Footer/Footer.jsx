import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SocialIcons } from "../Header/HeaderStyled";
import {
  BottonLine,
  Container,
  LinkLists,
  ListItems,
  ListText,
  ListTitle,
  LogoContainer,
} from "./FooterStyled";

function Footer() {
  return (
    <Container id="footer">
      <LinkLists>
        <ListItems>
          <ListTitle>PHONE</ListTitle>
          <ListText href="tel:+48883515172">+48-575-014-939</ListText>
        </ListItems>
        <ListItems>
          <ListTitle>EMAIL</ListTitle>
          <ListText href="mailto:andrzul98@gmail.com">
            andrzul98@gmail.com
          </ListText>
        </ListItems>
      </LinkLists>

      <BottonLine>
        <ListTitle regular>Please Contact me any time!</ListTitle>
        <LogoContainer>
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
        </LogoContainer>
      </BottonLine>
    </Container>
  );
}

export default Footer;
