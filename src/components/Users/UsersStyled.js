import styled from "styled-components";


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  
`;


export const SecContainer = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;

  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
