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

const StyledP = styled.p`
    margin: 0;
`;

export default function Login(props) {
    const { newUser, change, submit, disable, errors } = props
    
    const onChange = (event) => {
        const {name ,value} = event.target;
        change(name, value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <StyledDiv>
            <h1>Sign Up</h1>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput 
                    name='username'
                    type='text'
                    value={newUser.username}
                    onChange={onChange}
                    placeholder='Username'
                />
                <StyledInput 
                    name='telephone'
                    type='tel'
                    value={newUser.telephone}
                    onChange={onChange}
                    placeholder='Enter a phone number'
                />
                <StyledInput 
                    name='password'
                    type='password'
                    value={newUser.password}
                    onChange={onChange}
                    placeholder='Create a password'
                />
                <StyledInput 
                    name='passwordConfirm'
                    type='password'
                    value={newUser.passwordConfirm}
                    onChange={onChange}
                    placeholder='Confirm your password'
                />
                <StyledButton disabled={disable}>Sign Up</StyledButton>
            </StyledForm>
            <StyledP>{errors.username}</StyledP>
            <StyledP>{errors.password}</StyledP>
            <StyledP>{errors.passwordConfirm}</StyledP>
        </StyledDiv>
    )
}