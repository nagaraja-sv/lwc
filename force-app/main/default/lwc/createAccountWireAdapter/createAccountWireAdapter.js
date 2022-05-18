import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import EMPLOYEE_FIELD from '@salesforce/schema/Account.NumberOfEmployees';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateAccountWireAdapter extends LightningElement {

        error;
        accId;

        accRecord = {

            Name: NAME_FIELD,
            Phone: PHONE_FIELD,
            Industry: INDUSTRY_FIELD,
            employee: EMPLOYEE_FIELD
        };

        handleChange(event){
            if(event.target.name == 'accname'){
                this.accRecord.Name = event.target.value;   
            }

            else if(event.target.name == 'accphone'){
                this.accRecord.Phone = event.target.value;
            }

            else if(event.target.name == 'accindustry'){
                this.accRecord.Industry = event.target.value;
            }

            else if(event.target.name == 'accemp'){
                this.accRecord.employee = event.target.value;
            }
        }
        createAcoount(event){

            const fields = {};
            fields[NAME_FIELD.fieldApiName] = this.accRecord.Name;
            fields[PHONE_FIELD.fieldApiName] = this.accRecord.Phone;
            fields[INDUSTRY_FIELD.fieldApiName] = this.accRecord.Industry;
            fields[EMPLOYEE_FIELD.fieldApiName] = this.accRecord.employee;

            const recordInput = {apiName:ACCOUNT_OBJECT.objectApiName,fields};

            createRecord(recordInput)
            .then(result=>{
                this.accId = result.id;
                const evt = new ShowToastEvent({
                    title :'success',
                    message: 'Account Record',
                    variant:"success"
                });
                this.dispatchEvent(evt);
            })
            .error(error=>{
                    const evt = new ShowToastEvent({
                        title :'Error',
                        message: 'Account Not Record',
                        variant:"Error"
                    });
                    this.dispatchEvent(evt);

            })

        }
}