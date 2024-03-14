import { createGlobalStyle } from "styled-components";
import '../../public/fonts/noto-sans-korean.css';

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
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
    
    input {
        padding: 0;
        margin: 0;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    input::-ms-clear { display: none; }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    select {
        padding: 0;
        margin: 0;
        border: none;
/*         -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none; */
    }

    select::-ms-expand { display: none; }
`