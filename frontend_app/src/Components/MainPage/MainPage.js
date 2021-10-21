import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setEmail, setVerified, selectUserData } from '../../Redux/Slices/userSlice';
import MiniDrawer from '../MaterialUI/MiniDrawer';

function MainPage() {
    let dispatch = useDispatch();
    let userData = useSelector(selectUserData);

    return (
        <div>
            <MiniDrawer />
        </div>
    )
}

export default MainPage;