import { LightningElement } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';

export default class CaseRecordForm extends LightningElement {

    caseObject = CASE_OBJECT;
}