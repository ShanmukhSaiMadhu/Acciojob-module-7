import React , {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import List from './components/List';

function App() {

  return (
   <div className='container'>
    <div className='todo-container'>
      <h1>ToDo List</h1>
      <List />
    </div>
   </div>
  );
}

export default App;
