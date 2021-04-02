import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const ChangeUserPass = ({user, setChanging, changeUserPass}) => {
    const initialPasswordState = {
        password: user.password
    }

    const [password, setPassword] = useState(initialPasswordState);
    
    const handleChange = (event) =>{
        const value = event.target.value;
		setPassword({ ...password, [event.target.name]: value });
    }
    
    const handleChangePassword = (event) => {
        event.preventDefault();
        console.log('userid: ', user.userid)
        axiosWithAuth()
             .put(`/api/users/user/${user.userid}`, password)
             .then((response) => {
                 console.log(password);
                 changeUserPass(response.data.password);
                 setChanging(false);
             })
             .catch((error) => {
                 console.error(error);
             })
    }

    return (
        <>
            <form onSubmit={handleChangePassword}>
                <input
                    name='phonenumber'
                    type='password'
                    value={password.password}
                    onChange={handleChange}
                />
                <button>Change</button>
            </form>
        </>
    )

}
export default ChangeUserPass;