import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'user123'
    },
    reducers: {
        setUser: (state, action)=>{
            state.username = action.payload.username;
        },
    },
});

export const { setUser } = userSlice.actions;

export const getCurrentUsername = state => state.user.username;

export default userSlice.reducer;