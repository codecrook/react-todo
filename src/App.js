import TodoItem from './components/TodoItem';
import todosData from './mock_data/todosData';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      {todosData.map(todo => <TodoItem key="todo.id" todo={todo} />)}
    </div>
  );
}

export default App;
