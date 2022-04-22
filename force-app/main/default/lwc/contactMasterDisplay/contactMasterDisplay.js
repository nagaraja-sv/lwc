import { LightningElement, wire } from 'lwc';
import fetchAllContacts from '@salesforce/apex/ContactManager.fetchAllContacts';

export default class ContactMasterDisplay extends LightningElement {

    @wire(fetchAllContacts)
    contacts; 
}