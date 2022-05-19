import { LightningElement } from 'lwc';

export default class ParentComponentEvent extends LightningElement {

    
message;




handleCustomEvent(event){

    const childMessage = event.detail;
    this.message = childMessage;

}
}