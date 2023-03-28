import styled from "styled-components";
import tw from "twin.macro";
import theme, {ThemeType} from "../../theme";

export const Container = styled.div`
  display: grid;
  height: 100%;
  max-height: 450px;
  border-radius: 2rem;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  //margin-bottom: 50px;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 0;
    max-height: 100%;

  }
  @media ${(props:ThemeType) => props.theme.breakpoints.sm} {
  }

`;

export const Div1 = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
    object-position: right bottom;
    max-height: 450px;;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
  }
`;
export const Div2 = styled.div`
  ${tw`
text-black bg-blue-400




  `};
  display: grid;
  place-items: center;
  place-content: center;
  gap: 1rem;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 50px 30px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;

    padding: 30px 20px;
    gap: 1rem;

  }
`;

export const MainTitle = styled.h4`
  color: #fff;
  font-size: 36px;
  text-align: center;
`;

export const MainText = styled.p`
  color: #fff;
  font-size: 28px;
  line-height: 36px;
  text-align: center;

`;
