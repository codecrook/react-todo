import TodoItem from './components/TodoItem';
import todosData from './mock_data/todosData';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  }
  render() {
    return (
      <div className="todo-list">
        {this.state.todos.map(item => <TodoItem key={item.id} item={item} />)}
      </div>
    );
  }
}

export default App;
