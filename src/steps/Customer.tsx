import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

import {TextInput, DateInput, NameInput, SelectInput, ZipStateCity, Form, StepTitle, Wizard} from '../controls';

export class Customer extends React.Component<any, {active: number}> {
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
                    <Form>
                        <DateInput label='Effective Date' />
                        <SelectInput label='Term'>
                            <option></option>
                            <option>Annual</option>
                            <option>Semi Annual</option>
                        </SelectInput>
                        <NameInput label='Customer'/>
                        <DateInput label='Date of Birth' />
                        <TextInput id='addressField' label='Address'/>
                        <ZipStateCity />
                    </Form>
                </div>
            </div>
        </div>
    }
}