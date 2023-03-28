import styled from "styled-components";
import tw from "twin.macro";



type MessageTextType = {
  main ?: boolean
}

export const DialogsDiv = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 30px;
  padding: 0 50px;
  width: 100%;
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
  border-radius: 10px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;
  height: max-content;
  text-decoration: none;


  a {
    color: #000;

    :hover, :active {
      color: gold;
    }
  }

  .active {
    color: gold;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: max-content;

  }
`;
export const MessagesDiv = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 400px;

  ${
      tw`
      
    rounded-2xl
    bg-blue-500
    
    `
  }
`;
export const MessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;


///Dialogs
export const DialogImg = styled.img`
  float: left;
  width: 50px;
  border-radius: 100%;
  cursor: pointer;
`;
export const DialogDiv = styled.div`
  display: flex;
  height: max-content;
  gap: 1rem;
  flex-direction: row;
  align-items: center;
  align-content: center;

  a {
    overflow-wrap: anywhere;
    font-size: 16px;
  }
`;

export const MessageText = styled.div<MessageTextType>`
  display: flex;
  width: 100%;
  align-content: start;

  gap: 1rem;
  justify-content: ${props => props.main ? "end" : "start"};
  flex-direction: ${props => props.main ? "row" : "row-reverse"};

  div {
    text-align: ${props => props.main ? "right" : "left"};
    width: fit-content;
    border: 1px dotted red;
    padding: 8px;
    border-radius: 10px;
  }

  span {
    color: #fff;
    display: flex;
    position: relative;
    place-items: center;
    border-radius: 10px;
    padding: 0 12px;
    width: max-content;
    height: 30px;
    background-color: #f53855;
    transition: all 1s;


    :hover::after {
      left: 4rem;
      position: absolute;
      align-self: center;
      content: "️🗑️";
      width: max-content;
    }
  }
`;



