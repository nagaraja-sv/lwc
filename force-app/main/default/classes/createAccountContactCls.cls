public with sharing class createAccountContactCls {

    @auraEnabled(cacheable=true)
    public static list<AccountContactListWrapper> createAccountContactCls() {

        list<AccountContactListWrapper> accWrapperList = new list<AccountContactListWrapper>();
        list<Account> accList = [SELECT ID,Name,(SELECT Id,FirstName,LastName,Email,MobilePhone from contacts) From Account];

        if (!accList.isEmpty()) {

            for (Account acc : accList) {
                AccountContactListWrapper accConWrapper = new AccountContactListWrapper();
                accConWrapper.accRecord = acc;
                accConWrapper.contactList = acc.contacts;
                accConWrapper.contactCount = acc.contacts.size();
                accWrapperList.add(accConWrapper);
            }
            
        }
        return accWrapperList;

    }

    public class AccountContactListWrapper{

        public account accRecord{get;set;}
        public list<contact> contactList{get;set;}
        public integer contactCount {get;set;}
    }
}
