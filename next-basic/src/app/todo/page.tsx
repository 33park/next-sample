"use client"

import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { flexBox } from '@/style/styles/common';
import TodoList from '../component/todo/TodoList';
import TodoCalendar from '../component/todo/TodoCalendar';
import {TODOSAMPLEDATA } from '../../../public/api/todoSample'

export default function TodoApp() {

    const [todoData, setTodoData] = useState([]);
    const [checkedCount, setCheckedCount] = useState(0);

    useEffect(() => {
        if (Array.isArray(TODOSAMPLEDATA)) {
            setTodoData(TODOSAMPLEDATA); // Set todoData with TODOSAMPLEDATA
        } else {
            console.error("TODOSAMPLEDATA is not an array.");
        }
    }, []);

    const toggleCheckBox = (index: number) => {
        const updatedTodoData = todoData.map((item: { status: any; }, i: number) => {
            if (i === index) {
                return { ...item, status: !item.status };
            }
            return item;
        });
        setTodoData(updatedTodoData);
    };

    useEffect(() => {
        // Calculate the count of checked checkboxes
        const count = todoData.filter((item: { status: boolean }) => item.status).length;
        setCheckedCount(count);
    }, [todoData]);

    return (
        <div>
            <TodoContainer>
                <h1>Todo List</h1>
                <TodoCalendar checkedCount={checkedCount}/>
                <ListContainer>
                    {todoData && todoData.map((data: { order: number; content: string; status: boolean; }, index: number) => (
                        <TodoList
                            key={index}
                            order={data.order}
                            content={data.content}
                            status={data.status}
                            toggleCheckBox={() => toggleCheckBox(index)} // Pass toggleCheckBox function with index
                        />
                    ))}
                </ListContainer>
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

const ListContainer = styled.ul`
    ${flexBox()}
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 4rem 2rem;
`;