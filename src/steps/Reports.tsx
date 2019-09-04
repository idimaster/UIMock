import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

import {TextInput, DateInput, NameInput, SelectInput, ZipStateCity, Form, StepTitle, Wizard, Header, Overview, AlertSuccess, AlertInfo, AlertWarning, AlertDanger} from '../controls';

const form = <form className="form-inline">
  <div className="form-group">
    <label for="exampleInputName2">Reason:</label>&nbsp;
    <select className="form-control">
        <option>Customer supported documentation</option>
        <option>Other option</option>
    </select>
  </div>
  <div className="form-group">
    &nbsp;&nbsp;&nbsp;<input type="checkbox"/>
  </div>
</form>

export class Reports extends React.Component<any, {active: number}> {
    constructor(props : any){
        super(props);
        this.state = { active: 0 };
    }

    render(): React.ReactElement<any> {
        return<div>
            <div className="wizard-pf-main">
                <div>
                    <AlertInfo>
                        <h4>Current Currier</h4>
                        <Overview data={[
                            {name:'Insurer', value:'Major Ins Co.'},
                            {name:'Policy Status', value:'Active'},
                            {name:'BI/PD', value:'25/50'},
                            {name:'Dedactible', value:'$500'}]}/>
                    </AlertInfo>
                    <Header label='Shane Doan, 58'></Header>
                    <Overview data={[
                    {name:'Driver License', value:'AB345567'},
                    {name:'Driving Experience', value:'38 years'},
                    {name:'License Status', value:'Valid'}]}/>
                    <Overview data={[
                    {name:'OFAC Clearance', value:'Clear'},
                    {name:'Credit Score', value:'690'}]}/>
                    <AlertSuccess>
                        No violations in the last <strong>3 years</strong> 
                    </AlertSuccess>
                    <AlertSuccess>
                        No at-fault claims over <strong>$1500</strong>  in the last <strong>3 years</strong> 
                    </AlertSuccess>
                    <AlertSuccess>
                        No driver license <strong>suspensions</strong>
                    </AlertSuccess>                    
                    <Form>
                    </Form>
                    <Header label='Andrea Doan, 25'></Header>
                    <Overview data={[
                    {name:'Driver License', value:'DB345567'},
                    {name:'Driving Experience', value:'8 years'},
                    {name:'License Status', value:'Valid'}]}/>
                    <Overview data={[
                    {name:'OFAC Clearance', value:'Clear'},
                    {name:'Credit Score', value:'790'}]}/>
                    <h3>Violations</h3>
                    <AlertWarning>
                        <strong>04/06/2015</strong>, Minor, Speeding, <strong>1 point</strong> <span className='right'><input type="checkbox" checked/></span>
                    </AlertWarning>   
                    <AlertWarning>
                        <strong>09/22/2014</strong>, Major, Failure to Yield pedestrian, <strong>5 point</strong> <span className='right'>{form}</span>
                    </AlertWarning>    
                    <h3>Claims</h3>
                    <AlertWarning>
                        <strong>09/22/2014,</strong>, At-fault, Comprehensive, <strong>$1340</strong> <span className='right'>{form}</span>
                    </AlertWarning>   
                    <h3>Suspensions</h3>
                    <AlertWarning>
                        Failure to pay the fine, Suspended: <strong>09/22/2014</strong>, Reinstated: <strong>10/15/2014</strong> <span className='right'><input type="checkbox" checked/></span>
                    </AlertWarning>   
                    <AlertDanger>
                        Driving under the influence, Revoked: <strong>09/27/2016</strong> <span className='right'><input type="checkbox" checked/></span>
                    </AlertDanger>  
                    <Form>
                    </Form>
                </div>
            </div>
        </div>
    }
}