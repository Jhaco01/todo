import { crearTodoHtml } from './js/componentes';
import { Todo, TodoList } from './js/index';
import './styles.css';

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo( tarea );

console.log(todoList);

crearTodoHtml( tarea );