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
    width: 120%;
`;

const StyledButton = styled.button`
    margin: 2% 0 4% 0;
`;

export default function Login(props) {
    const { newUser, change } = props
    
    const onChange = (event) => {
        const {name ,value} = event.target;
        change(name, value)
    }

    return (
        <StyledDiv>
            <h1>Sign Up</h1>
            <StyledForm>
                <StyledInput 
                    name='username'
                    type='text'
                    value={newUser.username}
                    onChange={onChange}
                    placeholder='Username'
                />
                <StyledInput 
                    name='password'
                    type='password'
                    value={newUser.password}
                    onChange={onChange}
                    placeholder='Create a password'
                />
                <StyledButton>Sign Up</StyledButton>
            </StyledForm>
        </StyledDiv>
    )
}