public with sharing class ContactManager {

    @AuraEnabled(cacheable=true)
    public static list<Contact> fetchAllContacts(){

       List<Contact> conList = [SELECT Id,Name,Phone,Email,Account.Name FROM Contact];
       return conList;
    
    }
}
