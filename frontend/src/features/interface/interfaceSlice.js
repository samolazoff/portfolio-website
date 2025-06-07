import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    menuOpen: false
};

export const interfaceSlice = createSlice({
    name: 'interface',
    initialState,
    reducers: {
        changeMenuBtn: (state) => {state.menuOpen = !state.menuOpen},
    },
});

export const {changeMenuBtn} = interfaceSlice.actions;

export default interfaceSlice.reducer;