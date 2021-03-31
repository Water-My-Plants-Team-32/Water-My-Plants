import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import {
	StyledForm,
	ContainerDiv,
} from '../StyledComponents/StyledCreatePlant';

const initialState = {
  nickname: "",
  species: "",
  h2ofrequency: ""
};

const CreatePlant = () => {
	const [form, setForm] = useState(initialState);
	const [user, setUser] = useState({});
	const history = useHistory();


	useEffect(() => {
		axiosWithAuth()
			.get('/api/users/getuserinfo')
			.then((response) => {
				setUser(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const changeHandler = (event) => {
		const value = event.target.value;
		setForm({ ...form, [event.target.name]: value });
	};

  const submitAddPlant = (e) => {
    e.preventDefault();
    const addPlant = {
      nickname: form.nickname,
      species: form.species,
      h2ofrequency: form.h2ofrequency
    };
    
    axiosWithAuth()
      .post(`/api/plants/plant/${user.userid}`, addPlant)
      .then((res) => {
        history.push("/plants");
       })
      .catch((err) => console.log(err));
  };

  return (
    <ContainerDiv>
      <h2 style={{ color: "white" }}>Add Your Plant</h2>
      <StyledForm onSubmit={submitAddPlant}>
        <label>
          Nick Name: 
          <input
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={changeHandler}
          />
        </label>
        <label>
          Speices: 
          <input
            type="text"
            name="species"
            value={form.species}
            onChange={changeHandler}
          />
        </label>
        <label>
          h2oFrequency: 
          <select
            name='h2ofrequency'
            value={form.h2ofrequency} 
            onChange={changeHandler}   
          >
            <option value=''>--Please choose an option--</option>
            <option value='daily'>Daily</option>
            <option value='twice-daily'>Twice daily</option>
            <option value='weekly'>Weekly</option>
            <option value='twice-weekly'>Twice weekly</option>
            <option value='monthly'>Monthly</option>
            <option value='twice-monthly'>Twice Monthly</option>
            <option value='bimonthly'>Bimonthly</option>
            <option value='never'>never</option>
          </select>
        </label>
        <button>Add Plant</button>
      </StyledForm>
    </ContainerDiv>
  );

};

export default CreatePlant;
