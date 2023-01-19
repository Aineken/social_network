import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  border-bottom: 2px solid #f53855;
`;

export const HeaderDiv = styled.div`
  display: flex;
  grid-column-gap: 2rem;
  padding: 1rem 3rem;
  margin: auto;
  max-width: 1400px;
  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: 200px repeat(4, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 160px repeat(4, 1fr);
  }
`;
export const Div1 = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Div2 = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: space-between;
    align-items: center;
  }
`;

// Social Icons

// Navigation Links
export const NavLink = styled.div`
  font-size: 2.5rem;
  font-weight: ${(props) => (props.main ? "700" : null)};
  line-height: 32px;
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }

  img {
    width: 200px;
    height: 100px;
    object-fit: cover;
  }
  span {
    margin-left: 1rem;
    font-size: 2.5rem;
    font-weight: 500;
  }
  * {
    font-size: 20px;
  }
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(136.1deg, #ff4e50 24.18%, #1a116f 173.45%);
  border-radius: 10px;
  border: 0;
  height: 60px;
  width: 210px;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
  color: #fff;
  margin-right: 2rem;
  font-size: 2rem;
`;

export const RegisterButton = styled.button`
  font-weight: 600;
  margin-left: 2rem;
  font-size: 2.5rem;
  color: #f53855;
  height: 60px;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f53855;
  box-sizing: border-box;
  border-radius: 50px;
  transition: all 0.3s;
  background-color: transparent;
  :hover {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;
