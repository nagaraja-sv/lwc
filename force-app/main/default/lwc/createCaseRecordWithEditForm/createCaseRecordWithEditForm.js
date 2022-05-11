import { LightningElement } from 'lwc';
import  CASE_OBJECT from "@salesforce/schema/Case";
import CASENUMBER_FIELD from "@salesforce/schema/Case.CaseNumber";
import STATUS_FIELD from "@salesforce/schema/Case.Status";
import ORIIGIN_FIELD from "@salesforce/schema/Case.Origin";
import REASON_FIELD from "@salesforce/schema/Case.Reason";
import DESCRIPTION_FIELD from "@salesforce/schema/Case.Description";
import ISCLOSED_FIELD from "@salesforce/schema/Case.Is_Closed__c";
import SUBJECT__FIELD from "@salesforce/schema/Case.Subject";

export default class CreateCaseRecordWithEditForm extends LightningElement {
    caseObject = CASE_OBJECT;
    statusField = STATUS_FIELD;
    originFiled = ORIIGIN_FIELD;
    reasonFiled = REASON_FIELD;
    subjectField = SUBJECT__FIELD;
    descriptionField = DESCRIPTION_FIELD;

}