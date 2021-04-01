import styled from 'styled-components';

export const StyledApp = styled.header`
  display:flex;
  justify-content: space-around;
  align-items:center;
  & h2{
    color: #98EA28;
    font-size:1.8rem;
    font-style:italic;
    text-decoration:none;
  }
  & nav{
    width: 50%;
    text-align:end;
  }
  & button{
    margin: 4% 0 4% 1%;
    width:fit-content;
    padding: 10px 3%;
    background-color:#98EA28;
    font-size: 1.2rem;
    border-radius: 10rem;
    border: 1px solid black;
    outline:none;
    transition: background-color .5s ease;
  }    
  & button:hover {
    transition: background-color 1s ease;
    background-color: #76bf13;
    cursor:pointer;
    }
  & .log{
    width:fit-content;
    padding: 10px 4%;
    background-color:#f2f2f2;
    font-size: 1.2rem;
    border-radius: 10rem;
    border: 1px solid black;
    outline:none;
    transition: background-color .5s ease;
    @media (max-width:1225px){
      width:fit-content;
      padding: 10px 4%;
    }
  }
   & .log:hover {
      transition: background-color 1s ease;
      background-color: #d6d6d6;
      cursor:pointer;
    }
`;
