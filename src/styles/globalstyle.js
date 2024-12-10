import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        /* outline: 1px solid red; */
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 150px;
    }

    body {
        width: 100%;
        overflow-x: hidden;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        background: #A2C4ED;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #85AFE3;
        border-radius: 10px;
        border: 2px solid #CDDFF5;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #739ED2;
    }
    
    :root {

        --greyDefault: #808080;

        --whiteDefault: #FFFFFF;

        --blackDefault: #000000;
        --black1: #080808;

        --transition-color-fast: color 0.3s ease;
        --transition-color-slow: color 0.5s ease;
    }
`

export default GlobalStyled
