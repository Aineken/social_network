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
  gap: 1rem;
  background-color: aliceblue;
  border-radius: 10px;
  img{
    width: 150px;
  }
  
`;
export const ProfileStatusDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid black;
  text-align: center;

`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  
`;
export const ProfileText = styled.p`
 color: #ff2d55;
  font-size: 16px;
  text-align: center;
  
`;



