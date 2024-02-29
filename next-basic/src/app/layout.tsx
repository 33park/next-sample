'use client'

import React from 'react'
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components'
import GlobalNavigator from './component/GNB'
import { GlobalStyles } from '../style/GlobalStyles'
import { theme } from '../style/styles/theme'



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
                    <body>
                        <GlobalNavigator/>
                        {children}
                    </body> 
                </html>
            </ThemeProvider>
        );
}


