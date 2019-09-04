import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

import {TextInput, DateInput, StaticStrong, NameInput, Payment, SelectInput, ZipStateCity, Form, StepTitle, Wizard, CheckBox, Header, BankAccount, Agreement, CCExpiration, AlertSuccess, Static, FormGroup, EmptyFormGroup, SelectTab} from '../controls';

export class Purchase extends React.Component<any, {active: string}> {
    constructor(props : any){
        super(props);
        this.state = { active: 'card' };
    }
    
    private handleChange = (event: CommandPayload) => {
        this.setState({active: event.payload})
    }
    
    public componentDidMount() {
        let input = document.getElementById('addressField');
        let autocomplete = new google.maps.places.Autocomplete(input as HTMLInputElement);
    }
    
    renderForm() {
        if (this.state.active === 'bank') 
        {
            return [<BankAccount label='Bank Account'/>,
                    <Static label='Bank' value='Bank of America'/>]
        } else if (this.state.active === 'card') {
            return [<TextInput label='Card Number'/>,
                    <CCExpiration label='Expiration'/>];          
        }
        return [<EmptyFormGroup/>, 
        <EmptyFormGroup/>];    
    }
    
    render(): React.ReactElement<any> {
        let buttonStyle = this.state.active === '' ? "btn btn-primary disabled" : "btn btn-primary"
        return<div>
            <div className="wizard-pf-main">
                <div>
                    <Header label='Payment method'></Header>
                    <Form>
                        <SelectTab selected={this.state.active} onSelect={this.handleChange} 
                            options={[{value: 'card', label: 'Credit/Debit Card'},
                            {value: 'bank', label: 'Bank Account'}]}/>
                        {this.renderForm()}
                        <CheckBox label='Billing Address' info='same as "5690 West Paradise Lane, Glendale, AZ, United States"'/>
                    </Form>
                    <Header label='Payment'></Header>
                    <Form>
                        <Payment label='Amount' value='$67.45'/>
                        <Agreement>
                        I authorize <strong>Agency Co.</strong> to charge my credit card account starting on 
                        <strong> 10/12/2016</strong> and on the <strong>7th</strong> day of each month following through 
                        <strong> 10/12/2017</strong> for the amount of <strong>$67.45</strong>
                        </Agreement>
                        <TextInput label='email'/>
                        <TextInput label='Phone #'/>
                        <CheckBox label='' info='Sign-up for paperless billing'/>
                        <FormGroup>
                            <button type="button" className={buttonStyle}>Purchase</button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    }
}

                     /*   <SelectInput label='Payment method' onChange={this.handleChange}>
                            <option value=''></option>
                            <option value='card'>Credit/Debit card</option>
                            <option value='bank'>Bank Account</option>
                        </SelectInput>*/