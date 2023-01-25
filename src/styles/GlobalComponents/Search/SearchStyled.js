import styled from "styled-components";

export const SearchWrapper = styled.form`
  height: 60px;
  background: #ecf0f3;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: all 0.3s;

  :hover {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 50px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0 10px;
  font-weight: 400;
  font-size: 18px;
  color: #0b132a;
  border: 0;
  background: transparent;
  text-decoration: none;
`;

export const SearchButton = styled.button`
  border: 0;
  background: transparent;
  text-decoration: none;
`;