import styled from "styled-components";

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
