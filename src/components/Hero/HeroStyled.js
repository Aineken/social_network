import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 500px;
  border-radius: 2rem;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: linear-gradient(136.1deg, #ff4e50 24.18%, #1a116f 173.45%);
  margin-bottom: 50px;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top:100px;
    flex-direction: column;
    height: 100%;
  }
`;

export const Div1 = styled.div`
  display: flex;
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
    object-position: right bottom;
    
  ;
  }

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
  line-height: 36px;
`;
