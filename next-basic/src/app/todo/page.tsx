"use client"

import React,{useState} from 'react'
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import TodoList from '../component/todo/TodoList'
import TodoCalendar from '../component/todo/TodoCalendar'

export default function TodoApp() {

        const currentDate = new Date();

        const recentWeekDates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() - i);
            recentWeekDates.push(date);
        }

        const formattedRecentWeekDates = recentWeekDates.map(date => {
            // const year = date.getFullYear();
            // const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '');

            console.log(day);
            
            return `${day}`;
        });

        const [calendarList , setCalendar] = useState(formattedRecentWeekDates);
        
        // Sample data
        const registeredList = [
            { order: 1, content: 'Task 1', status: false },
            { order: 2, content: 'Task 2', status: true },
            { order: 3, content: 'Task 3', status: false },
        ];

        
  return (
    <div>
        <TodoContainer>
            <h1>Todo List</h1>
            <TodoCalendar calendarList={formattedRecentWeekDates}/>
            <TodoList registeredList={registeredList} />
        </TodoContainer>
    </div>
  )
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