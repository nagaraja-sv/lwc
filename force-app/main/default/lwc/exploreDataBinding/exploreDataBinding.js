import { LightningElement,api } from 'lwc';

export default class ExploreDataBinding extends LightningElement {

    @api message = 'Hey!! Salesforce Jardha';

   /* handleUpdate(event){
        this.message = event.target.value;
        // Explore about this keyword in javascript
        console.log(this.message);
    }*/

    // Events fire in child and handled in the parent 
    // In the parent will try to update the proprty and property value will send back to the parent.
    // Data flows happens in the only one direction top to bottom.

    // the value sent from the parent to child can't be modified and consider it as read only value.

    // we can't update the values of properties in the child component and for that we need to use the events and parents will update the values in the child..
    



}