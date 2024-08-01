import 'styled-components';
declare module "styled-components" {
    export interface DefaultTheme {
        title: string,

        colors: {
            textColor: string;
            backgroundColor: string;
            primary: string;
            primaryHover: string;
            gray: string;
            lightGray: string;
            white: string;
            whiteNeve: string;
            blackColor: string;
            cardColor: string;
            red: string;
            reputation1: string;
            reputation2: string;
            reputation3: string;
            reputation4: string;
            reputation5: string;
            green: string;
            blue: string;
            skyBlue: string;
        }
    }
}