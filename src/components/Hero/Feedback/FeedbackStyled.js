import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 500px;
  border-radius: 2rem;
  overflow: hidden;
  margin-bottom: 50px;
`;

export const Div1 = styled.div`
  display: flex;
  grid-column-gap: 2rem;
  padding: 0;
  width: 100%;

  background-color: aliceblue;
  img {
    width: 100%;
    object-fit: cover;
  }
  border-left: 1px solid #fff;
`;
export const Div2 = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
  width: 100%;
`;

export const MainTitle = styled.h4`
  color: ${(props) => props.theme.colors.primary};
  font-size: 36px;
`;

export const MainText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 28px;
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
  :hover {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;
