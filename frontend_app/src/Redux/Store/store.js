
import { configureStore } from '@reduxjs/toolkit';

import countSlice from '../Slices/countSlice';
import userSlice from '../Slices/userSlice';
import leadsSlice from '../Slices/leadsSlice';


export default configureStore({
    reducer:{
        countSlice: countSlice,
        userSlice: userSlice,
        leadsSlice: leadsSlice
    }
})