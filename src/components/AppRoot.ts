import { Component } from "../helpers/Component.js";

@Component({
    selector: 'app-root'
})
export class AppRoot extends HTMLElement {
    state: {
        date: Date;
    }
    constructor(){
        super();
        this.innerHTML = 
        `
            <app-current-time></app-current-time>
            <app-todo-list></app-todo-list>
        `
    }
}