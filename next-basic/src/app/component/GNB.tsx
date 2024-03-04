'use client'

import React,{ useRef, useState, useEffect} from 'react'
import { styled } from 'styled-components'
import Link from 'next/link'
import { theme } from '../../style/styles/theme'
import { Menu  as LeftMenuIcon } from 'lucide-react'
import { flexBox } from  '../../style/styles/common'
import CustomButton from '../../style/component/Button'

interface NavItem {
    link: string;
    text: string;
}

const navItems: NavItem[] = [
    { link: '/', text: '메인' },
    { link: '/board', text: '게시판 샘플' }
]


export default function GNB() {
    const menuRef = useRef<HTMLDivElement>(null);
                    //menuRef가 참조하는 요소는 HTMLDivElement 타입이라는 말
    const [ menubar, setMenubar ] = useState(false);
    
    const toggleMenu = () => {
        setMenubar(menubar => !menubar);
    }

    const handleOutsideClick= (event) => {
        if(!menuRef.current || !menuRef.current.contains(event.target)){
            toggleMenu();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);

    return (
        <div ref={menuRef}>
            <GnbList className={menubar ? 'open' : ''}>
                {navItems.map((item, index) => (
                    <GnbItem key={index}>
                        <Link href={item.link}>
                            {item.text}
                        </Link>
                    </GnbItem>
                ))}
            </GnbList>
            <MenuButton onClick={()=>toggleMenu()} style={menubar ? { 'background-color':theme.colors.white} : {'background-color':theme.colors.primary}}>
                <LeftMenuIcon style={menubar ? { color:theme.colors.primary} : {color:theme.colors.white}}/>
            </MenuButton>
        </div>
    )
}

const MenuButton = styled(CustomButton)`
    position: fixed;
    top: 2rem;
    left: 2rem;
    ${flexBox({justify:'center'})}
    width: 4rem;
    height: 4rem;
    border-radius: 0.2rem;
    border:none;
`
const GnbList = styled.ul`
    position: fixed;
    top: 0;
    left: -100%;
    width: 15vw;
    max-width: 16rem;
    height: 100vh;
    padding: 8rem 1rem 4rem;
    background-color: ${theme.colors.primary};
    transition: left 0.3s ease-in-out;

    &.open{
        left: 0;
    }
`

const GnbItem = styled.li`
    padding-left: 1rem;
    font-size:1.4rem;
    
    a {
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 3;
        padding-left: 1rem;
        color: ${theme.colors.white};
    }

    a:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
    }
`

