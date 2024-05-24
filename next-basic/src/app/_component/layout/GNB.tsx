'use client'

import React from 'react'
import { styled } from 'styled-components'
import { Home, Search, SquarePlus, SquarePlay   } from 'lucide-react';
import Link from 'next/link';
import { theme } from '@/style/styles/theme'
import { flexBox, offSet } from '@/style/styles/common'

interface FooterProps {
    userId: string;
}

export default function GNB({userId}:FooterProps) {
  return (
    <FooterSection>
        <Link href='/'><Home/></Link>
        <Link href='/'><Search /></Link>
        <Link href='/'><SquarePlus /></Link>
        <Link href='/'><SquarePlay /></Link>
        <Link href='/'><i><img src={`/images/user/${userId}/_profile.jpg`} alt={userId} /></i></Link>
    </FooterSection>
  )
}

const FooterSection = styled.section`
    ${offSet({position:'fixed', bottom: '0', left:'50%'})};
    width: 100%;
    max-width: 46rem;
    height: 6.4rem;
    padding: 0 .6rem;
    ${flexBox({justify:'space-between'})}
    transform: translateX(-50%);
    background-color: ${theme.colors.white};
    box-sizing: border-box;
    z-index: 1;

    a {
        flex:1;
        ${flexBox({justify:'center', align:'center'})}
    }
`
