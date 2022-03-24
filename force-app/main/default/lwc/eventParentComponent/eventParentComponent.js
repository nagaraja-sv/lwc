import { LightningElement, track } from 'lwc';

export default class EventParentComponent extends LightningElement {

     @track message;
    handleReceiveData(event){

        this.message = event.detail;

        console.log(event.detail);

    }


}