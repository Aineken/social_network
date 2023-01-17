import styled, { keyframes } from "styled-components";
export const MainContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  padding: 3rem 2rem;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #678983;
  border-radius: 5px;
  width: 100%;
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  border-bottom: 2px solid #e6ddc4;
`;
export const DivTable = styled.div`
  width: 100%;
  display: flex;

  padding: 1rem;
`;

//Table data
export const PostsTable = styled.table`
  width: 100%;
  color: rgb(0, 0, 0);
  border-radius: 5px;
  background-color: beige;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
    overflow-x: scroll;
  }
`;

export const TableHead = styled.thead``;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
  .fixed-side {
  }
`;
export const HeadData = styled.th`
  font-size: 18px;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 16px;
  }
`;
export const BodyData = styled.td`
  padding: 0.5rem;
  font-size: 16px;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 14px;
    padding: 0.2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    white-space: nowrap;
  }
`;

export const PostsTitle = styled.h4`
  color: #f0e9d2;
  font-size: 30px;
  line-height: 34px;
  width: max-content;
  margin: 0 1em;
  padding: 0.25em 0;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 24px;
    line-height: 28px;
  }
`;
