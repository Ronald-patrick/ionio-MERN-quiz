import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: (localStorage.getItem('user') === null ? false : true),
    user : JSON.parse(localStorage.getItem('user')),
    res : [-1,-1,-1,-1,-1]
  },
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;

      localStorage.setItem('user',JSON.stringify(action.payload));
    },
    setResult : (state, action)=>{
      state.res[action.payload.index] = action.payload.ans;
    },
    resetResult : (state)=>{
      state.res = [-1,-1,-1,-1,-1];
    },
    logoutUser: (state) => {
      console.log("Called");
        state.isAuthenticated = false;
        state.user = null;
        localStorage.removeItem('user');
      },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser,logoutUser,setResult,resetResult } = authSlice.actions

export default authSlice.reducer