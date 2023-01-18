import styled from "styled-components";

export const Test = styled.button`
  
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 20px;
    line-height: 24px;
  }
`;
