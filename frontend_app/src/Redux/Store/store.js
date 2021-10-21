
import { configureStore } from '@reduxjs/toolkit';

import countSlice from '../Slices/countSlice';


export default configureStore({
    reducer:{
        countSlice: countSlice,
    }
})