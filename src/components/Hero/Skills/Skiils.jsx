import React from "react";
import { datas } from "../../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../../styles/GlobalComponents";
import { Box, Card, CardText, CardTitle } from "./SkiilsStyled";

function Skiils() {
  return (
    <Section>
      <SectionDivider colorAlt />
      <SectionTitle>Skills</SectionTitle>
      <SectionText>Skill section information</SectionText>
      <Box>
        {datas.map((data) => {
          return (
            <Card image={data.image} key={data.id}>
              <CardTitle>{data.text}</CardTitle>
            </Card>
          );
        })}
      </Box>
    </Section>
  );
}

export default Skiils;
