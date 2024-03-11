"use client"

import React,{useState} from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
// import TodoList from '../component/todo/TodoList';
import TodoCalendar from '../component/todo/TodoCalendar';
import TodoSampleData from '../../../public/api/todoSample'

export default function TodoApp() {

    const [registeredList, setRegisteredList] = useState(TodoSampleData.todoContent);

    return (
        <div>
            <TodoContainer>
                <h1>Todo List</h1>
                <TodoCalendar registeredList={registeredList} />
                {/* <TodoList registeredList={TodoSampleData.todoContent}/> */}
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
