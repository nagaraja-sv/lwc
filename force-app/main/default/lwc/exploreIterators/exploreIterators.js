import { LightningElement } from 'lwc';

export default class ExploreIterators extends LightningElement {
    cars = [
        {
            Id: 1,
            Name: 'Tesla',
            Colour: 'Black'
        },
        {
            Id: 2,
            Name: 'Audi',
            Colour: 'Black'
            
        },
        {
            Id: 3,
            Name: 'Volvo',
            Colour: 'Black'
        }
    ];

    // when ever the cars collection is updated and only the value get refreshed
    // Each and every element with in the for loop identified with unquie value
}