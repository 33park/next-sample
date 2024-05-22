'use client'
import React from 'react'
import Link from "next/link";
import styled from 'styled-components';
import { ChevronLeft, Bell, EllipsisVertical} from 'lucide-react';
import { flexBox } from '@/style/styles/common'
import { theme } from '@/style/styles/theme'

interface HeaderProps {
    userId: string;
    historyBackFn: () => void;
}

export default function Header({userId, historyBackFn}:HeaderProps) {
  return (
    <HeaderSide>
        <HistoryBack onClick={historyBackFn}><ChevronLeft /></HistoryBack>
        <UserTitle>{userId}</UserTitle>
        <Link href=""><Bell/></Link>
        <MoreBtn><EllipsisVertical /></MoreBtn>
    </HeaderSide>
  )
}


const HeaderSide = styled.header`
    ${flexBox()}
    gap: .8rem;
    height: 4.8rem;
    padding: 1.2rem 1.6rem;
    background-color: ${theme.colors.white};
    box-sizing: border-box;
`
const HistoryBack = styled.button`
    
`
const UserTitle = styled.h1`
    flex:1;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1;
`

const MoreBtn = styled.button`
    
`