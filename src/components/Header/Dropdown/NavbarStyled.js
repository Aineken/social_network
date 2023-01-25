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
    width: 100%;
    height: 50px;
  }
`;


export const Items = styled.li`
  margin: auto;
  height: 60px;
  display: inherit;
  
  a{
    display: block;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    height: 100%;
  }
  
  .dropdown {
    position: absolute;
    width: 300px;
    top: 60px;
    left: 0;
    z-index: 9999;
    list-style: none;
    background-color: #f2f2f2;
    color: #000;
    display: none;
  }

  .dropdown.show {
    display: block;
  }

  .dropdown.dropdownSubmenu {
    position: absolute;
    width: 100%;
    left: 100%;
    top: 0px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
  
  }
`;


export const ItemButton = styled.button`
  display: flex;
  justify-content: space-between;
  place-items: center;
  text-decoration: none;
  text-align: left;
  padding: 0.7rem 1rem;
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  height:100%;

  :hover{
    background-color: ${props=> !props.main&&"#fff" };
  }

  @media ${(props) => props.theme.breakpoints.md} {
  
  }
`;

