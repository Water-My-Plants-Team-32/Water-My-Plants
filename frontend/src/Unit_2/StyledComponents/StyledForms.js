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
    }
    & p {
        margin: 0;
    }
    & a {
        font-size:.9rem;
    }
`