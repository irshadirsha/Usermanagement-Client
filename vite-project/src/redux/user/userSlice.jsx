import {createSlice} from '@reduxjs/toolkit'
  const INITIAL_STATE={
    userId:"",
    username:"",
    image:""
  }
    const UserSlice=createSlice({
         name:'user',
         initialState:INITIAL_STATE,
         reducers:{
            updateUser:(state,action)=>{
                state.username = action.payload.username
                state.image=action.payload.image
                state.userId=action.payload.userId
    
            }
         }
    })
    
export const {updateUser} =UserSlice.actions
export default  UserSlice.reducer