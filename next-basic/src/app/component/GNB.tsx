'use client'

import React from 'react'
import { styled } from 'styled-components'
import Link from 'next/link'

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
            {navItems.map((item, index) => (
                <GnbItem key={index}>
                    <Link href={item.link}>
                        <LinkItem>{item.text}</LinkItem>
                    </Link>
                </GnbItem>
            ))}
        </GNBWrapper>
    )
}

const GNBWrapper = styled.ul`
    display: flex;
    padding: 10px 16px;
    border-bottom: 1px solid black;
`

const GnbItem = styled.li`
    flex:none;
    display: inline-block;
    margin-right: 10px;
    
    &:last-child{
        margin-right: 0;
    }
`

const LinkItem = styled.a`
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: lightgray;
    &:hover{
        color: black;
    }
`