import styled from 'styled-components';

export const StyledForms = styled.div`
    margin: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    & form {
        margin: auto;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    & input {
        margin-bottom: 2%;
        width: 150%;
        border-radius: 10rem;
        height: 20px;
        padding-left:5%;
    }
    & input:focus {
        outline: none;
    }
    & button {
        margin: 2% 0 4% 0;
        height: 25px;
        width:130%;
        outline:10rem;
        border-radius: 10rem;
        background-color: #f4f4f4;
        transition: background-color 1s ease;
    }
    & button:hover {
        background-color: #d6d6d6;
        transition: background-color 1s ease;
    }
    & p {
        margin: 0;
    }
    & .errors {
        color:red;
    }
`