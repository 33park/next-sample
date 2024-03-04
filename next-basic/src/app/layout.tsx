'use client'

import React from 'react'
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components'
import GlobalNavigator from './component/GNB'
import { GlobalStyles } from '../style/GlobalStyles'
import { theme } from '../style/styles/theme'
import GlobalFonts from "../fonts/fonts"



export default function RootLayout({
    children,
    }: {
        children: React.ReactNode;
    }) {

        return (
            <ThemeProvider theme={theme}>
                <html lang="ko">
                    <Reset/>
                    <GlobalStyles/>
                    <GlobalFonts/>
                    <body>
                        <GlobalNavigator/>
                        {children}
                    </body> 
                </html>
            </ThemeProvider>
        );
}


