import { ReactNode } from "react";
import { DefaultTheme } from "styled-components/dist/types";

export interface ThemeContextProps {
    theme: DefaultTheme;
    toggleTheme: () => void;
}

export interface ThemeProviderProps {
    children: ReactNode
}