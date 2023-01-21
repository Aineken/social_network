import styled from "styled-components";

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(CenteredContainer)`
  width: 100%;
  min-height: 100%;
  margin: auto auto 50px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FormContainer = styled(CenteredContainer)`
  display: flex;
  padding: 20px 24px 20px 24px;
  text-align: left;
  width: 85%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 0px 15px -4px #000000;
  border-radius: 10px;
  display: ${(props) => (props.hidden ? "none" : "block")};

  @media (min-width: 800px) {
    width: 80%;
    max-width: 424px;
    padding: 19px 22px 19px;
  }
`;

export const Heading1 = styled.h1`
  font-size: 62px;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 6px;
  text-align: center;
  padding: 1rem;
`;

export const Heading2 = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin-block-start: 0;
`;
