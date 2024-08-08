import { MdOutlineDarkMode } from 'react-icons/md'
import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme';

const Button = styled.button`
    border:none;
    background:none;
    cursor: pointer;
`

export const ThemeToggleButton = () => {
    const { toggleTheme } = useTheme();
    return (
        <>
            <Button onClick={toggleTheme}>
                <MdOutlineDarkMode size={30} color="white" />
            </Button>
        </>
    )
}


