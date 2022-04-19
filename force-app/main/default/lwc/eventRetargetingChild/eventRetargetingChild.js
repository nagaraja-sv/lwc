import { LightningElement } from 'lwc';

export default class EventRetargetingChild extends LightningElement {



    handleClick(event){

        console.log(event.target);

        alert(event.target);

        this.dispatchEvent(new CustomEvent("previous"));

    }

}