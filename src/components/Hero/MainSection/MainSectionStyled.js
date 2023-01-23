import styled from "styled-components";

export const Container = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  height: 500px;
  border-radius: 2rem;
  overflow: hidden;
  background: linear-gradient(136.1deg, #ff4e50 24.18%, #1a116f 173.45%);
  margin-bottom: 50px;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
    margin-top: 240px;
    height: 100%;
  }
`;

export const Div1 = styled.div`
  display: flex;
  grid-column-gap: 2rem;
  padding: 0;
  width: 100%;
  max-width: 50%;
  img {
    width: 100%;
  }
  border-left: 1px solid #fff;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
  }
`;
export const Div2 = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 50px 30px;
  }
`;

export const MainTitle = styled.h4`
  color: #fff;
  font-size: 36px;
`;

export const MainText = styled.p`
  color: #fff;
  font-size: 28px;
`;
