import { LightningElement,track } from 'lwc';

export default class ExploreTodoList extends LightningElement {

        @track todo;
        @track todoArray = [];

  

    handleClick(){

        console.log('calling click method'+this.todo);
        const todoObj = {
            id: null,
            name: ''
        }

        todoObj.id = Math.round(Math.random() * 100);
        todoObj.name = this.todo;

        this.todoArray.unshift(todoObj);

    }
    handleChange(event){
        this.todo = event.target.value;

    }

}