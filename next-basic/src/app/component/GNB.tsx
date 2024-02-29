'use client'

import React,{useState} from 'react'
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
    const [ menubar, setMenubar ] = useState(false);
    
    const toggleMenu = () => {
        setMenubar(menubar => !menubar);
        console.log('test');
        
    }

    return (
        <>
            <MenuButton onClick={()=>toggleMenu()}>
                <AlignLeft style={{color:theme.colors.light}}/>
            </MenuButton>
            <GnbList className={menubar ? 'open' : ''}>
                {navItems.map((item, index) => (
                    <GnbItem key={index}>
                        <LinkItem href={item.link}>
                            {item.text}
                        </LinkItem>
                    </GnbItem>
                ))}
            </GnbList>
        </>
    )
}

const MenuButton = styled(CustomButton)`
    position: fixed;
    top: 1rem;
    left: 1rem;
    ${flexBox({justify:'center'})}
    width: 4rem;
    height: 4rem;
    background-color: ${theme.colors.primary};
    border-radius: 0.2rem;
    border:none;
`
const GnbList = styled.ul`
    position: fixed;
    top: 6rem;
    left: -100%;
    transition: left 0.3s ease-in-out;

    &.open{
        left: 1rem;
    }
`

const GnbItem = styled.li`
`

const LinkItem = styled(Link)`

`