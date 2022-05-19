import { api, LightningElement } from 'lwc';
import addCaseComment from '@salesforce/apex/caseManager.addCaseComment';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CaseCommentCmp extends LightningElement {

    caseRecordId;
    caseCommentBody;

    @api setCaseRecordId(cid){
        this.caseRecordId = cid;
        alert(this.caseRecordId);
    }

    handleChnage(event){

        if (event.target.name == 'caseCmt') {
            
            this.caseCommentBody = event.target.value;
            
        }
    }

    createCaseComment(event){

        alert('hi');

        console.log('========>'+this.caseRecordId);

        console.log('inside createCaseComment this.caseRecId'+this.caseRecordId);
        console.log('inside createCaseComment this.caseCommentBody'+this.caseCommentBody);
        
        addCaseComment({caseId:this.caseRecordId,cBody:this.caseCommentBody})
        .then(result=>{          
            const evt = new ShowToastEvent({
                title :'success',
                message: 'Case Comment added',
                variant:"success"
            });
            this.dispatchEvent(evt);
        })
        .error(error=>{
            const evt = new ShowToastEvent({
                title :'Error',
                message: 'Some exception added',
                variant:"Error"
            });
            this.dispatchEvent(evt);
        })
    }

    }

