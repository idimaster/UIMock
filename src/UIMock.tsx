import * as React from 'react'

import {CommandPayload, OnSelectCallback, Wizard, WizardButtons} from 'patternfly-react';

import {TextInput, Form, StepTitle, Title} from './controls';
import {Customer, Vehicles, Drivers, Reports, Quotes, AddInfo, Purchase, Overview} from './steps';

const addViolation = <div className="btn-group dropup">
  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Add Violation <span className="caret"></span>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Shane Doan, 58</a></li>
    <li><a href="#">Andrea Doan, 25</a></li>
  </ul>
</div>

const addClaim = <div className="btn-group dropup">
  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Add Claim <span className="caret"></span>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Shane Doan, 58</a></li>
    <li><a href="#">Andrea Doan, 25</a></li>
  </ul>
</div>

const addSuspension = <div className="btn-group dropup">
  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Add Suspension <span className="caret"></span>
  </button>
  <ul className="dropdown-menu">
    <li><a href="#">Shane Doan, 58</a></li>
    <li><a href="#">Andrea Doan, 25</a></li>
  </ul>
</div>

const steps = [<Customer/>, <Vehicles/>, <Drivers/>, <Reports/>, <Quotes/>, <AddInfo/>, <Purchase/>, <Overview/>];
const actions = [null, 
<button type="button" className="btn btn-default">Add Vehicle</button>, 
<button type="button" className="btn btn-default">Add Driver</button>,
[addViolation, addClaim, addSuspension],
null,
null,
null,
null,
null
];

export class UIMock extends React.Component<any, {active: number}> {
    constructor(props : any){
        super(props);
        this.state = { active: 0 };
    }
    
    private handleStepSelect = (event: CommandPayload) => {
        this.setState({active: event.payload})
    }
    
    private handleNextStep = (event: CommandPayload) => {
        if (this.state.active < steps.length - 1) {
            this.setState({active: this.state.active + 1})
        }
    }
    
    private handleBackStep = (event: CommandPayload) => {
        if (this.state.active > 0) {
            this.setState({active: this.state.active - 1})
        }
    }
    
     render(): React.ReactElement<any> {
        return<Wizard>
            <div className="wizard-pf-body clearfix">
                <div className="wizard-pf-steps">
                    <ul className="wizard-pf-steps-indicator">
                        <Title number='1' title='Customer Info' active={this.state.active == 0} onSelect={this.handleStepSelect} payload={{command: 'select', payload: 0}}/>
                        <Title number='2' title='Vehicles' active={this.state.active == 1} onSelect={this.handleStepSelect} payload={{command: 'select', payload: 1}}/>
                        <Title number='3' title='Drivers' active={this.state.active == 2} onSelect={this.handleStepSelect} payload={{command: 'select', payload: 2}}/>
                        <Title number='4' title='Reports' active={this.state.active == 3} onSelect={this.handleStepSelect} payload={{command: 'select', payload: 3}} />
                        <Title number='5' title='Quotes' active={this.state.active == 4} onSelect={this.handleStepSelect} payload={{command: 'select', payload: 4}}/>
                        <Title number='6' title='Additional Info' active={this.state.active == 5} onSelect={this.handleStepSelect} payload={{command: 'select', payload: 5}}/>
                        <Title number='7' title='Purchase' active={this.state.active == 6} onSelect={this.handleStepSelect} payload={{command: 'select', payload: 6}} />
                        <Title number='8' title='Summary' active={this.state.active == 7} onSelect={this.handleStepSelect} payload={{command: 'select', payload: 7}}/>
                    </ul>
                </div>
                {steps[this.state.active]}
            </div>
            <WizardButtons first={this.state.active == 0} last={this.state.active==steps.length-1} onBack={this.handleBackStep} onNext={this.handleNextStep}>{actions[this.state.active]}</WizardButtons>
        </Wizard>
     }
}