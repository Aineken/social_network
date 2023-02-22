import styled from "styled-components";


export const DialogsDiv = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 30px;
  padding: 0 50px;
  //width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    gap: 20px;
    padding: 0 2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
  }
`;

export const DialogItemsDiv = styled.div`
  width: 100%;
  //max-width: max-content;
  border-radius: 10px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: max-content;
  text-decoration: none;
  color: #000;
  
  a{
    color:#000;
    font-size: 20px;
    :hover,:active{
    color: gold;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: 16px;
    }
  }
  .active{
    color: gold;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width:max-content;
    
  }
`;
export const MessagesDiv = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
export const MessageDiv = styled.div`
display: flex;
  flex-direction: column;
  gap:1rem;
    
`;