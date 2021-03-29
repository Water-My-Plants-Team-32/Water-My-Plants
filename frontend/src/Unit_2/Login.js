import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const StyledForm = styled.form`
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
    const { user, change, submit } = props;
    
    const onChange= (event) => {
        const { name, value } = event.target
        change(name, value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <StyledDiv>
            <h1>Login</h1>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput 
                    name='username'
                    type='text'
                    value={user.username}
                    onChange={onChange}
                    placeholder='Username'
                />
                <StyledInput 
                    name='password'
                    type='text'
                    value={user.password}
                    onChange={onChange}
                    placeholder='Password'
                />
                <StyledButton>Login</StyledButton>
            </StyledForm>
        </StyledDiv>
    )
}