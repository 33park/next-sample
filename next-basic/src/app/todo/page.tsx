"use client"

import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import TodoList from '../component/todo/TodoList';
import TodoCalendar from '../component/todo/TodoCalendar';

export default function TodoApp() {


    // Sample data
    const registeredList = [
        { order: 1, content: 'Task 1', status: false },
        { order: 2, content: 'Task 2', status: true },
        { order: 3, content: 'Task 3', status: false },
    ];

    const todoBoard = []

    return (
        <div>
            <TodoContainer>
                <h1>Todo List</h1>
                <TodoCalendar calendarList={[]}  registeredList={registeredList}/>
                <TodoList todoBoard={todoBoard} />
            </TodoContainer>
        </div>
    );
}

const TodoContainer = styled.div`
    ${flexBox()}
    flex-direction: column;
    width: 100%;
    max-width: 48rem;
    margin: 0 auto;
    font-size: 1.6rem;

    h1 {
        font-size: 3.6rem;
        font-weight: bold;
        margin: 4rem auto 6rem;
    }
`;
