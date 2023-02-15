import styled from "styled-components";


export const PaginationContainer = styled.div`
display: flex;
  gap: 1rem;
    width: max-content;
  align-items: center;
  padding: 5px 10px;
  background-color: aliceblue;
  border-radius: 10px;
  margin-bottom: 2rem;
  span{
    font-size: 20px;
    width: 100%;
    max-width: 20px;
    
  }
  button{
    padding: 4px 6px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 10px;
    width: 100%;
  }
  .active{
    font-weight: 700;
    transform: scale(1.2);
  }
`;