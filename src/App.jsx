import React, { useState } from 'react'

import Form from './components/Form'
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header> Dan's Todo List</header>
      <Form todos={todos} setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
