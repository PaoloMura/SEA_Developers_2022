import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AllTodos from './Components/AllTodos';
import AddEditTodo from './Components/AddEditTodo';
import sampleTodos from './sampleTodos.json'

function App() {
  const [todos, setTodos] = useState({
    todos: sampleTodos
  })
  return (
    <div className="container">
      <Header />
      <div className='container'>
        <AllTodos data={todos} />
        <AddEditTodo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
