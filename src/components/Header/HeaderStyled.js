import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  border-bottom: 1px solid #e0e0e0;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: auto;
  width: 100%;
  max-width: 1400px;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    margin-right: 0;
    padding: 0.5rem;
  }
  
  
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.5rem;
  }
`;



// Navigation Links
export const NavLink = styled.div`
  position: relative;
  font-size: 2.5rem;
  font-weight: ${(props) => (props.logo ? "500" : null)};
  line-height: 32px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.3s ease;
  left: 0;
  &:hover {
    left: ${(props) => props.logo && "6px"};
    cursor: pointer;
  }
  img {
    height: 70px;
    object-fit: cover;
    @media ${(props) => props.theme.breakpoints.md} {
      height: 50px;
    }
  }
  span {
    margin-left: 2rem;
    font-size: ${(props) => (props.logo ? "26px" : "24px")};
    @media ${(props) => props.theme.breakpoints.md} {
      font-size: ${(props) => (props.logo ? "20px" : "18px")};
     
    }
  }
`;



export const HeaderButton = styled.button`
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
  border-radius: 10px;
  transition: all 0.3s;
  background-color: transparent;
  :hover {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 40px;
    font-size: 2rem;
    
    
  }
`;
