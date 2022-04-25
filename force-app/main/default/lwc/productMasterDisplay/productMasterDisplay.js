import { LightningElement, track, wire } from 'lwc';
import findAllProduct from '@salesforce/apex/ProductManager.FindAllProduct';
export default class ProductMasterDisplay extends LightningElement {
       @track allProducts;
       @track errorDetails;

        @wire(findAllProduct)
        processAllProducts({error,data}){
            console.log('======>'+data);
            console.log('======>'+error);

            if (data) {

                this.allProducts = data;
                console.log('======>'+this.allProducts );
                
            }
            else if(error){

                this.errorDetails = error;

            }

        }
}