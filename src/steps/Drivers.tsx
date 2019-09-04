import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

import {TextInput, DateInput, NameInput, SelectInput, ZipStateCity, Form, StepTitle, Wizard, Static, YearMakeModel, CheckBox, RatioGroup, CheckGroup, CheckGroup1, Gender, MaritalStatus, License, DOB, Header} from '../controls';
import {VINResponse} from '../edmunds';

export class Drivers extends React.Component<any, any> {
    constructor(props : any){
        super(props);
    }
    
    componentDidMount() {
        let input = document.getElementById('garagingAaddressField');
        let autocomplete = new google.maps.places.Autocomplete(input as HTMLInputElement);
    }
    
    render(): React.ReactElement<any> {
        return <div>
            <div className="wizard-pf-main">
                <div>
                    <Header check={true} label='Shane Doan, 58'><label className="control-label"><input type="checkbox" checked/> Named Insured</label></Header>
                    <Form>
                        <RatioGroup label='License Status'/>
                        <CheckGroup label='Type'/>
                        <CheckBox label='Home Address' info='same as "5690 West Paradise Lane, Glendale, AZ, United States"' value={true}/>
                    </Form>
                    <Header check={true} label='Andrea Doan, 25'><label className="control-label"><input type="checkbox"/> Named Insured</label></Header>
                    <Form>
                        <RatioGroup label='License Status'/>
                        <CheckGroup label='Type'/>
                        <CheckBox label='Home Address' info='same as "5690 West Paradise Lane, Glendale, AZ, United States"' value={true}/>
                    </Form>
                    <Header check={true} label='New Driver'><label className="control-label"><input type="checkbox"/> Named Insured</label></Header>
                    <Form>
                        <NameInput label='Customer'/>
                        <DOB label='Date of Birth' info='Age:' val='46 years'/>
                        <Gender label='Gender'/>
                        <MaritalStatus label='MaritalStatus'/>
                        <DOB label='Age First Licensed' info='Driving Experience:' val='18 years'/>
                        <License label='License'/>
                        <RatioGroup label='License Status'/>
                        <CheckGroup label='Type'/>
                        <CheckBox label='Home Address' info='same as "5690 West Paradise Lane, Glendale, AZ, United States"' value={true}/>
                    </Form>
                </div>
            </div>
        </div>
    }
}