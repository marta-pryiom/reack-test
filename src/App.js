import ColorPicker from './components/ColorPicker';
import todo from './json/todo.json';
import Alert from './components/Alert';
import Container from './components/Container';
import Counter from './components/Counter';
import Dropdown from './components/DropDown';
import TodoList from './components/TodoList';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
  state = {
    todos: todo,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todoEl => todoEl.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <Container>
          <TodoList todos={todos} deleteTodo={this.deleteTodo} />
          <Counter initialValue={50} />
          <Dropdown />
          <ColorPicker options={colorPickerOptions} />
          <Alert text="В тебе все вийде!!!!" type="error" />
          <Alert text="В тебе все вийде!!!!" type="success" />
          <Alert text="В тебе все вийде!!!!" type="warning" />
        </Container>
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
