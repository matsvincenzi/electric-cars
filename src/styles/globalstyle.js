import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 9.3rem;
    }

    body {
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: var(--blue7);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--blue6);
        border-radius: 10px;
        border: 2px solid var(--blue8);
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--blue5);
    }
    
    :root {

        --greyDefault: #808080;

        --whiteDefault: #FFFFFF;

        --blackDefault: #000000;
        --black1: #080808;

        --blue0: #0b4ba0; 
        --blue1: #1166dd;
        --blue2: #3b82f6;
        --blue3: #5a9eff;
        --blue4: #7bb9f1; 
        --blue5: #739ED2;
        --blue6: #85AFE3;
        --blue7: #A2C4ED;
        --blue8: #CDDFF5;
        --blue9: #d7e9ff;
        

        --transition-color-fast: color 0.3s ease;
        --transition-color-slow: color 0.5s ease;
    }
`

export default GlobalStyled
