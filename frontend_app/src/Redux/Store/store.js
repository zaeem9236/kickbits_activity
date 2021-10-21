
import { configureStore } from '@reduxjs/toolkit';

import countSlice from '../Slices/countSlice';
import userSlice from '../Slices/userSlice';


export default configureStore({
    reducer:{
        countSlice: countSlice,
        userSlice: userSlice
    }
})