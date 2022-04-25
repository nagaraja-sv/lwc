public with sharing class ProductManager {
    
    @AuraEnabled(cacheable=true)
    public static list<Product2> FindAllProduct(){
        try {

            List<Product2> listProducts = [SELECT Id,Name,ProductCode,Description,Family FROM Product2 WHERE IsActive=TRUE];

            System.debug('=========>'+listProducts);

            return listProducts;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
