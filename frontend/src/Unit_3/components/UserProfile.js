import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth }from '../utils/axiosWithAuth';
import UserUpdatePhone from './UserUpdatePhone';
import ChangeUserPass from './ChangeUserPass';


const UserProfile = () => {
    const [user, setUser] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false)
    const [isChanging, setChanging] = useState(false)
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
		setUser({...user, phonenumber: newPhone});
	};

    const handleUpdate = () => {
        setIsUpdating(!isUpdating)
    };

    const changeUserPass = (newPass) => {
        setUser({...user, password: newPass});
    };

    const handleChangePass = () => {
        console.log("clicked")
        setChanging(!isChanging)

    };

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
                <div>
                {isChanging ? (
                        <ChangeUserPass 
                            key={user.userid}
                            user={user}
                            setChanging={setChanging}
                            changeUserPass={changeUserPass}
                        />
                    ):(
                        <>
                            <button onClick={handleChangePass}>Change Password</button>
                        </>
                    )}
                </div>
            </div>
            <div className="buttons">                
                <button onClick={handeleCancel}>Cancel</button>
            </div>
        </div>
    )
}

export default UserProfile;