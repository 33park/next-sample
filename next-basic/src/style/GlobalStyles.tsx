import { createGlobalStyle } from "styled-components";
import '../../public/fonts/noto-sans-korean.css';

export const GlobalStyles = createGlobalStyle`

    html,body {
        font-family: "Noto Sans Korean",sans-serif;
        font-weight: 400;
        font-size: 62.5%;
    }
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;

        background: transparent;

        color: inherit;
        font: inherit;

        line-height: normal;

        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;

        -o-appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        box-sizing: border-box;
        cursor: pointer;

        &::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
    }
    a:hover, a:visited, a:link, a:active
    {
        color: inherit;
        text-decoration: none;
    }
`