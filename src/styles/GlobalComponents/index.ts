import styled, { keyframes } from "styled-components";
import {ThemeType} from "../../theme";
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1400px;
  width: 100%;
  margin: auto;
`;
export const MainDiv = styled.div`
  width: 100%;
  padding: 150px 2rem 1rem;
  display: grid;
  grid-template-columns: 200px 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    
  }
  
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Spinner = styled.div<ThemeType>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;


type SectionPropsType={
    row?:boolean
    nopadding?:boolean
    grid?:boolean
}
export const Section = styled.section<SectionPropsType>`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1400px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px 16px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;



type SectionTitlePropsType={
    main?:boolean
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "75px" : "66px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(136.1deg, #ff4e50 24.18%, #1a116f 173.45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "60px" : "52px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

type SectionTextPropsType={
    endText?:boolean
}
export const SectionText = styled.p<SectionTextPropsType>`
  width: 100%;
  font-size: 28px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  text-align: ${(props) => (props.endText ? "end" : "start")};
  color: #f53855;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;


type SectionDividerPropsType={
    colorAlt?:boolean
    divider?:boolean
}
export const SectionDivider = styled.div<SectionDividerPropsType>`
  margin-bottom: 1rem;
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(136.1deg, #ff4e50 24.18%, #1a116f 173.45%)"};

  margin: ${(props) => (props.divider ? "4rem 0" : "")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }
`;



export const Button = styled.button`
  margin: 1rem 0;
  padding: 1rem 3rem;
  background-color: #fff;
  border-radius: 10px;
  width: max-content;
  
  border: 1px solid #000;
  @media ${(props) => props.theme.breakpoints.md} {
   
  }
`;



