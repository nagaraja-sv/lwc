public with sharing class bmhPropertyDetailsCls {
    public bmhPropertyDetailsCls() {

    }
    @AuraEnabled(cacheable=true)
    public static list<Property__c> getLatestProperty(){
        try {

            list<Property__c> allLatestProp = New list<Property__c>();

            allLatestProp = [SELECT Additional_Room__c,Area__c,
                            Available_From__c,Carpet_area_sqft__c,country__c,
                            Coverd_area_sqft__c,CreatedById,CreatedDate,Electricity_Status__c,Facing__c,
                            Floor__c,For_Bachellor__c,For_Family__c,Furnished_Type__c,Furnishning_Available__c,
                            Geo_Map__c,Geo_Map__Latitude__s,Geo_Map__Longitude__s,Id,IsDeleted,
                            Landmark__c,LastActivityDate,LastModifiedById,LastModifiedDate,Location__c,
                            Maintainance_Charge__c,Name,No_of_Balcony__c,No_Of_Bath_Room__c,No_Of_Bed_Room__c,
                            OwnerId,Property_Description__c,Property_Main_Image__c,Property_Owner__c,
                            Property_Video_URL__c,Rent__c,Security_Deposit__c,State__c,Status__c,street__c,
                            SystemModstamp,Verified__c,Water_Availability__c FROM Property__c limit 50];

            return allLatestProp;

            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
