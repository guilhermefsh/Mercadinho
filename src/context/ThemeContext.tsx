import { createContext, useState } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes/themes';
import { ThemeContextProps, ThemeProviderProps } from '../interfaces/ThemeContextProps';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<DefaultTheme>(lightTheme);
    const [toastTheme, setToastTheme] = useState<'light' | 'dark'>('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
        setToastTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                <ToastContainer position="top-center" theme={toastTheme} />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
