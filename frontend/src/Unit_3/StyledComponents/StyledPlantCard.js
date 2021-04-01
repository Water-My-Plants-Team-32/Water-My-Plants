import styled from 'styled-components';

export const StyledPlantCard = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 35%;
	min-width: 350px;
	max-width: 385px;
	padding: 1%;
	font-size: 2rem;
	border: 2px solid #22222233;
	border-radius: 10px;
	margin-bottom: 30px;
	/* height: 45%; */
	/* max-height: 250px; */
	background: #03fc6211;
	& h2 {
		font-size: 2.3rem;
		margin: 0;
	}
	& h3 {
		font-size: 1.5rem;
	}
	& img {
		width: 90px;
		border-radius: 3px;
	}
	& p {
		font-size: 1.2rem;
	}
	& .card-btn-container {
		width: 75%;
		min-width: 75px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	& .card-btn-container button {
		width: 45%;
		height: 50px;
		border-radius: 30px;
		font-size: 1.2rem;
		color: #eee;
		cursor: pointer;
		border: none;
	}

	& .card-btn-container button.edit {
		background-color: #4287f5;
	}
	& .card-btn-container button.delete {
		background-color: #f54242;
	}
`;
