import styled from "styled-components";


export const PaginationContainer = styled.div`
display: flex;
  gap: 1rem;
    width: max-content;
  padding: 5px 10px;
  background-color: aliceblue;
  border-radius: 10px;
  margin-bottom: 2rem;
  span{
    font-size: 20px;
  }
  .active{
    font-weight: 700;
 
    transform: scale(1.2);
  }
`;