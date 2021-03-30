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
        width: 120%;
        border-radius: 10rem;
        height: 20px;
        padding-left:5%;
    }
    & input:focus {
        outline: none;
    }
    & button {
        margin: 2% 0 4% 0;
    }
    & p {
        margin: 0;
    }
`;
