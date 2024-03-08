"use client"

import React,{useState} from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import { theme } from '@/style/styles/theme';
import { MoreHorizontal } from 'lucide-react';

import InputCheck from '@/assets/images/icon/input_check_empty.svg';
import InputCheckComplete from '@/assets/images/icon/input_checked.svg';

interface TodoProps {
    todoBoard: {
        importance: number;
        content: string;
        status: Boolean;
    }[];
}

export default function TodoList({ todoBoard }: TodoProps) {
    const [todoContent, setTodoContent] = useState(todoBoard)

    return (
        <>
            <div>
                <CalendarContainer>
                    <h2>년</h2>
                    <h3>월</h3>
                </CalendarContainer>
                <WeekendList>
                    <li><span>1</span><span>2</span></li>
                    <li><span>1</span><span>2</span></li>
                    <li><span>1</span><span>2</span></li>
                    <li><span>1</span><span>2</span></li>
                    <li><span>1</span><span>2</span></li>
                    <li><span>1</span><span>2</span></li>
                    <li><span>1</span><span>2</span></li>
                </WeekendList>
                <ul>
                    {todoContent.map(({todoBoard},index)=>(
                        <TaskItem>
                            <span>중요도</span>
                            <p>내용</p>
                            <label htmlFor=""><input type="checkbox" name="" id="" /></label>
                        </TaskItem>
                    ))}
                </ul>
            </div>
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
`

const TaskItem = styled.li`
    flex: 1;
    ${flexBox()}
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
`;