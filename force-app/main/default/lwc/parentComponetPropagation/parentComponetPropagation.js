import { LightningElement } from 'lwc';

export default class ParentComponetPropagation extends LightningElement {

    message;

    constructor(){
        super();
        this.template.addEventListener('mycustomevent',this.handleCustomEvent.bind(this));
    }

    handleCustomEvent(event){
        const childMes = event.detail;
        this.message = childMes;
    }
}