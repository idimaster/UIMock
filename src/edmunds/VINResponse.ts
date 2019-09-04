import {Make} from './Make';
import {Model} from './Model';
import {Year} from './Year';

export interface VINResponse {
    vin: string;
    squishVin: string;
    make: Make;
    model: Model;
    years: Year[];
    engine: any;
    transmission: any;
    drivenWheels: any;
    numOfDoors: number;
    options: any;
    colors: any;
    equipment: any;
    manufacturer: string;
    manufacturerCode: string;
    matchingType: string;
    MPG: MPG;
}

export interface MPG {
    highway: number;
    city: number;
}
