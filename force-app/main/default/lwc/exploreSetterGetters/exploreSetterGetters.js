import { LightningElement,track } from 'lwc';

export default class ExploreSetterGetters extends LightningElement {

    welcomeMeessage = 'Hi Salesforce ';
    @track finalMessage;

    get message(){
        return this.welcomeMeessage;
    }
    set message(value){
        thsi.finalMessage = value.toUpperCase();
    }

    handleChange(event){
        this.message = event.target.value;
        
    }
}