import { createSlice }  from '@reduxjs/toolkit';

export const countSlice = createSlice({
    name:'countSlice',
    initialState:{
        count: 0
    },
    reducers:{
        Up: (state) => {state.count=state.count+1},
        Down: (state) => {state.count=state.count-1}
    }
});

export const {Up, Down} = countSlice.actions;

export const selectCount = (state) => {return(state.countSlice.count)};

export default countSlice.reducer