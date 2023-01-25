import styled from "styled-components";

export const NavbarMenus = styled.ul`
  display: flex;
  justify-content: center;
  background: linear-gradient(136.1deg, #ff4e50 24.18%, #1a116f 173.45%);
  border-radius: 10px;
  border: 0;
  width: 200px;
  height: 60px;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
  color: #fff;
  font-size: 2.2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 2rem;
    width: 100%;
    height: 50px;
  }
`;
