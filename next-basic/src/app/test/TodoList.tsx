'use Client'
// TodoList.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './type';
import { Todo, addTodo, completeTodo, deleteTodo } from './action';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48rem;
  height: 72rem;
  margin: 1rem auto;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const TodoItem = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    list-style: none;
    margin-bottom: 10px;

  input[type='checkbox'] {
    -webkit-appearance: checkbox;
    appearance: checkbox;
  }
`;

const TodoText = styled.span<{ $isCompleted: boolean }>`
  flex: 1;
  text-decoration: ${props => (props.$isCompleted ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background-color: #ff5757;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;


export default function TodoList(){
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
  
    const handleAddTodo = () => {
      if (text.trim() !== '') {
        const newTodo: Todo = {
          id: Date.now(),
          text,
          completed: false,
        };
        dispatch(addTodo(newTodo));
        setText('');
      }
    };
  
    const handleCompleteTodo = (id: number) => {
      const todoToUpdate = todos.find(todo => todo.id === id);
      if (todoToUpdate) {
        dispatch(completeTodo(id, !todoToUpdate.completed)); // Toggle completed status
      }
    };
  
    const handleDeleteTodo = (id: number) => { // Handle delete function
      console.log('delete!');
      
      dispatch(deleteTodo(id));
    };
  
    return (
      <Container>
        <InputContainer>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleAddTodo}>Add Todo</button>
        </InputContainer>
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id}>
              <label>
                  <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCompleteTodo(todo.id)}
                  />
              </label>
              <TodoText $isCompleted={todo.completed}>{todo.text}</TodoText>
              <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>Delete</DeleteButton>
            </TodoItem>
          ))}
        </ul>
      </Container>
    );
}

