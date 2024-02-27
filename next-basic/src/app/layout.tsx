'use client'

import React from 'react'
import { Reset } from 'styled-reset'
import GlobalNavigator from './component/GNB'



export default function RootLayout({
    children,
    }: {
        children: React.ReactNode;
    }) {

        return (
            <html lang="ko">
                <Reset/>
                <body>
                    <GlobalNavigator/>
                    {children}
                </body> 
            </html>
        );
}


