import { Component } from 'react/cjs/react.production.min';
import ColorPicker from './components/ColorPicker';
import todo from './json/todo.json';
import Alert from './components/Alert';
import Container from './components/Container';
import Counter from './components/Counter';
import Dropdown from './components/DropDown';
import TodoList from './components/TodoList';
import Forms from './components/Forms';
import { DeleteButton } from './components/Widgets/RemoveItem';
import './App.scss';
const text = {
  title: 'title-1',
  content: 'content-1',
  backBtn: 'go back',
  deleteBtn: 'delete',
};

class App extends Component {
  state = {
    todos: todo,
    isOpen: false,
    inputValue: '',
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todoEl => todoEl.id !== todoId),
    }));
  };
  handleInput = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };
  inputDataGet = data => {
    console.log(data);
  };
  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  render() {
    const { todos } = this.state;
    const { isOpen, inputValue } = this.state;

    return (
      <div className="App">
        <Container>
          <input type="text" value={inputValue} onChange={this.handleInput} />
          <Forms onSubmit={this.inputDataGet} />
          <TodoList
            todos={todos}
            deleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          <Counter initialValue={50} />
          <Dropdown />
          <ColorPicker options={colorPickerOptions} />
          <Alert text="В тебе все вийде!!!!" type="error" />
          <Alert text="В тебе все вийде!!!!" type="success" />
          <Alert text="В тебе все вийде!!!!" type="warning" />
        </Container>
        <DeleteButton isOpen={!isOpen} text={text} />
        <DeleteButton isOpen={isOpen} />
      </div>
    );
  }
}

export default App;

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
