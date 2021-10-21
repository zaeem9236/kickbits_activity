import { createSlice }  from '@reduxjs/toolkit';
import createLead from '../../Functions/createLead';
export const leadsSlice = createSlice({
    name:'leadsSlice',
    initialState:{
        list: []
    },
    reducers:{
        pushLeadInList: (state, lead) =>{state.list.push(lead.payload); createLead(lead.payload)},
        updateList: (state, leads) => {state.list=leads.payload},
    }
});

export const {pushLeadInList,updateList} = leadsSlice.actions;

export const viewList = (state) => {return(state.leadsSlice.list)};

export default leadsSlice.reducer