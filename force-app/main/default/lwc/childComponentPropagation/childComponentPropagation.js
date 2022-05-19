import { LightningElement } from 'lwc';

export default class ChildComponentEvent extends LightningElement {


    handleChnage(event){

            const msg = event.target.value;
            //create event
            const custEve = new CustomEvent('mycustomevent',{
                detail:msg,bubbles:true
            });
            //dispatch event 
            this.dispatchEvent(custEve);

    }
}