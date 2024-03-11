import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '@/style/styles/theme';


interface TodoProps {
    count: number
}

export default function TodoCalendar({ count }: TodoProps) {
    // 현재 날짜 상태 추가
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            // 현재 날짜를 갱신하여 상태 업데이트
            const newDate = new Date();
            setCurrentDate(newDate);
        }, 60000); // 1분마다 실행
    
        // 컴포넌트가 언마운트될 때 interval 정리
        return () => clearInterval(intervalId);
    }, []); // 최초 렌더링 시에만 실행

    // 최근 7일의 날짜를 생성하고 포맷팅하는 함수
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

            console.log(`isToday: ${isToday}` );
            

            return { thisYear: year, thisMonth: month, date: day, count: 0, isToday };
        });
    };

    // 최근 7일의 날짜 데이터 생성
    const formattedRecentWeekDates = generateRecentWeekDates(currentDate);

    return (
        <>
            {/* 주말 캘린더 */}
            <CalendarContainer>
                <div>
                    <h2>{currentDate.getFullYear()}</h2>
                    <h3>{currentDate.getMonth() + 1}</h3>
                </div>
                <WeekendList>
                    {formattedRecentWeekDates.map(({ date, count, isToday },index) => (
                        <li key={index} currentdatebold={isToday.toString()}>
                            <strong >{date}</strong>
                            <span>{count}</span>
                        </li>
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

const WeekendList = styled.ul<{currentdatebold: Boolean}>`
    ${flexBox({justify:'space-around'})}
    width: 100%;
    li{
        ${flexBox()}
        flex-direction: column;
        line-height: 1;
        background-color: ${({ currentdatebold }) => currentdatebold === true ? theme.colors.primary : theme.colors.gray};        
        padding: 0.4rem 0.4rem 0.6rem;
        border-radius: 1rem;
        color: ${theme.colors.white};
        font-size: 1.2rem;

        strong{
            margin-bottom: .6rem;
        }
    }
`;
