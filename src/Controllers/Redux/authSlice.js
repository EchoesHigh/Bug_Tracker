import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "auth",
    initialState: {
        admin: false,
        LoggedIn: false,
    },
    reducers: {
        signIn: (state, action) => {
            const {name, password} = action.payload;
            //true until we get to connect it to the backend
            state.LoggedIn = true;
            state.admin = true;
        },
        signOut: (state) => {
            state.LoggedIn = false;
            state.admin = false;
        },
        createUser: (state, action) => {
            //We leave this blank until we get our backend
        }
    }
})

export default slice.reducer;

export const {signIn, signOut, createUser} = slice.actions;