import s from './TodoList.module.css';
console.log(s);

const TodoList = ({ todos, deleteTodo ,onToggleCompleted}) => (
  <ul className={s.TodoList}>
    <div>
      <p>Загальна кількість: {todos.length}</p>
      {/* <p>Воконано: {todos.filter(todos => todos.completed).length}</p> */}
      <p>
        Виконано:{' '}
        {todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0)}
      </p>
    </div>
    {todos.map(({ id, text,completed }) => (
      <li key={id} className={s.TodoListItem}>
        <input type="checkbox" checked={completed} onChange={()=>onToggleCompleted(id)}/>
        <p>{text}</p>
        <button
          type="button"
          className={s.TodoBtn}
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default TodoList;
