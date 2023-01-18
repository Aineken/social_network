import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

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
          <FaGithub size="3rem" />

          <FaLinkedin size="3rem" />

          <FaTelegram size="3rem" />
        </LogoContainer>
      </BottonLine>
    </Container>
  );
}

export default Footer;
