//Referencias al HTML

import { Todo } from "../js/todo.class";
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');
const inputTxt = document.querySelector('.new-todo')

export const crearTodoHtml = ( todo )  => {

    const HtmlTodo = 
    `<li class="${ (todo.completado) ? "completed" : "" }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? "checked" : "" }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = HtmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}

inputTxt.addEventListener('keyup', ( event ) => {

    if ( (event.keyCode === 13) && (inputTxt.value.length > 0) ) {

        const nuevaTarea = new Todo( inputTxt.value );

        todoList.nuevoTodo( nuevaTarea );

        console.log(todoList);

        crearTodoHtml( nuevaTarea );

        inputTxt.value = "";

    } 

})

divTodoList.addEventListener('click' , ( event ) => {

    const nombreElemnto = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id')

    if (nombreElemnto.includes('input')) {

        todoList.marcarCompletado( todoId );
        
        todoElemento.classList.toggle('completed');

    }

})