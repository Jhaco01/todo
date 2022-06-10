//Referencias al HTML

import { Todo } from "../js/todo.class";
import { todoList } from "../index";

const divTodoList = document.querySelector('.todo-list');
const inputTxt = document.querySelector('.new-todo');
const botonBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');

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

    } else if (nombreElemnto.includes('button')){

        todoList.eliminarTodo( todoId );

        divTodoList.removeChild( todoElemento );

        console.log(todoList);

    }

})

botonBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();
  
    for (let i=divTodoList.children.length-1; i>=0 ;i--){

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')){
            divTodoList.removeChild( elemento );
        }
    }

    console.log(todoList);

})

ulFiltros.addEventListener('click',( event ) => {

    const filtro = event.target.text;
    if (!filtro) { return ; }

    for (const elemento of divTodoList.children){
        console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch ( filtro ) {
            case 'completados':                
                if (!completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'pendientes':                
                if (completado){
                    elemento.classList.add('hidden');
                }
                break;            
        }

    }

})