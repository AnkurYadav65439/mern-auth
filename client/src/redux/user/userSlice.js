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
        }
    }
})

export const { signInFailure, signInStart, signInSuccess} = userSlice.actions;

export default userSlice.reducer;