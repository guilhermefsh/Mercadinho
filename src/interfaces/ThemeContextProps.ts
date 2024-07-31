import { DefaultTheme } from "styled-components/dist/types";

export interface ThemeContextProps {
    theme: DefaultTheme;
    toggleTheme: () => void;
}
