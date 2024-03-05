'use client'

import React from 'react'
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components'
import GlobalNavigator from './component/GNB'
import { GlobalStyles } from '../style/GlobalStyles'
import { theme } from '../style/styles/theme'
import { Noto_Sans_KR } from 'next/font/google'

const notoSansKr = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['100', '400', '700', '900'],
    variable: '--font-notoSansKr',
})

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
                    <body className={`${notoSansKr.className}`}>
                        <GlobalNavigator/>
                        {children}
                    </body> 
                </html>
            </ThemeProvider>
        );
}


