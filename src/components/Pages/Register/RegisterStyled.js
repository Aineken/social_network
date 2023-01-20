import styled from "styled-components";

export const List = styled.ul`
  list-style: disc;
  list-style-position: inside;
  padding-inline-start: 0;
  font-size: 14px;
  color: var(--theme-grey-light);
`;
export const Icon = styled.i`
  position: absolute;
  top: 43px;
  left: 9px;
  fill: var(--theme-blue);
`;

export const Button = styled.button`
  border: 0;
  background-color: var(--theme-orange-light);
  color: white;
  font-weight: bold;
  width: 100%;
  margin-top: var(--theme-gutter-top);
  padding: 8px;
  height: 45px;
  font-size: 20px;
  cursor: pointer;
  border-radius: var(--theme-border-rounded);
  &:focus {
    outline: none;
    box-shadow: var(--theme-blue) 0px 0px 2px 2px;
  }
  &:hover {
    background-color: var(--theme-orange);
  }
`;
export const Field = styled.div`
  width: 100%;
  position: relative;
  margin-top: var(--theme-gutter-top);
`;

export const Label = styled.label`
  color: var(--theme-grey);
  font-size: 14px;
`;
export const Input = styled.input`
  width: 100%;
  color: var(--theme-grey);
  background-color: var(--theme-blue-light);
  border: 0;
  margin-top: var(--theme-gutter-top);
  padding: 15px 10px 15px 42px;
  box-sizing: border-box;
  border-radius: var(--theme-border-rounded);
  &:focus {
    outline: none;
    box-shadow: var(--theme-blue) 0px 0px 2px 2px;
  }
  &:focus:invalid {
    outline: none;
    box-shadow: var(--theme-error) 0px 0px 2px 2px;
  }
`;

export const Heading1 = styled.h1`
  font-family: "Raleway", Sans-serif;
  font-size: 62px;
  letter-spacing: 0.5px;
  color: var(--theme-grey);
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

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(CenteredContainer)`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.light ? "var(--theme-blue)" : "var(--theme-grey)"};

  margin: auto;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 800px) {
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    width: ${(props) => (props.small ? "50%" : "100%")};
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
  border-radius: var(--theme-border-rounded);
  display: ${(props) => (props.hidden ? "none" : "block")};

  @media (min-width: 800px) {
    width: 80%;
    max-width: 424px;
    padding: 19px 22px 19px;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: var(--theme-gutter-top);
`;
