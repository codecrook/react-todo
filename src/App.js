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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(oldState => (
      {
        todos: oldState.todos.map(todo => (todo.id === id) ? { ...todo, completed: !todo.completed } : todo)
      }
    ));
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)}
      </div>
    );
  }
}

export default App;
