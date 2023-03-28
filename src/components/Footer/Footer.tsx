import {
  Container,
  FooterDiv,
  LinkLists,
  ListItems,
  ListText,
  ListTitle,
} from "./FooterStyled";

function Footer() {
  return (
    <Container id="footer">
      <FooterDiv>
        <LinkLists>
          <ListItems>
            <ListTitle>PHONE</ListTitle>
            <ListText href="tel:+7(777)777-77-77">+48-575-014-939</ListText>
          </ListItems>
          <ListItems>
            <ListTitle>EMAIL</ListTitle>
            <ListText href="mailto:admin@andrzul.online">admin@andrzul.online</ListText>
          </ListItems>
          <ListItems>
            <ListTitle>Telegram</ListTitle>
            <ListText href="https://t.me/andrzul" target="_blank">@andrzul</ListText>
          </ListItems>
        </LinkLists>
        <LinkLists>
          <ListTitle regular>Please Contact us any time!</ListTitle>
          <ListTitle regular>Regulations</ListTitle>
          <ListTitle regular>@2022 Poland</ListTitle>
        </LinkLists>
      </FooterDiv>
    </Container>
  );
}

export default Footer;
