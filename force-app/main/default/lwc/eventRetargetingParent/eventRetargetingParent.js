import { LightningElement } from 'lwc';

export default class EventRetargetingParent extends LightningElement {


    handlePrevious(event){
        console.log(event.target);
        alert(event.target);
    }
}