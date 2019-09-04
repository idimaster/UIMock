import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

import {TextInput, DateInput, NameInput, SelectInput, ZipStateCity, Form, StepTitle, Wizard, CheckBox, Header} from '../controls';

export class AddInfo extends React.Component<any, {active: number}> {
    constructor(props : any){
        super(props);
        this.state = { active: 0 };
    }
    
    private handleStepSelect = (event: CommandPayload) => {
        this.setState({active: event.payload})
    }
    
    public componentDidMount() {
        let input = document.getElementById('addressField');
        let autocomplete = new google.maps.places.Autocomplete(input as HTMLInputElement);
    }
    
    render(): React.ReactElement<any> {
        return<div>
            <div className="wizard-pf-main">
                <div>
                    <Header label='2011 MAZDA 3 s Grand Touring'/>
                    <Form>
                        <TextInput label='Financial Institution'/>
                        <TextInput id='addressField' label='Address'/>
                        <ZipStateCity />
                        <Header label='Shane Doan, 58'/>
                        <CheckBox label='' info='Financial Responsibility Filing Needed?'/>
                        <SelectInput label='Filing Type'>
                            <option></option>
                            <option>SR-22</option>
                        </SelectInput>
                    </Form>
                </div>
            </div>
        </div>
    }
}