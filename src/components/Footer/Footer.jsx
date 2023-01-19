import {
  Container,
  FooterDiv,
  LinkLists,
  ListItems,
  ListText,
  ListTitle,
} from "./FooterStyled";
import logo from "../../utils/img.png";

function Footer() {
  return (
    <Container id="footer">
      <FooterDiv>
        <img src={logo} alt="Logo" />
        <LinkLists>
          <ListItems>
            <ListTitle>PHONE</ListTitle>
            <ListText href="tel:+7(777)777-77-77">+48-575-014-939</ListText>
          </ListItems>
          <ListItems>
            <ListTitle>EMAIL</ListTitle>
            <ListText href="mailto:admin@gmail.com">admin@gmail.com</ListText>
          </ListItems>
          <ListItems>
            <ListTitle>Instagram</ListTitle>
            <ListText href="mailto:admin@gmail.com">@Instagram</ListText>
          </ListItems>
        </LinkLists>
        <LinkLists>
          <ListTitle regular>Please Contact us any time!</ListTitle>
          <ListTitle regular>Regulations</ListTitle>
          <ListTitle regular>@2022 Kazakhstan</ListTitle>
        </LinkLists>
      </FooterDiv>
    </Container>
  );
}

export default Footer;
