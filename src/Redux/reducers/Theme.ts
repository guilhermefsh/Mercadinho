import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/themes/themes';

type ThemeState = {
    theme: DefaultTheme;
    toastTheme: 'light' | 'dark';
}

const getInitialTheme = (): DefaultTheme => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light' ? lightTheme : darkTheme;
};

const getInitialToastTheme = (): 'light' | 'dark' => {
    const savedTheme = localStorage.getItem('toastTheme');
    return savedTheme === 'dark' ? 'dark' : 'light';
};

const initialState: ThemeState = {
    theme: getInitialTheme(),
    toastTheme: getInitialToastTheme(),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === lightTheme ? lightTheme : darkTheme;
            state.theme = state.theme === darkTheme ? darkTheme : lightTheme;
            state.toastTheme = state.toastTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme === darkTheme ? 'dark' : 'light');
            localStorage.setItem('toastTheme', state.toastTheme);
        },
        setTheme(state, action: PayloadAction<DefaultTheme>) {
            state.theme = action.payload;
            localStorage.setItem('theme', action.payload === darkTheme ? 'dark' : 'light');
        },
        setToastTheme(state, action: PayloadAction<'light' | 'dark'>) {
            state.toastTheme = action.payload;
            localStorage.setItem('toastTheme', action.payload);
        }
    }
});

export const { toggleTheme, setTheme, setToastTheme } = themeSlice.actions;
export default themeSlice.reducer;
