import { createSlice } from "@reduxjs/toolkit";

const initialState={   //user authencated h ya nhi hai
    // ye state hoga jo user ki authencation ko track krega
    status:false,
    userData:null
}


//user authencated h ya nhi hai
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
login:(state,action)=>{
    state.status=true;
    state.userData=action.payload.userData;
},
logout:(state)=>{
    state.status=false;
    state.userData=null;


}

    }
})



export const {login,logout} = authSlice.actions;
export default authSlice.reducer;