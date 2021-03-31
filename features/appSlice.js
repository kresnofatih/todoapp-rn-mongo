import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        screen: 'splash'
    },
    reducers: {
        openScreen: (state, action)=>{
            state.screen = action.payload.screen;
        },
    },
});

export const { openScreen } = appSlice.actions;

export const getCurrentScreen = state => state.app.screen;

export default appSlice.reducer;