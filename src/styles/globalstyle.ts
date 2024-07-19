import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:focus{
    outline:0;
    box-shadow:0 0 0 2px ${props => props.theme['blue']};
}

body{
    background:${props => props.theme['white-neve']};
    color:${props => props.theme['black']};
    -webkit-font-smoothing:antialiased;
}

body, input-security, textarea, button{
    font-family:'Roboto', sans-serif;
    font-weight:400;
    font-size:1rem;
}

fieldset, button{
    border:none;
}

a{
    text-decoration:none;
}

li{
    list-style:none;
}

`