import styled from "styled-components";

export const Container = styled.section`
  display: block;
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 36px 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
`;

export const LinkLists = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  gap: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 5rem;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
  }
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  width: 100%;
  margin-bottom: 5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 3rem;
  }
`;

export const ListTitle = styled.p`
  font-weight: ${(props) => (props.regular ? "regular" : "700")};
  font-size: 18px;
  line-height: 28px;
`;

export const ListText = styled.a`
  margin-top: 8px;
  font-size: 16px;
  color: white;
  line-height: 26px;

  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
  }
`;

export const BottonLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    flex-direction: column;
    row-gap: 5px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    row-gap: 5px;
  }
`;
