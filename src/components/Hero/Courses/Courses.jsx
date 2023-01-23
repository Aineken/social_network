import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../../styles/GlobalComponents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MainDiv } from "./CoursesStyled";
import { projects } from "../../../constants/constants";
import CardContainer from "./Card/CardContainer";

function Courses() {
  return (
    <Section>
      <SectionDivider colorAlt />
      <SectionTitle>Popular Courses</SectionTitle>

      <SectionText endText>
        Watch all courses <ArrowForwardIosIcon sx={{ color: "#f53855" }} />
      </SectionText>
      <MainDiv>
        {projects.map((project, index) => {
          return <CardContainer key={index} {...project} />;
        })}
      </MainDiv>
      <SectionText endText>
        Watch all courses <ArrowForwardIosIcon sx={{ color: "#f53855" }} />
      </SectionText>
    </Section>
  );
}

export default Courses;
