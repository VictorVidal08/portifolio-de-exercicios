import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDoList = ['wakeUp', 'Have a Breakfast', 'Brush teeth', 'Work extra hard'];

class App extends React.Component {
  render() {
    return (
      <ul>{ toDoList.map((item) => Task(item))}</ul>
    )
  }
}

export default App;
