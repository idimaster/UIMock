import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

import {TextInput, DateInput, NameInput, SelectInput, ZipStateCity, Form, StepTitle, Wizard, Coverage, TaxLabel, AlertInfo, PaymentPlan, Static} from '../controls';

export class Quotes extends React.Component<any, {active: number}> {
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
                        <PaymentPlan label='Payment Plan'/>
                        <Static label='Payment Today' value='$114.67'/>
                    </Form>
                    <AlertInfo>Good Driving Discount</AlertInfo>
                    <AlertInfo>Defensive Driver Discount</AlertInfo>
                    <AlertInfo>Loyal customer discount</AlertInfo>
                    <div className="row">
                        <div key='min' className="col-xs-6 col-md-3">
                            <div className="thumbnail active" tabIndex={0}>
                                <img src="minimal.png" alt="..."/>
                                <div className="caption">
                                    <h2><strong>$114.67</strong></h2>
                                    <p className='text-muted'>each payment,<br/> plus taxes and fees</p>
                                    <Form>
                                        <Coverage label='Bodily Injury'/>
                                        <Coverage label='Property Damage'/>
                                        <Coverage label='UM/UIM BI'/>
                                        <Coverage label='UM/UIM PD'/>
                                        <Coverage label='Medical Payments'/>
                                    </Form> 
                                    <h3><strong>2011 MAZDA 3</strong></h3>
                                    <Form>
                                        <Coverage label='Comprehensive'/>
                                        <Coverage label='Collision'/>
                                    </Form> 
                                    <h3><strong>2007 Toyota Tundra</strong></h3>
                                    <Form>
                                        <Coverage label='Comprehensive'/>
                                        <Coverage label='Collision'/>
                                    </Form> 
                                    <hr/>
                                    <Form>
                                        <TaxLabel label='City Tax'/>
                                        <TaxLabel label='State Tax'/>
                                        <TaxLabel label='MVLE Fee'/>
                                    </Form>    
                                    <hr/>
                                    <h2><strong>Total: $125</strong></h2>
                                </div>
                            </div>
                        </div>    
                       <div key='r4u' className="col-xs-6 col-md-3">
                            <div className="thumbnail"tabIndex={0}>
                                <img src="right4U.png" alt="..."/>
                                <div className="caption">
                                    <h2><strong>$135.67</strong></h2>
                                    <p className='text-muted'>each payment,<br/> plus taxes and fees</p>                                     
                                    <Form>
                                        <Coverage label='Bodily Injury'/>
                                        <Coverage label='Property Damage'/>
                                        <Coverage label='UM/UIM BI'/>
                                        <Coverage label='UM/UIM PD'/>
                                        <Coverage label='Medical Payments'/>
                                    </Form> 
                                    <h3><strong>2011 MAZDA 3</strong></h3>
                                    <Form>
                                        <Coverage label='Comprehensive'/>
                                        <Coverage label='Collision'/>
                                    </Form> 
                                    <h3><strong>2007 Toyota Tundra</strong></h3>
                                    <Form>
                                        <Coverage label='Comprehensive'/>
                                        <Coverage label='Collision'/>
                                    </Form> 
                                    <hr/>
                                    <Form>
                                        <TaxLabel label='City Tax'/>
                                        <TaxLabel label='State Tax'/>
                                        <TaxLabel label='MVLE Fee'/>
                                    </Form>    
                                    <hr/>
                                    <h2><strong>Total: $158</strong></h2>
                                </div>
                            </div>
                        </div>
                        <div key='safe' className="col-xs-6 col-md-3">
                            <div className="thumbnail" tabIndex={0}>
                                <img src="feel-safe.png" alt="..."/>
                                <div className="caption">
                                    <h2><strong>$156.60</strong></h2>
                                    <p className='text-muted'>each payment,<br/> plus taxes and fees</p>                                    
                                    <Form>
                                        <Coverage label='Bodily Injury'/>
                                        <Coverage label='Property Damage'/>
                                        <Coverage label='UM/UIM BI'/>
                                        <Coverage label='UM/UIM PD'/>
                                        <Coverage label='Medical Payments'/>
                                    </Form> 
                                    <h3><strong>2011 MAZDA 3</strong></h3>
                                    <Form>
                                        <Coverage label='Comprehensive'/>
                                        <Coverage label='Collision'/>
                                    </Form> 
                                    <h3><strong>2007 Toyota Tundra</strong></h3>
                                    <Form>
                                        <Coverage label='Comprehensive'/>
                                        <Coverage label='Collision'/>
                                    </Form> 
                                    <hr/>
                                    <Form>
                                        <TaxLabel label='City Tax'/>
                                        <TaxLabel label='State Tax'/>
                                        <TaxLabel label='MVLE Fee'/>
                                    </Form>    
                                    <hr/>
                                    <h2><strong>Total: $178</strong></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}