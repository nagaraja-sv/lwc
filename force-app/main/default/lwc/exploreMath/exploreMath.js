import { api,track, LightningElement } from 'lwc';

export default class ExploreMath extends LightningElement {

    @track totalTaxableAmount;

    @api calculate(totalAmount,taxPercentage){
        console.log('=========> child');
        this.totalTaxableAmount = (totalAmount * taxPercentage)/100;
        console.log('=========> child');
        return this.totalTaxableAmount;
    }
}