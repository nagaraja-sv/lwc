import { LightningElement } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';
import CASENUMBER_FIELD from '@salesforce/schema/Case.CaseNumber';
 
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';

export default class CaseRecordViewForm extends LightningElement {

    recordId = '5005g00000O41AtAAJ';
    caseObject = CASE_OBJECT;
    caseNumberField = CASENUMBER_FIELD;
    subjectField = SUBJECT_FIELD;
    caseDescField = DESCRIPTION_FIELD;



}