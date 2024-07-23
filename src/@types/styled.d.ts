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
            white: string;
            whiteNeve: string;
            blackColor: string;
            cardColor: string;
            red: string;
        }
    }
}