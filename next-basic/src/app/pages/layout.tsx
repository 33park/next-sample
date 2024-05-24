'use client'

import React, {Suspense} from 'react'
import { Reset } from 'styled-reset'
import { ThemeProvider } from 'styled-components'
import GlobalNavigator from '../components/GNB'
import { GlobalStyles } from '@/style/GlobalStyles'
import { offSet } from '@/style/styles/common'
import { theme } from '@/style/styles/theme'
import { Noto_Sans_KR } from 'next/font/google'
import { styled } from 'styled-components'
import Modal from '../components/Modal'



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
                    <BodySection className={`${notoSansKr.className}`}>
                        <MainSection>

                            <GlobalNavigator/>
                            {children}
                            <Suspense fallback={<>Loading...</>}>
                                <Modal title={'test header'}></Modal>
                            </Suspense>
                        </MainSection>
                    </BodySection> 
                </html>
            </ThemeProvider>
        );
}

const BodySection = styled.body`
    ${offSet()};
    max-width: 46rem;
    margin: 0 auto;
`

const MainSection = styled.main`

`