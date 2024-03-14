"use client"

import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { flexBox, offSet } from '@/style/styles/common';
import TodoList from '../component/todo/TodoList';
import TodoCalendar from '../component/todo/TodoCalendar';
import TodoForm from '../component/todo/TodoForm';
import {TODOSAMPLEDATA } from '../../../public/api/todoSample'

export default function TodoApp() {

    const [todoData, setTodoData] = useState([]);
    const [checkedCount, setCheckedCount] = useState(0);

    //get data
    useEffect(() => {
        if (Array.isArray(TODOSAMPLEDATA)) {
            setTodoData(TODOSAMPLEDATA); // Set todoData with TODOSAMPLEDATA
        } else {
            console.error("TODOSAMPLEDATA is not an array.");
        }
    }, []);

    //TodoList
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

        //TodoForm
    const handleInputChange = (order: number, content: string) => {
        // Create a new todo item
        const newTodo = {
            order: order, // Assign a new order
            content: content,
            status: false // Set the initial status to false
        };
        // Update todoData by adding the new todo item
        setTodoData(prevTodoData => [...prevTodoData, newTodo]);
    };


    return (
        <div>
            <TodoContainer>
                <h1>Todo List</h1>
                <TodoForm onFormSubmit={handleInputChange}></TodoForm>
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
    ${offSet()}
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