import { LightningElement } from 'lwc';

export default class EventChildComponent extends LightningElement {
    handleClick(){

        //1 
        const receivedata = new CustomEvent('receivedata');
        //2 
        this.dispatchEvent(receivedata);
    }
}