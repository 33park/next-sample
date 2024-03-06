"use client"

import React,{ useRef, useState, useEffect} from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '../../../style/styles/theme'
import { MoreHorizontal } from 'lucide-react';

interface TodoProps {
    calendarList: { date: number; count: number }[];
    registeredList: { order: number; content: string; status: boolean }[];
}

export default function TodoList({ calendarList, registeredList }: TodoProps) {

    return (
        <TodoContainer>
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
                        <Content>
                            {content}
                        </Content>
                        <MoreHorizontal stroke={theme.colors.gray}/>
                        <CheckboxContainer>
                            <input type="checkbox" value={status}/>
                        </CheckboxContainer>
                    </TaskItem>
                ))}
            </ListContainer>
        </TodoContainer>
    );
}

const TodoContainer = styled.div`
    ${flexBox()}
    flex-direction: column;
    width: 100%;
    max-width: 48rem;
    margin: 0 auto;
    font-size: 1.6rem;
`;

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

const ListContainer = styled.ul`
    ${flexBox()}
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 4rem 2rem;
`;

const TaskItem = styled.li`
    flex:1;
    ${flexBox()}
    width: 100%;
    border-bottom: 1px solid #ddd;
    i{
        flex:none;
        width: 2rem;
        height: 100%;
        font-size:0;
    }
`;

const Order = styled.i`
    margin-right: 1rem;
`;

const Content = styled.span`
    flex: 1;
    padding:1rem;
`;

const CheckboxContainer = styled.label`
    margin-left: auto;
`;

