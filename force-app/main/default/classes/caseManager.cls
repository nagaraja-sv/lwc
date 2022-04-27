public with sharing class caseManager {
   

    @AuraEnabled
    public static List<Case> fetchCases(string caseNumber){
        try {
            
            if (string.isNotBlank(caseNumber)) {

                string searchCase = '%'+caseNumber+'%';

                return [SELECT ID,Account.name,CaseNumber,Origin,IsClosedOnCreate,Description,Status,Priority,Subject,Is_Closed__c FROM Case WHERE caseNumber like: searchCase];
                
            }else {
                return NULL;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static string closedCase(string CaseId){
        string message;
        try {
            case cs = new case(Id=caseId);
            cs.Is_Closed__c = true;

            update cs;
            message = 'Success';
            

            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return message;
    }

}