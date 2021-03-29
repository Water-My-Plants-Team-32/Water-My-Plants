import axios from "axios";

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem("token");
    console.log(token);

    return axios.create({
        headers:{
            Authorization: token,
        },
        //baseURL: 'http://localhost:5000/api',
    });
};