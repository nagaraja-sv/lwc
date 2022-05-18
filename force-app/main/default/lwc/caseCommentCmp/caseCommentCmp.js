import { api, LightningElement } from 'lwc';
import addCaseComment from '@salesforce/apex/caseManager.addCaseComment';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CaseCommentCmp extends LightningElement {

    caseRecordId;
    caseCommentBody;

    @api
    setCaseRecordId(cid){
        this.caseRecordId = cid;
    }

    handleChnage(event){

        if (event.target.name == 'caseCmt') {
            
            this.caseCommentBody = event.target.value;
            
        }
    }

    createCaseComment(event){

        addCaseComment({caseId:this.caseRecordId,cBody:this.caseCommentBody})
        .then(result=>{
            const evt = new ShowToastEvent({

                title : 'Case Created',
                message: 'Case Comment is added ',
                variant:'Success'
    
            });
            this.dispatchEvent(evt);


        })
        .catch(error=>{

            const evt = new ShowToastEvent({

                title : 'Error',
                message: 'Case Comment is not added ',
                variant:'error'
    
            });
            this.dispatchEvent(evt);

        })

    }

} 