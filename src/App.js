import TodoItem from './components/TodoItem';
import todosData from './mock_data/todosData';
import './App.css';

function App() {
  return (
    <div className="todo-list">
      {todosData.map(todo => <TodoItem key="todo.id" todo={todo} />)}
    </div>
  );
}

export default App;
