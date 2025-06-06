import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    language: 'EN'
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        languageEN: (state) => {state.language = 'EN'},
        languageRU: (state) => {state.language = 'RU'}
    },
});

export const {languageEN, languageRU} = languageSlice.actions;

export default languageSlice.reducer;