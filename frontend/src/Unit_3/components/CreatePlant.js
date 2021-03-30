import React, { useState, useEffect } from "react";
//import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledForm = styled.form`
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
  button {
    align-self: center;
  }
`;
const ContainerDiv = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const initialState = {
  nickname: "",
  species: "",
  h2oFrequency: ""
};



const CreatePlant = () => {
  const [form, setForm] = useState(initialState);
  const [currentUser, setCurrentUser] = useState({});
//   const [file, setFile] = useState(null);
  const history = useHistory();

  // useEffect(() => {
  //     axiosWithAuth()
  //         .get()
  //         .then()
  //         .catch()
  // })

  const changeHandler = (event) => {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
    //setFile(event.target.files[0]);
    console.log(value);
  };

  const submitAddPlant = (e) => {
    e.preventDefault();
    const addPlant = {
      plantId: new Date(),
      nickname: form.nickname,
      species: form.species,
      h2oFrequency: form.h2oFrequency
    };
    console.log(addPlant);
    // axiosWithAuth()
    //   .post("/plants/plant", addPlant)
    //   .then((res) => {
    //     console.log(res);
    //     history.push("/plantlist");
    //   })
    //   .catch((err) => console.log(err));
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
          <input
            type="text"
            name="h2ofrequency"
            value={form.h2oFrequency}
            onChange={changeHandler}
          />
        </label>
        {/* <label>
          Image (Optional):
          <input type="file" name="img" />
        </label> */}

        <button>Add Plant</button>
      </StyledForm>
    </ContainerDiv>
  );
};

export default CreatePlant;