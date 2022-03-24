import { LightningElement } from 'lwc';

export default class EventChildComponent extends LightningElement {
    handleClick(){

        //1 
        const receivedata = new CustomEvent('receivedata',{detail : 'hey I am spiderman from child '});
        //2 
        this.dispatchEvent(receivedata);
    }
}