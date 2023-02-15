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
  display: flex;
  justify-content: space-evenly;
  @media ${(props) => props.theme.breakpoints.md} {
    padding-top: 210px;
  }
`;

export const FormContainer = styled(CenteredContainer)`
  padding: 20px 24px 20px 24px;
  text-align: left;
  width: 85%;
  height: 100%;
  background-color: white;
  box-shadow: 1px 0 15px -4px #000000;
  border-radius: 10px;
  display: ${(props) => (props.hidden ? "none" : "block")};

  @media (min-width: 800px) {
    width: 80%;
    max-width: 424px;
    padding: 19px 22px 19px;
  }
`;


export const LoginStyled = styled.form`
  width: 100%;
  margin-top: 12px;
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
  .error{
    outline: none;
    box-shadow: #b00020 0 0 2px 2px;
  }
 
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
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
  
  //&:focus:invalid {
  //  outline: none;
  //  box-shadow: #b00020 0 0 2px 2px;
  //}
  
`;

export const RememberDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border: 0;
  margin-top: 12px;
  
  span{
    margin-left: 1rem;
  }
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  border: 0;
  margin-bottom: 2rem;

  p {
    font-size: 14px;

  }

  .red {
    color:red;
    line-height: 20px;
  }
`;


