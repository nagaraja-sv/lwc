import { LightningElement } from 'lwc';
import fetchCaseDetails from '@salesforce/apex/caseManager.fetchCases';
import closeCase from '@salesforce/apex/caseManager.closedCase';

export default class CaseManger extends LightningElement {

    searchCaseNumber;
    cases;
    errorDetails;
    caseCloseMessage;

    caseNumberChange(event){
        this.searchCaseNumber = event.target.value;
        console.log('this.searchCaseNumber'+this.searchCaseNumber);
        fetchCaseDetails({caseNumber:this.searchCaseNumber})
        .then(result=>{
            this.cases = result;
        })
        .catch(error=>{
            this.errorDetails=error;
        });
    }

    passCaseToClose(event){

        console.log('==>'+event.target.name);
        this.caseId = event.target.name;

        closeCase({CaseId:this.caseId})
        .then(result=>{

            this.caseCloseMessage = result;
            console.log('===> Result'+result);

        })
        .catch(error=>{

            this.errorDetails = error;
        })

    }
}