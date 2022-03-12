import { LightningElement } from 'lwc';

export default class ExploreTaxCalculation extends LightningElement {

    totalAmount;
    taxPercentage;
    totalTaxAmount;

    handleChange(event){

        console.log('=========>1');

        const field = event.target.name;

        console.log('=========>2');

        if(field === 'totalAmount'){
            this.totalAmount = event.target.value;  
            console.log('=========>3');
        }
        if(field === 'taxPercentage'){
            this.taxPercentage = event.target.value;
            console.log('=========>4');
        }
        if(this.totalAmount !== undefined && this.taxPercentage !== undefined){
            this.totalTaxAmount = this.template.querySelector('c-explore-math').calculate(this.totalAmount, this.taxPercentage);
            
        }
    }

}