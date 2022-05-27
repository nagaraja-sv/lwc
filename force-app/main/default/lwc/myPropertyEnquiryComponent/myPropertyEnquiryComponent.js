import { api, LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class MyPropertyEnquiryComponent extends LightningElement {
    @api objectApiName;
    @api propertyId;


    handleSuccess(){

                const evt = new ShowToastEvent({
                    title :'Feedback submitted',
                    message: 'Success',
                    variant:"Success"
                });
                this.dispatchEvent(evt);


    }

}