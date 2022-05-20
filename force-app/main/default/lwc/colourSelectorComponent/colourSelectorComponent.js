/* eslint-disable no-console */

/* eslint-disable no-undef */

import { LightningElement,track, wire } from 'lwc';

import {fireEvent} from 'c/pubsub';

import {CurrentPageReference} from 'lightning/navigation';

export default class ColorSelectorComp extends LightningElement {

    @track selectedColor="yellow";

    @wire(CurrentPageReference) pageRef;

    listOfColor=[

        {label:"red",value:"red"},

        {label:"yellow",value:"yellow"},

        {label:"blue",value:"blue"},

        {label:"green",value:"green"}

    ];

   

    changeColor(event){

        console.log('event.target.value'+event.target.value);

        this.selectedColor = event.target.value;

    }

    handelColorChange(){

        console.log('this.selectedColor'+this.selectedColor);

        fireEvent(this.pageRef,"colorChanged",this.selectedColor);

    }

}
