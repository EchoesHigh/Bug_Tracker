import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "user",
    initialState: [{}],
    reducers: {
        getUser: (state) => {
            state.push({name: "Luis Miguel"})
            state.push({name: "Elma Canon"})
        }
    }
})

export default slice.reducer;

export const { getUser } = slice.actions;