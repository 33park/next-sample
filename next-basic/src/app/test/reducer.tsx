// reducer.ts
//
//Redux를 사용하면 상태를 중앙 집중식으로 관리할 수 있으며, 상태 변경 로직을 별도의 reducer 함수로 분리하여 관리할 수 있습니다. 
//또한 Redux의 미들웨어를 사용하면 비동기 작업을 효과적으로 처리할 수 있고, 
//개발자 도구를 통해 상태 변화를 쉽게 추적하고 디버깅할 수 있습니다.
//
import { TodoActionTypes, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './action';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload), // Filter out the todo with the provided ID
      };
    default:
      return state;
  }
};

export default todoReducer;
