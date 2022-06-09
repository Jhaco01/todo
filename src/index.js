import { crearTodoHtml } from './js/componentes';
import { Todo, TodoList } from './js/index';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );
