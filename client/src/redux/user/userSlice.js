import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: null,
    error: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action) => {  //action : for accessing data 
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
            state.currentUser = action.payload;
        },
        updateUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { signInFailure, signInStart, signInSuccess, updateUserStart, updateUserSuccess, updateUserFailure} = userSlice.actions;

export default userSlice.reducer;