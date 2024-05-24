import React from 'react'
import Link from "next/link";
import { styled } from 'styled-components'
import { flexBox } from '@/style/styles/common';
import { Grid3X3, SquarePlay, PanelTopClose, ContactRound  } from 'lucide-react';

export default function UserTab() {
  return (
    <TabNavigation>
        <Link href="/"><Grid3X3/></Link>
        <Link href="/"><SquarePlay /></Link>
        <Link href="/"><PanelTopClose/></Link>
        <Link href="/"><ContactRound /></Link>
    </TabNavigation>
  )
}

const TabNavigation = styled.nav`
    ${flexBox()};
        a {
            flex:1;
            height: 6rem;
            ${flexBox({justify:'center', align: 'center'})}
            &:hover, &:visited, &:link, &:active
            {
                color: inherit;
                text-decoration: none;
            }
            svg {
                width: 2rem;
            }
        }
`
