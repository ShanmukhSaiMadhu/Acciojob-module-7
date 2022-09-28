import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {IN_NUM, DE_NUM} from './action/action.js'

function App() {

  const count = useSelector(state => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(DE_NUM())}>-</button>
      <button onClick={() => dispatch(IN_NUM())}>+</button>
    </div>
  );
}

export default App;
