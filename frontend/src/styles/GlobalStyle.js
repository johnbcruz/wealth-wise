import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Arial', sans-serif;
    }

    :root {
        --main-color: #2E2E70;
        --secondary-color: rgba(46, 46, 112, .6);
        --tertiary-color: rgba(46, 46, 112, .4);
        --success-color: #44B500;
        --neutral-color: #b0b0b0;
        --highlight-color: #F67A92;
        --danger-color: #D10000;        
    }
`;
