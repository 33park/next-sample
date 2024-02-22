'use client'

import React from 'react'
import { Reset } from 'styled-reset'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Reset/>
            <body>{children}</body>
        </html>
    );
}