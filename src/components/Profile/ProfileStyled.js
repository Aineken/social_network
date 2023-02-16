import styled from "styled-components";


export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;


export const ProfileInfoDiv = styled.div`
  margin: auto;
 display: grid;
  place-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  gap: 2rem;
  background-color: aliceblue;
  border-radius: 10px;
  img{
    width: 150px;
  }
  div{
    margin-top: 2rem;
    display: grid;
    padding: 2rem 1rem;
    border-radius: 10px;
    border: 2px solid black;
    text-align: center;
  }
  
`;
export const ProfileStatusDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

