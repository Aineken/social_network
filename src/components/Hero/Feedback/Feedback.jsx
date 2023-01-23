import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../../styles/GlobalComponents";
import {
  CategoryButton,
  Container,
  Div1,
  Div2,
  MainText,
  MainTitle,
} from "./FeedbackStyled";
import feedback from "../../../utils/feedback.png";
import { Link } from "react-router-dom";

function Feedback() {
  return (
    <Section>
      <SectionDivider colorAlt />
      <SectionTitle>Feedback</SectionTitle>
      <Container>
        <Div1>
          <img src={feedback} alt="" />
        </Div1>
        <Div2>
          <MainTitle>Any Questions?</MainTitle>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </MainText>
          <Link to="/reply">
            <CategoryButton>Contant us</CategoryButton>
          </Link>
        </Div2>
      </Container>
    </Section>
  );
}

export default Feedback;
