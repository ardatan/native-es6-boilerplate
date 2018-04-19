import { Component } from "../helpers/Component.js";
import { localStorageProxy } from "../services/localStorageProxy.js";
import { ChildElement } from "../helpers/ChildElement.js";

export interface Todo {
    value: string;
}

@Component({
    selector: 'app-todo-list'
})
export class AppTodoList extends HTMLElement {
    @ChildElement('#todoAddForm') todoAddForm : HTMLFormElement;
    @ChildElement('#todoValueInput') todoValueInput : HTMLInputElement;
    connectedCallback(){
        this.createShadowRoot();
        localStorageProxy.todoList = localStorageProxy.todoList || [];
        this.render();
    }
    addTodo(value: string){
        localStorageProxy.todoList = [...localStorageProxy.todoList, {value}];
        this.render();
    }
    assignEventListeners(){
        this.todoAddForm.onsubmit = () => {
            this.addTodo(this.todoValueInput.value);
            return false;
        };
    }
    render(){
        this.shadowRoot.innerHTML = `
            <style>
                li {
                    color: red;
                }
            </style>
            <form id="todoAddForm">
                <input id="todoValueInput">
                <input type="submit">
            </form>
            <ul>
                ${localStorageProxy.todoList.map(todo => `<li>${todo.value}</li>`)}
            </ul>
        `
        this.assignEventListeners();
    }
}