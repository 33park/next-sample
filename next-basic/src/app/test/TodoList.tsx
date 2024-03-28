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
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const TodoItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const TodoText = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

TodoText.displayName = 'TodoText';

const DeleteButton = styled.button`
  background-color: #ff5757;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

DeleteButton.displayName = 'DeleteButton';

const TodoList: React.FC = () => {
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
    dispatch(completeTodo(id));
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
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleteTodo(todo.id)}
            />
            <TodoText completed={todo.completed}>{todo.text}</TodoText>
            <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>Delete</DeleteButton>
          </TodoItem>
        ))}
      </ul>
    </Container>
  );
};



export default TodoList;

