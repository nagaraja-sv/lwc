import { LightningElement, track, wire } from 'lwc';
import getLatestProperty from '@salesforce/apex/bmhPropertyDetailsCls.getLatestProperty';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class BmhMyPropertyResult extends LightningElement {

        @track properties;
        @track propertiesFound;
        @track propid;
          
       
        @wire(getLatestProperty)
        wiredProperties({data,error}){
            if(data){
                this.properties = data;
                //this.propertiesFound = true;
            }
            else if(error){
                this.showToast('Error',error.body.message,'error');
               // this.propertiesFound = false;
            }
        }
        get propertiesFound() {
            if (this.properties) {
                return true;
            }
            return false;
        }
        showToast(title,message,variant){
            const evt = new ShowToastEvent({
                title: title,
                message:message,
                variant:variant,
            });  
            this.dispatchEvent(evt);  
        }
    }


// What is the use of track property 
// why extends LightningElement for every javascript class
