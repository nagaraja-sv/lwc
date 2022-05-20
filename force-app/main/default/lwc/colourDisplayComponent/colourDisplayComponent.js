import { LightningElement, track, wire} from 'lwc';

import { registerListener, unregisterAllListeners } from 'c/pubsub';

import {CurrentPageReference} from 'lightning/navigation';

export default class ColorDisplayComp extends LightningElement {

    @track color;

    @wire(CurrentPageReference) pageRef;

    connectedCallback(){

        registerListener("colorChanged",this.handelChange,this);

    }

    disconnectedCallback(){

        unregisterAllListeners(this);

    }

    handelChange(cCode){

        this.color = cCode;

    }

    get choosenColor(){ 

        console.log('this.color in sub',this.color);     

        return `background-color: ${this.color}`;

    }

}