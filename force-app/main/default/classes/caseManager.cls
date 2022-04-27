public with sharing class caseManager {
   

    @AuraEnabled
    public static List<Case> fetchCases(string caseNumber){
        try {
            
            if (string.isNotBlank(caseNumber)) {

                string searchCase = '%'+caseNumber+'%';

                return [SELECT ID,Account.name,CaseNumber,Origin,IsClosedOnCreate,Description FROM Case WHERE caseNumber like: searchCase];
                
            }else {
                return NULL;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
