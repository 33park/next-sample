import { createGlobalStyle } from "styled-components";
import NotoSansKrRegular from "./NotoSans-Regular.woff"
import NotoSansKrMedium from "./NotoSans-Medium.woff"
import NotoSansKrBold from "./NotoSans-Bold.woff"
import NotoSansKrBlack from "./NotoSans-Black.woff"

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Noto Sans Korean";
        font-weight: 400;
        font-style: normal;
        src: local("Noto Sans Korean") url(${NotoSansKrRegular}) format('woff');
    }
    @font-face {
        font-family: "Noto Sans Korean";
        font-weight: 500;
        font-style: normal;
        src: local("Noto Sans Korean") url(${NotoSansKrMedium}) format('woff');
    }
    @font-face {
        font-family: "Noto Sans Korean";
        font-weight: 700;
        font-style: normal;
        src: local("Noto Sans Korean") url(${NotoSansKrBold}) format('woff');
    }
    @font-face {
        font-family: "Noto Sans Korean";
        font-weight: 900;
        font-style: normal;
        src: local("Noto Sans Korean") url(${NotoSansKrBlack}) format('woff');
    }

    html,body {
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
        color:inherit;
        text-decoration: none;
    }
`