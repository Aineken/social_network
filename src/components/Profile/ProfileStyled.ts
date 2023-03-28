import styled from "styled-components";
import tw from "twin.macro";


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

  img {
    ${tw`
w-7/12
rounded-3xl


`}
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

export const ProfileInfoContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;

  button {
    ${tw`self-center
  
  duration-500
   bg-blue-400 hover:bg-blue-700 font-bold text-white w-max px-6 py-3 rounded `}
  }

`;
export const ProfileText = styled.p`
  ${tw`
  text-yellow-300
  hover:text-blue-400
  border-b-green-200
  text-left
  leading-8
 
  `}
`;



