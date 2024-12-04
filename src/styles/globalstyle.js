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
    }

    body {
    }

    button {
        cursor: pointer;
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
