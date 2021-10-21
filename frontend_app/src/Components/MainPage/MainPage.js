import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setEmail, setVerified, selectUserData } from '../../Redux/Slices/userSlice';

function MainPage() {
    let dispatch = useDispatch();
    let userData = useSelector(selectUserData);
    console.log(userData)

    return (
        <div>
            <h1>MainPage and ProtectedRoute</h1>

            <p>{JSON.stringify(userData)}</p>

            {/* <button onClick={()=>{dispatch(setUserName('ali'))}}>userName</button>

            <button onClick={()=>{dispatch(setEmail('ali'))}}>email</button>

            <button onClick={()=>{dispatch(setVerified(true))}}>ver</button> */}


        </div>
    )
}

export default MainPage;