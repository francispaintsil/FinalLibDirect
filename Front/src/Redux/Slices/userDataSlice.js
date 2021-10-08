import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'userData',
    initialState : {},
    reducers:{        
        addUserData:(state,action)=>{
            state = {...action.payload}
        }
    },
    extraReducers:{
        'userData/addUserData':(state,action)=>{
            state = {...action.payload}
        }
    }
}
const userDataSlice = createSlice(options);

export const {addUserData} = userDataSlice.actions;

export default userDataSlice.reducer;