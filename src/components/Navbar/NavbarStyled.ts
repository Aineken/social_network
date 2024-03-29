import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  height: max-content;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction:row;
    justify-content: center;
    overflow: auto;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-size: 26px;
  a{
    text-decoration: none;
    color: #000;
    :active,:hover{
      color: gold;
    }
  }
  .active{
    color: gold;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    padding: 0.5rem;
    font-size: 20px;
    gap: 0.5rem;
  }
`;



