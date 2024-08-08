import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from '../../../hooks/useTheme';

interface Props {
    children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: Props) => {
    const { theme, toastTheme } = useTheme();

    return (
        <StyledThemeProvider theme={theme}>
            <ToastContainer position="top-center" theme={toastTheme} closeOnClick />
            {children}
        </StyledThemeProvider>
    );
};
