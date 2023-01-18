import styled from "styled-components";

export const PostsButton = styled.button`
  background: transparent;
  font-size: 24px;
  line-height: 30px;
  border-radius: 5px;
  border: 2px solid #f0e9d2;
  color: #f0e9d2;
  margin: 0 1em;
  padding: 0.25em 1em;
  :hover {
    background-color: ${(props) => props.theme.colors.background1};
    transition: 0.7s;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 20px;
    line-height: 24px;
  }
`;
