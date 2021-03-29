import styled from 'styled-components';

export const StyledPlantEditForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 1%;
	& .form-input-container {
		margin-top: 25px;
	}
	& input {
		width: 90%;
		height: 30px;
		font-size: 1.2rem;
		padding-left: 10px;
		margin-bottom: 25px;
		border-radius: 5px;
	}
	& .submit-btn {
		background-color: #4287f5;
	}
	& .cancel-btn {
		background-color: #757272;
	}
`;
