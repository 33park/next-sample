'use client'

import React from 'react'
import { styled } from 'styled-components'
import Link from 'next/link'
import { theme } from '../../style/styles/theme'
import { AlignLeft } from 'lucide-react'
import { flexBox } from  '../../style/styles/common'
import CustomButton from '../../style/component/Button'

interface NavItem {
    link: string;
    text: string;
}

const navItems: NavItem[] = [
    { link: '/', text: 'home' },
    { link: '/board', text: 'board' }
]


export default function GNB() {

    return (
        <GNBWrapper>
            <MenuButton bgColor={theme.colors.primary}>
                <AlignLeft style={{color:theme.colors.light}}/>
            </MenuButton>
            {navItems.map((item, index) => (
                <GnbItem key={index}>
                    <LinkItem href={item.link}>
                        {item.text}
                    </LinkItem>
                </GnbItem>
            ))}
        </GNBWrapper>
    )
}

const GNBWrapper = styled.ul`
    position: fixed;
    top: 1rem;
    left: 1rem;
`
const MenuButton = styled(CustomButton)`
    ${flexBox({justify:'center'})}
    width: 4rem;
    height: 4rem;
    border-radius: 0.2rem;
    border:none;
`

const GnbItem = styled.li`
`

const LinkItem = styled(Link)`

`