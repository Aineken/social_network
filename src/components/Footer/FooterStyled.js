import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 999;
  background: linear-gradient(136.1deg, #ff4e50 24.18%, #1a116f 173.45%);
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  /* padding: 1rem 0 4rem; */
  justify-content: flex-start;
  margin: 2rem auto;
  padding: 1rem 2rem;

`;

export const LinkLists = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  width: 100%;
  margin-bottom: 5rem;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 3rem;
  }
`;

export const ListTitle = styled.p`
  color: ${(props) => props.theme.colors.accent1};
  font-weight: ${(props) => (props.regular ? "500" : "700")};
  font-size: 22px;
  line-height: 28px;
`;

export const ListText = styled.a`
  margin-top: 8px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.accent1};
  line-height: 26px;

  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    left: 6px;
  }
`;
