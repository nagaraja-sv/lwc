import { LightningElement, track } from 'lwc';

export default class EventParentComponent extends LightningElement {

     @track message;
    handleReceiveData(){

        this.message = 'Heey !! I am being invoked';

        console.log('Heey !! I am being invoked ');

    }


}