import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '@/style/styles/theme';
import { MoreHorizontal } from 'lucide-react';
import InputCheck from '@/assets/images/icon/input_check_empty.svg';
import InputCheckComplete from '@/assets/images/icon/input_checked.svg';

interface TodoProps {
    registeredList: { order: number; content: string; status: boolean }[];
}

export default function TodoCalendar({ registeredList }: TodoProps) {
    const [list, setList] = useState(registeredList);
    const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜 상태 추가
    const [countCheckBox, setCountCheckBox] = useState<number>();
    

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

    const getOrderColor = (order: number) => {
        const colors = ['#FFE5A8', '#F8FF97', '#BCFFA4', '#A6FFD3', '#B9E3FF'];
        return colors[order % 5];
    };

    const toggleCheckBox = (index: number) => {
        const updatedList = list.map((item, i) => {
            if (i === index) {
                return { ...item, status: !item.status };
                // spread연산자('...')를 이용하여 새로운 객체복사, 기존 'list 변경하지 않고 새로운 리스트 생성
            }
            return item;
        });
        setList(updatedList);//상태 업데이트
        
        const checkedCount  = updatedList.filter(item => item.status).length; //체크박스 총 갯수
        setCountCheckBox(checkedCount );
    }


    return (
        <>
            {/* 주말 캘린더 */}
            <CalendarContainer>
                <div>
                    <h2>{currentDate.getFullYear()}</h2>
                    <h3>{currentDate.getMonth() + 1}</h3>
                </div>
                <WeekendList>
                    {formattedRecentWeekDates.map(({ date,isToday },index) => (
                        <li key={index} currentdatebold={isToday.toString()}>
                            <strong >{date}</strong>
                            <span>{countCheckBox}</span>
                        </li>
                    ))}
                </WeekendList>
            </CalendarContainer>
            <ListContainer>
            {list.map(({ order, content, status },index) => (
                <TaskItem key={order}>
                    <Order color={getOrderColor(order)} $isChecked={status}>{order}</Order>
                    <Content $isChecked={status}>{content}</Content>
                    <MoreHorizontal stroke={theme.colors.gray} />
                    <CheckboxContainer $isChecked={status}>
                        <input type="checkbox" defaultChecked={status} onChange={() => toggleCheckBox(index)}/>
                    </CheckboxContainer>
                </TaskItem>
            ))}
        </ListContainer>
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

const ListContainer = styled.ul`
    ${flexBox()}
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 4rem 2rem;
`;

const TaskItem = styled.li`
    flex: 1;
    ${flexBox()}
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
`;

const Order = styled.div<{ color: string, $isChecked: Boolean}>`
    display: block;
    width: 2rem;
    height: 100%;
    text-indent: -9999px;
    padding: 1rem;
    background-color: ${({ $isChecked, color }) => $isChecked ? theme.colors.gray : color};
    box-sizing: border-box;
`;

const Content = styled.span<{$isChecked: Boolean}>`
    flex: 1;
    display: inline-block;
    padding: 1rem;
    color: ${({ $isChecked }) => $isChecked ? theme.colors.gray : '#000'};
    text-decoration: ${({ $isChecked }) => $isChecked ? 'line-through' : 'unset'};
`;

const CheckboxContainer = styled.label<{$isChecked: Boolean}>`
    flex: none;
    ${flexBox({ justify: 'center' })}
    width: 2.4rem;
    height: 2.4rem;
    background-image: url(${({ $isChecked }) => $isChecked ? InputCheckComplete.src : InputCheck.src});
    background-position: center;
    background-size: 100% auto;
    input {
        opacity: 0;
    }
`;
