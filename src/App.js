import TodoItem from './components/TodoItem';
import todosData from './mock_data/todosData';
import './App.css';

function App() {
  return (
    <div className="todo-list">
      {todosData.map(item => <TodoItem key={item.id} item={item} />)}
    </div>
  );
}

export default App;
