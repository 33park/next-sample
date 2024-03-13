'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '@/style/styles/theme';

interface DateInfo {
    year: number;
    month: number;
    day: number;
    isToday: boolean;
}
interface TodoCalendarProps {
    checkedCount: number;
    getListData: () => void;
}

export default function TodoCalendar({ checkedCount, getListData }: TodoCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate = new Date();
            setCurrentDate(newDate);
        }, 60000);
    
        return () => clearInterval(intervalId);
    }, []);

    const generateRecentWeekDates = (currentDate: Date): DateInfo[] => {
        const recentWeekDates: DateInfo[] = [];
        const todayDateString = currentDate.toDateString();
        for (let i = 3; i >= -3; i--) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() - i);
            recentWeekDates.push({
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate(),
                isToday: date.toDateString() === todayDateString
            });
        }

        return recentWeekDates;
    };

    const recentWeekDates: DateInfo[] = generateRecentWeekDates(currentDate);

    return (
        <>
            <CalendarContainer>
                <div>
                    <h2>{currentDate.getFullYear()}</h2>
                    <h3>{currentDate.getMonth() + 1}</h3>
                </div>
                <WeekendList>
                {recentWeekDates.map(({ day, isToday }, index) => (
                    <ListItem 
                        key={index} 
                        $checkedToday={isToday}
                        onClick={getListData}>
                        <strong>{day}</strong>
                        <span>{checkedCount}</span>
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