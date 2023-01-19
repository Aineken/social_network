import React from "react";
import { Section } from "../../../../styles/GlobalComponents";
import { Container, Div1, Div2, MainText, MainTitle } from "./FeedbackStyled";

function Feedback() {
  return (
    <Section>
      <Container>
        <Div1>
          <img src={mainSection} alt="" />
        </Div1>
        <Div2>
          <MainTitle>Text Title</MainTitle>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </MainText>
        </Div2>
      </Container>
    </Section>
  );
}

export default Feedback;
