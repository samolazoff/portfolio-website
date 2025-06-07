import {configureStore} from '@reduxjs/toolkit';
import languageReducer from '../features/language/languageSlice';
import interfaceReducer from '../features/interface/interfaceSlice';

export const store = configureStore({
    reducer: {
        language: languageReducer,
        interface: interfaceReducer,
    }
});