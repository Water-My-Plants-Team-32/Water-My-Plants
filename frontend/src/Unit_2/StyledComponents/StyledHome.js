import styled from 'styled-components';

export const StyledHome = styled.div`
    background-image: url('https://images.unsplash.com/photo-1550948390-6eb7fa773072?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 80vh;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:flex-end;
    & div{
        display:flex;
        flex-direction: column;
        align-items:center;
        height:60vh;
        justify-content:space-around;        
    }
    & h1{
        font-size: 3rem;
        font-style: italic;
        color: orange;
    }
    & button{
        font-size:1.2rem;
        color: black;
        width:fit-content;
        background-color: white;
        border: 2px solid black;
        border-radius:10rem;
        align-self:center;
        padding:10px 20px;
    }
`;
