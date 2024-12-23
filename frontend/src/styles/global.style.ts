import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body {
        overflow-y: hidden;
    }
`;
