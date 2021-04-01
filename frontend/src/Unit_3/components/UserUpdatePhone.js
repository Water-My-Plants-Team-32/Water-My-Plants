import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const UserUpdatePhone = ({user, setIsUpdating, updateUserPhone}) => {
    const initialPhoneState = {
        phonenumber: user.phonenumber
    }

    const [phone, setPhone] = useState(initialPhoneState);
    const history = useHistory();

    const handleChange = (event) =>{
        const value = event.target.value;
		setPhone({ ...phone, [event.target.name]: value });
    }
    
    const handleUpdate = (event) => {
        event.preventDefault();
        console.log('userid: ', user.userid)
        axiosWithAuth()
             .put(`/api/users/user/${user.userid}`, phone)
             .then((response) => {
                 console.log(response);
                 updateUserPhone(response.data);
                 setIsUpdating(false);
             })
             .catch((error) => {
                 console.error(error);
             })
    }

    return (
        <>
            <form onSubmit={handleUpdate}>
                <input
                    name='phonenumber'
                    type='tex'
                    value={phone.phonenumber}
                    onChange={handleChange}
                />
                <button>Update</button>
            </form>
        </>
    )

}
export default UserUpdatePhone;