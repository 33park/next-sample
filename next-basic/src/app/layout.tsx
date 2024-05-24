'use client'

import React, {Suspense} from 'react'
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../style/GlobalStyles'
import { theme } from '../style/styles/theme'
import { Noto_Sans_KR } from 'next/font/google'
import Modal from './component/Modal'
import LayoutFooter from './component/layout/GNB'

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
                        <LayoutFooter></LayoutFooter>
                        {children}
                        <Suspense fallback={<>Loading...</>}>
                            <Modal/>
                        </Suspense>
                    </body> 
                </html>
            </ThemeProvider>
        );
}


