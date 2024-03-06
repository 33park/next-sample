"use client"

import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';

interface TodoProps {
    calendarList: { date: number; count: number }[];
    registeredList: { order: number; content: string; status: boolean }[];
}

export default function TodoList({ calendarList, registeredList }: TodoProps) {
    return (
        <div>
            {/* 주말 캘린더 */}
            <WeekendList>
                {calendarList.map(({ date, count }) => (
                    <li key={date}>
                        <strong>{date}</strong>
                        <span>{count}</span>
                    </li>
                ))}
            </WeekendList>
            {/* 할 일 목록 */}
            <ListContainer>
                {registeredList.map(({ order, content, status }) => (
                    <TaskItem key={order}>
                        <Order>{order}</Order>
                        <Content>{content}</Content>
                        <CheckboxContainer>
                            <input type="checkbox" defaultChecked={status} />
                        </CheckboxContainer>
                    </TaskItem>
                ))}
            </ListContainer>
        </div>
    );
}

const WeekendList = styled.ul`
    ${flexBox()}
`;

const ListContainer = styled.ul`
    ${flexBox()}
    list-style: none;
`;

const TaskItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

const Order = styled.i`
    margin-right: 10px;
`;

const Content = styled.span`
    flex: 1;
`;

const CheckboxContainer = styled.label`
    margin-left: auto;
`;

