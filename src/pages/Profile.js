import React, { useContext } from 'react';
import { UserContext } from "../providers/UserProvider.js";
import {auth} from "../firebaseConfig.js";

const Profile = () => {
    const user = useContext(UserContext);
    const {displayName, email} = user;
    return (
        <div>
            <p>Profile page</p>
            <p>{displayName}</p>
            <p>{email}</p>
            <p>Profile page</p>
            <button onClick = {() => {auth.signOut()}}>Sign out</button>
            {/* {
                !user 
                    ? <Login/> 
                    : <div/>
            } */}
        </div>
        
    );
}

export default Profile;