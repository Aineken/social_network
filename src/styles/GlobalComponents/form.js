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
  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 210px;
  }
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
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 32px;
  }
`;

export const Button = styled.button`
  border: 0;
  color: white;
  font-weight: bold;
  width: 100%;
  margin-top: 12px;
  height: 60px;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(136.1deg, #ff4e50 24.18%, #1a116f 173.45%);

  &:hover {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;
export const Field = styled.div`
  width: 100%;
  position: relative;
  margin-top: 12px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-size: 14px;
`;
export const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.colors.primary};
  background-color: #97c6c126;
  border: 0;
  margin-top: 12px;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;

  &:focus:invalid {
    outline: none;
    box-shadow: #b00020 0px 0px 2px 2px;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 12px;
`;

export const List = styled.ul`
  list-style: disc;
  list-style-position: inside;
  padding-inline-start: 0;
  font-size: 14px;
  color: #2b3046ab;
`;
