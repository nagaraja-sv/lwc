public with sharing class accountDetailClass {

    @AuraEnabled(cacheable=true)
    public static  list<AccountWrapper> fetchAccountDetails(){
        list<AccountWrapper> accWrapperList = new list<AccountWrapper>();
        try {
            list<Account> acclist = [SELECT Id,Name,Type,(select Id from Contacts),(select id from cases),(select id from opportunities) From Account];  
            for(Account acc :acclist){
                AccountWrapper accDetail = new AccountWrapper();
                accDetail.accName = acc.Name;
                accDetail.accType = acc.Type;
                accDetail.totalCases = acc.cases.size();
                accDetail.totalContacts = acc.Contacts.size();
                accDetail.totalOpportunity = acc.opportunities.size();
                accWrapperList.add(accDetail);   
            }  
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return accWrapperList;
    }
 
    public class AccountWrapper{
        @AuraEnabled
        public string accName;
        @AuraEnabled
        public string accType;
        @AuraEnabled
        public integer totalCases;
        @AuraEnabled
        public integer totalContacts;
        @AuraEnabled
        public integer totalOpportunity;
    }
    
}
