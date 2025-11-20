import React from 'react';
import { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import './components/TodoItem.jsx';
import './App.css';

export default function App() {

  const [todos, setTodos] = useState([]);

  function handleAddTodoItem (inputValue){
    setTodos(preTodos => [...preTodos, {id:Math.random().toString(),description:inputValue}]);
  }

  function handleDeleteTodoItem (id){
    setTodos(preTodos => preTodos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <header>
        <h1>Todo App For Malus</h1>
      </header>
      <TodoForm handleAddTodoItem={handleAddTodoItem} />
      <TodoList Todo={todos} handleDeleteTodoItem={(id) => handleDeleteTodoItem(id)} />
    </div>
  );
}