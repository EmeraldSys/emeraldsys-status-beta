import { createGlobalStyle } from "styled-components"

export const darkTheme = {
    body: "#2b3034",
    textColor: "#fff"
};

export const lightTheme = {
    body: "#fff",
    textColor: "#000"
};

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        background: ${props => props.theme.body};
        color: ${props => props.theme.textColor};
        transition: .3s ease;
    }
`;