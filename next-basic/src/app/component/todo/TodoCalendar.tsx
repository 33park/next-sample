'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '@/style/styles/theme';

interface TodoCalendarProps {
    registeredList: { order: number; content: string; status: boolean }[];
}

export default function TodoCalendar({ registeredList }: TodoCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date();
            setCurrentDate(newDate);
        }, 60000);
    
        return () => clearInterval(intervalId);
    }, []);

    const generateRecentWeekDates = (currentDate: Date) => {
        const recentWeekDates = [];
        for (let i = 3; i >= -3; i--) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() - i);
            recentWeekDates.push(date);
        }

        return recentWeekDates.map(date => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '');
            const day = String(date.getDate()).padStart(2, '');
            const isToday = date.toDateString() === currentDate.toDateString();

            console.log(isToday);
            
            
            return { thisYear: year, thisMonth: month, date: day, count: 0, isToday: isToday };
        });
    };

    const formattedRecentWeekDates = generateRecentWeekDates(currentDate);

    return (
        <>
            <CalendarContainer>
                <div>
                    <h2>{currentDate.getFullYear()}</h2>
                    <h3>{currentDate.getMonth() + 1}</h3>
                </div>
                <WeekendList>
                    {formattedRecentWeekDates && formattedRecentWeekDates.map(({ date, count, isToday }, index) => (
                        <ListItem key={index} $checkedToday={isToday}>
                            <strong>{date}</strong>
                            <span>{count}</span>
                        </ListItem>
                    ))}
                </WeekendList>
            </CalendarContainer>
        </>
    );
}

const CalendarContainer = styled.div`
    display: block;
    width: 100%;
`;

const WeekendList = styled.ul`
    ${flexBox({justify:'space-around'})}
    width: 100%;
`;

const ListItem = styled.li<{ $checkedToday: boolean }>`
    ${flexBox({justify: 'center'})}
    flex-direction: column;
    width: 3.2rem;
    height: 5.4rem;
    line-height: 1;
    background-color: ${({ $checkedToday }) => $checkedToday ? theme.colors.primary : theme.colors.gray};
    padding: 0.4rem;
    border-radius: 3rem;
    box-sizing: border-box;
    color: ${theme.colors.white};
    font-size: 1.2rem;

    strong {
        margin-bottom: .6rem;
    }
`;