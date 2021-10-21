import { createSlice }  from '@reduxjs/toolkit';

export const leadsSlice = createSlice({
    name:'leadsSlice',
    initialState:{
        list: []
    },
    reducers:{
        updateList: (state, leadss) => {state.list=leadss.payload},
    }
});

export const {updateList} = leadsSlice.actions;

export const viewList = (state) => {return(state.leadsSlice.list)};

export default leadsSlice.reducer