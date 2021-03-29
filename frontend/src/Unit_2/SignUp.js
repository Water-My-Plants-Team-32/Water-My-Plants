import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const StyledForm = styled.div`
    margin: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const StyledInput = styled.input`
    margin-bottom: 2%;
`;

export default function Login(props) {
    return (
        <StyledDiv>
            <h1>Sign Up</h1>
            <StyledForm>
                <StyledInput 
                    name=''
                    type=''
                    value=''
                    onChange=''
                    placeholder='Username'
                />
                <StyledInput 
                    name=''
                    type=''
                    value=''
                    onChange=''
                    placeholder='Create a password'
                />
            </StyledForm>
        </StyledDiv>
    )
}