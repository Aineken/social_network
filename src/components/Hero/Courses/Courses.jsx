import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../../styles/GlobalComponents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Courses() {
  return (
    <Section>
      <SectionDivider colorAlt />
      <SectionTitle>Popular Courses</SectionTitle>

      <SectionText endText>Watch all courses</SectionText>
    </Section>
  );
}

export default Courses;
