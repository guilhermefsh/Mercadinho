import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/rootReducer'
import { toggleTheme } from '../Redux/reducers/Theme'
import { DefaultTheme } from 'styled-components';

interface UseThemeReturn {
    theme: DefaultTheme;
    toggleTheme: () => void;
    toastTheme: 'light' | 'dark';
}

export const useTheme = (): UseThemeReturn => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);
    const toastTheme = useSelector((state: RootState) => state.theme.toastTheme);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return { theme, toggleTheme: handleToggleTheme, toastTheme };
};
