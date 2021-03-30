import styled from 'styled-components';



export const StyledHome = styled.div`
    background-image: url('https://images.unsplash.com/photo-1550948390-6eb7fa773072?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-top: 1px solid black;
    height: 90vh;
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
        font-size: 3.5rem;
        font-style: italic;
        text-align:center;
        color: #4291f5;
        text-shadow: 2px 2px white;
    }
    & button{
        margin-right:20px;
        padding: 16px 42px;
        box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
        line-height: 1.25;
        background: #98EA28;
        text-decoration: none;
        color: white;
        font-size: 16px;
        letter-spacing: .08em;
        text-transform: uppercase;
    } & footer{
        margin: 1%;
        justify-content: flex-start;
    }
    
`;
