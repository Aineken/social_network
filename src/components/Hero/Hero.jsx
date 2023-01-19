import React from "react";
import Courses from "./Courses/Courses";
import Feedback from "./Courses/Feedback/Feedback";
import MainSection from "./MainSection/MainSection";
import Skiils from "./Skills/Skiils";

function Hero() {
  return (
    <>
      <MainSection />
      <Courses />
      <Skiils />
      <Feedback />
    </>
  );
}

export default Hero;
