import { LightningElement,api, wire } from 'lwc';
import getAccountContactCls from '@salesforce/apex/createAccountContactCls.getAccountContactCls'

export default class AccountContactWrapper extends LightningElement {

    @api accountwithcontact;
    @api error;

    @wire(getAccountContactCls)
    wiredAccountsWithContacts({error,data}){
        if(data){

            this.accountwithcontact = data;

        }
        else if(error){
            console.log('error');
            this.error = error;
        }
    }





}