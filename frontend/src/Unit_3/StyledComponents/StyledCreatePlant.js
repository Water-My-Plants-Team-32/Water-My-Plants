import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 600px;
  height: 300px;
  border: 3px solid #679707;
  display: flex;
  flex-flow: column nowrap;
  background-color: RGB(255, 255, 255, 0.85);
  align-items: flex-end;
  justify-content: space-evenly;
  margin: 20px;
  input {
    width: 400px;
    margin-right: 50px;
  }
  select {
    width: 367px;
    height: 30px;
    margin-right: 90px;
    margin-bottom: 25px;
}
  button {
    align-self: center;
  }
`;
export const ContainerDiv = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;