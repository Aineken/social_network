import React from "react";
import {
  Container,
  Div1,
  Div2,
  MainText,
  MainTitle,
} from "./MainSectionStyled";
import mainSection from "../../../utils/mainSection.jpg";
import {
  SearchButton,
  SearchWrapper,
  Section,
} from "../../../styles/GlobalComponents";
import SearchIcon from "@mui/icons-material/Search";

function MainSection() {
  return (
    <Section>
      <Container>
        <Div1>
          <img src={mainSection} alt="" />
        </Div1>
        <Div2>
          <MainTitle>Find me?</MainTitle>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </MainText>
          <SearchWrapper>
            <SearchIcon sx={{ fontSize: 30, color: "black" }} />
            <SearchButton placeholder="Search" />
          </SearchWrapper>
        </Div2>
      </Container>
    </Section>
  );
}

export default MainSection;
