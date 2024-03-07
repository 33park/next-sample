"use client"

import React from 'react'
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '@/style/styles/theme'

interface TodoProps {
    calendarList: { date: number; count: number }[];
}


export default function TodoCalendar({ calendarList }: TodoProps) {
  return (
      <>
      {/* 주말 캘린더 */}
        <WeekendList>
            {calendarList.map(({ date, count }) => (
                <li key={date}>
                    <strong>{date}</strong>
                    <span>{count}</span>
                </li>
            ))}
        </WeekendList>
    </>
  )
}

const WeekendList = styled.ul`
    ${flexBox({justify:'space-around'})}
    width: 100%;
    li{
        ${flexBox()}
        flex-direction: column;
        line-height: 1;
        background-color: ${theme.colors.light};
        padding: 0.4rem 0.4rem 0.6rem;
        border-radius: 1rem;
        color: ${theme.colors.gray};
        font-size: 1.2rem;

        strong{
            margin-bottom: .6rem;
        }
    }
`;