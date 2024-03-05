'use client'

import React,{ useRef, useState, useEffect} from 'react'
import { styled } from 'styled-components'
import Link from 'next/link'
import { theme } from '../../style/styles/theme'
import { Menu  as LeftMenuIcon, Github, Rss, Mail, Phone } from 'lucide-react'
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

    const handleOutsideClick= (event:any) => {
        if (menubar && menuRef.current && !menuRef.current.contains(event.target)) {
            toggleMenu();
        }
    }

    useEffect(() => {
        if (menubar) {
            document.addEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [menubar]);

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
                <GnbItem>
                    <Github/>
                    <Rss/>
                    <Mail/>
                    <Phone/>
                </GnbItem>
            </GnbList>
            <MenuButton onClick={toggleMenu} menubar={menubar.toString()}>
                <LeftMenuIcon style={{ color: menubar ? theme.colors.primary : theme.colors.white }} />
            </MenuButton>


        </div>
    )
}
                                                            //{...rest}는 나머지 (props)를 의미
const MenuButton = styled(({ menubar, ...rest }) => <CustomButton {...rest} />)<{ menubar: string }>`
    position: fixed;
    top: 2rem;
    right: 2rem;
    ${flexBox({justify:'center'})}
    width: 4rem;
    height: 4rem;
    background-color: ${({ menubar }) => menubar === 'true' ? theme.colors.white : theme.colors.primary};
    border-radius: 0.2rem;
    border:none;
    z-index: 1;
`

const GnbList = styled.ul`
    position: fixed;
    top: 0;
    right: -100%;
    width: 15vw;
    max-width: 16rem;
    height: 100vh;
    padding: 8rem 1rem 4rem;
    background-color: ${theme.colors.primary};
    transition: right 0.3s ease-in-out;
    z-index: 1;

    &.open{
        right: 0;
    }
`

const GnbItem = styled.li`
    padding-left: 1rem;
    font-size:1.6rem;
    
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

