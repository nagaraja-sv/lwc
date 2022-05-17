import { LightningElement } from 'lwc';
import  CASE_OBJECT from "@salesforce/schema/Case";
import CASENUMBER_FIELD from "@salesforce/schema/Case.CaseNumber";
import STATUS_FIELD from "@salesforce/schema/Case.Status";
import ORIIGIN_FIELD from "@salesforce/schema/Case.Origin";
import REASON_FIELD from "@salesforce/schema/Case.Reason";
import DESCRIPTION_FIELD from "@salesforce/schema/Case.Description";
import ADDTIONAL_FIELD from "@salesforce/schema/Case.Additional_info__c";
import SUBJECT__FIELD from "@salesforce/schema/Case.Subject";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateCaseRecordWithEditForm extends LightningElement {
    caseObject = CASE_OBJECT;
    statusField = STATUS_FIELD;
    originFiled = ORIIGIN_FIELD;
    reasonFiled = REASON_FIELD;
    subjectField = SUBJECT__FIELD;
    descriptionField = DESCRIPTION_FIELD;
    addiotnalField = ADDTIONAL_FIELD;
    origialAddtional = 'Test';

    handleSuccess(event){

        console.log(event.detail.id);

        const evt = new ShowToastEvent({

            title : 'Case Created',
            message: 'Record Id'+event.detail.id,
            variant:'Success'

        });
        this.dispatchEvent(evt);

    }

    handleCancel(event){

        const inputFileds = this.template.querySelectorAll('lightning-input-field');
        if(inputFileds){
            inputFileds.forEach(field => {
                field.reset();
            });
        }
    }

}