import React from 'react'
import TodoList from '../component/todo/TodoList'

export default function TodoApp() {
        // Sample data
        const calendarList = [
            { date: 1, count: 3 },
            { date: 2, count: 2 },
            { date: 3, count: 1 },
            { date: 4, count: 1 },
            { date: 5, count: 1 },
            { date: 6, count: 1 },
            { date: 7, count: 1 },
        ];
    
        const registeredList = [
            { order: 1, content: 'Task 1', status: false },
            { order: 2, content: 'Task 2', status: true },
            { order: 3, content: 'Task 3', status: false },
        ];

        
  return (
    <div>
        <h1>Todo List</h1>
        <TodoList calendarList={calendarList} registeredList={registeredList} />
    </div>
  )
}
