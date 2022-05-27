import { LightningElement,track } from 'lwc';

export default class BmhMyPropertyFilter extends LightningElement {

    @track location;
    @track noOfBedRooms;
    @track noOfBathRooms;
    @track maxBudget;

    get locationOptions(){
        return [
            {label:'ALL',value:'ALL'},
            {label:'Bangalore',value:'Bangalore'},
            {label:'Mumbai',value:'Mumbai'},
            {label:'Hyderabad',value:'Hyderabad'}   
        ];
    }

    get noOfBedRoomsOptions(){
        return [
            {label:'ALL',value:'ALL'},
            {label:'1',value:'1'},
            {label:'2',value:'2'},
            {label:'3',value:'3'},
            {label:'4',value:'4'}   
        ];

    }

    get noOfBathRoomsOptions(){
        return [
            {label:'ALL',value:'ALL'},
            {label:'1',value:'1'},
            {label:'2',value:'2'},
            {label:'3',value:'3'},
            {label:'4',value:'4'}   
        ];

    }
}