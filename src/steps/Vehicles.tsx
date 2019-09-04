import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

import {TextInput, DateInput, NameInput, SelectInput, ZipStateCity, Form, StepTitle, Wizard, Static, YearMakeModel, CheckBox, Header} from '../controls';
import {VINResponse} from '../edmunds';

export class Vehicles extends React.Component<any, {active: number, data: VINResponse}> {
    constructor(props : any){
        super(props);
        this.state = { active: 0, data: {} as VINResponse };
    }
    
    private handleStepSelect = (event: CommandPayload) => {
        this.setState({active: event.payload, data: this.state.data})
    }
    
    private buildURL(vin): string {
        return 'https://api.edmunds.com/api/vehicle/v2/vins/' + vin + '?fmt=json&api_key=k7qd7qepyxzkasfpeb943zwm';
    }

    componentDidMount() {
        let input = document.getElementById('garagingAaddressField');
        let autocomplete = new google.maps.places.Autocomplete(input as HTMLInputElement);
    }
    
    private getPrevVIN(): string {
        if(this.state.data.vin) {
            return this.state.data.squishVin;
        }
        return '~#~';
    }
    
    private handleOnChange = (event: CommandPayload) => {
        if (event.payload && event.payload.length > 11 && !event.payload.toUpperCase().startsWith(this.getPrevVIN())) {
            $.getJSON(this.buildURL(event.payload), (data: any, textStatus: string, jqXHR: JQueryXHR) => {
                let response: VINResponse = data; 
                this.setState({active: this.state.active, data: response});
            })
            .fail(function() {
                this.setState({active: this.state.active, data: {} as VINResponse});
            }.bind(this));
        }
    }
    
    render(): React.ReactElement<any> {
        var style = '';
        var veh = {year: null, make: '', model: ''};
        var veh1Name = 'Vehicle #1';
        if (this.state.data.squishVin) {
            let data = this.state.data;
            veh = {year: data.years[0].year, make:data.make.name, model: data.model.name};
            style = data.years[0].styles[0].name;
            veh1Name = veh.year + ' ' + veh.make + ' ' + veh.model;
        }
        return <div>
            <div className="wizard-pf-main">
                <div>
                    <Header check={true} label='2016  Dodge Charger'/>
                    <Form>
                        <TextInput label='Declared Annual Distance'/>
                        <TextInput label='Odometer Reading'/>
                        <SelectInput label='Ownership'>
                            <option></option>
                            <option>Own</option>
                            <option>Leasing</option>
                            <option>Financing</option>
                        </SelectInput>
                        <CheckBox label='Garaging Address' info='same as "5690 West Paradise Lane, Glendale, AZ, United States"' value={true}/>
                    </Form>
                    <Header check={true} label={veh1Name}/>
                    <Form>
                        <TextInput label='VIN' onChange={this.handleOnChange}/>
                        <YearMakeModel label='Vehicle' value={veh}/>
                        <Static label='Style' value={style}/>
                        <TextInput label='Declared Annual Distance'/>
                        <TextInput label='Odometer Reading'/>
                        <SelectInput label='Ownership'>
                            <option></option>
                            <option>Own</option>
                            <option>Leasing</option>
                            <option>Financing</option>
                        </SelectInput>
                        <CheckBox label='Garaging Address' info='same as "5690 West Paradise Lane, Glendale, AZ, United States"'/>
                        <TextInput id='garagingAaddressField' label=''/>
                        <ZipStateCity />
                    </Form>
                    <Header check={true} label='2011 Accure MDX'/>
                    <Form>
                        <TextInput label='VIN' />
                        <YearMakeModel label='Vehicle' value={{year:2011, make:'Accura', model:'MDX'}}/>
                        <Static label='Style' />
                        <TextInput label='Declared Annual Distance'/>
                        <TextInput label='Odometer Reading'/>
                        <SelectInput label='Ownership'>
                            <option></option>
                            <option>Own</option>
                            <option>Leasing</option>
                            <option>Financing</option>
                        </SelectInput>
                        <CheckBox label='Garaging Address' info='same as "5690 West Paradise Lane, Glendale, AZ, United States"'/>
                        <TextInput id='garagingAaddressField1' label=''/>
                        <ZipStateCity />
                    </Form>
                </div>
            </div>
        </div>
    }
}