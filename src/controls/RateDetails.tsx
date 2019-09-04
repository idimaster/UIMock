import * as React from 'react'

import {Form} from './Form'
import {Coverage} from './Coverage'
import {TaxLabel} from './TaxLabel'

export class RateDetails extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="modal fade" id="rateDetails" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            <span className="pficon pficon-close"></span>
                        </button>
                        <h2 className="modal-title" id="rateDetails1Label">Premium Details 2011 Mazda 3</h2>
                    </div>
                    <div className="modal-body contents neutral_background">
                        <div>
                            <h3><strong>$114.67</strong></h3>
                            <p className='text-muted'>each payment, plus taxes and fees</p>
                            <hr/>
                            <Form>
                                <Coverage label='Bodily Injury'/>
                                <Coverage label='Property Damage'/>
                                <Coverage label='UM/UIM BI'/>
                                <Coverage label='UM/UIM PD'/>
                                <Coverage label='Medical Payments'/>
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
                            <h3><strong>Total: $178</strong></h3>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    }
}