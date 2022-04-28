import { LightningElement } from 'lwc';
import  CASE_OBJECT from "@salesforce/schema/Case";
import CASENUMBER_FIELD from "@salesforce/schema/Case.CaseNumber";
import STATUS_FIELD from "@salesforce/schema/Case.Status";
import ORIIGIN_FIELD from "@salesforce/schema/Case.Origin";
import REASON_FIELD from "@salesforce/schema/Case.Reason";
import DESCRIPTION_FIELD from "@salesforce/schema/Case.Description";
import ISCLOSED_FIELD from "@salesforce/schema/Case.Is_Closed__c";
import SUBJECT__FIELD from "@salesforce/schema/Case.Subject";
import ADDTIONALINFO_FILED from "@salesforce/schema/Case.Additional_info__c";
//import {ShowToastEvent} from "lightning/paltformShowToastEvent";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CaseCreateFiledRecordForm extends LightningElement {

    caseObject = CASE_OBJECT;

    caseFields = [CASENUMBER_FIELD,SUBJECT__FIELD,STATUS_FIELD,ORIIGIN_FIELD,REASON_FIELD,DESCRIPTION_FIELD,ISCLOSED_FIELD,ADDTIONALINFO_FILED];

    handleSuccess(event){

        const evt = new ShowToastEvent({

            title : 'Case Created',
            message: 'Record Id'+event.detail.id,
            variant:'Success'

        });
        this.dispatchEvent(evt);

    }
}