import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth }from '../utils/axiosWithAuth';
import UserUpdatePhone from './UserUpdatePhone';


const UserProfile = () => {
    const [user, setUser] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false)
    const history = useHistory()

    useEffect(() => {
        axiosWithAuth()
			.get('/api/users/getuserinfo')
			.then((response) => {
                console.log(response.data)
				setUser(response.data);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
    },[])

    const updateUserPhone = (newPhone) => {
		// const newPhonenumber = user.map((info) => {
		// 	if (info.userid === newPhone.userid) {
		// 		return newPhone;
		// 	}
		// 	return user;
		// });
        const newPhonenumber = user.phonenumber
        if(user.userid === newPhone.userid){
            return newPhone
        }
		setUser(newPhonenumber);
	};

    const handleUpdate = () => {
        setIsUpdating(!isUpdating)
    }

    const handeleCancel = (event) => {
        event.preventDefault();
        history.push("/plants");
    }

    return(
        <div>
            <h2> User Profile </h2>
            <div>
                <p>User Name: {user.username}</p>
            <div className="phoneNumber">
                {isUpdating ? (
                    <UserUpdatePhone 
                        key={user.userid}
                        user={user}
                        setIsUpdating={setIsUpdating}
                        updateUserPhone={updateUserPhone}
                    />
                ):(
                    <>
                        <p>Phonenumber: {user.phonenumber}</p>
                        <button onClick={handleUpdate}>Update Phonenumber</button>
                    </>
                )}
            </div>

            </div>
            <div className="buttons">
                <div className="changePass"></div>
                <button>Change Password</button>
                <button onClick={handeleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default UserProfile;