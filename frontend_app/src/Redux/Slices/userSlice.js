import { createSlice }  from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'userSlice',
    initialState:{
        userName: '',
        email: '',
        verified: false
    },
    reducers:{
        setUserName: (state, data) => {state.userName=data.payload},
        setEmail: (state, data) => {state.email=data.payload},
        setVerified: (state, data) => {state.verified=data.payload},
    }
});

export const {setUserName, setEmail, setVerified} = userSlice.actions;

export const selectUserData = (state) => {return(state.userSlice)};

export default userSlice.reducer