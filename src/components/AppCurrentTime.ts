import { Component } from "../helpers/Component.js";

@Component({
    selector: 'app-current-time'
})
export class AppCurrentTime extends HTMLElement {
    currentTime: Date;
    intervalId: number;
    connectedCallback(){
        this.intervalId = setInterval(() => {
            this.currentTime = new Date();
            this.render();
        });
    }
    disconnectedCallback(){
        clearInterval(this.intervalId);
    }
    render(){
        this.innerHTML = 
        `
            <p>Current Time: ${this.currentTime.toLocaleTimeString()}
        `
    }
}