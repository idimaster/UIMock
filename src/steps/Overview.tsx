import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

import {Overview as Data, NoteList, TransactionHistory, RateDetails, VehicleDetails, DriverDetails} from '../controls';

import {TextInput, DateInput, StaticStrong, NameInput, Payment, SelectInput, ZipStateCity, Form, StepTitle, Wizard, CheckBox, Header, BankAccount, Agreement, CCExpiration, AlertSuccess, AlertWarning, Static, FormGroup, EmptyFormGroup, SelectTab} from '../controls';

export class Overview extends React.Component<any, {active: string}> {
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
    
    renderElement(name: string): React.ReactElement<any> {
        return <div className='form-group form-group-tn'>
            <label className='control-label col-pad'>{name}</label>
        </div>
    }
    
    renderDriver(name: string, insured: boolean): React.ReactElement<any> {
        let ins = insured ? <i className="fa fa-shield text-success" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Insured"></i> : null;
        return<div className='col-sm-3 col-pad'>
            <div className='thumbnail'>
                <a className='close' data-toggle="modal" data-target="#driverDetails"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                <h5><i className="fa fa-user text-info" aria-hidden="true"></i> {ins} {name}</h5>
            </div>
        </div>
    }
    
    renderVehicle(name: string): React.ReactElement<any> {
        return <div className='col-sm-3 col-pad'>
            <div className='thumbnail'>
                <a className='close' data-toggle="modal" data-target="#vehicleDetails"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                <h5><i className="fa fa-car text-info" aria-hidden="true"></i> {name}</h5>
            </div>
        </div>
    }
    
    renderElement2(cov: string, label: string, value: string): React.ReactElement<any> {
        let style = {marginTop: 3};
        let style1 = {paddingLeft: 10};
        return <div className='form-group form-group-tn'>
            <div className='col-sm-4 col-pad' style={style1}><span className="label label-info">{cov}</span></div>
            <label className='col-sm-4 control-label col-pad'>{label}</label>
            <div className='col-sm-4 text-left col-pad' style={style}>{value}</div>
        </div>
    }
    
    renderElement3(cov: string): React.ReactElement<any> {
        let style = {marginTop: 3};
        let style1 = {paddingLeft: 10};
        return <div className='form-group form-group-tn'>
            <div className='col-sm-4 col-pad' style={style1}><span className="label label-info">{cov}</span></div>
            <label className='col-sm-4 control-label col-pad'><span className="fa fa-ban text-warning"></span></label>
            <div className='col-sm-4 text-left col-pad' style={style}></div>
        </div>
    }
    
    renderRate1(): React.ReactElement<any> {
        return<div className='col-sm-3 col-pad'>
            <div className="caption thumbnail center-block">
                <a className='close' data-toggle="modal" data-target="#rateDetails"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                <h4><strong>2007 Toyota Tundra</strong></h4>
                <Form>
                    {this.renderElement2('BI','25/50', '$134')} 
                    {this.renderElement2('PD', '50/100', '$250')} 
                    {this.renderElement2('UM/UMI BI', '100/250', '$159')} 
                    {this.renderElement2('UM/UIM PD','200/300', '$134')} 
                    {this.renderElement2('MP','5000', '$15')} 
                    {this.renderElement2('Comp','$500', '$134')} 
                    {this.renderElement3('Coll')} 
                    {this.renderElement2('Total','', '$1758.45')}
                </Form>
            </div>
        </div>
    }
    
    renderRate2(): React.ReactElement<any> {
        return <div className='col-sm-3 col-pad'>
                            <div className="caption thumbnail center-block">
                                <a className='close' data-toggle="modal" data-target="#rateDetails"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                                <h4><strong>2011 Mazda 3</strong></h4>
                                <Form>
                                    {this.renderElement2('BI', '25/50', '$134')}
                                    {this.renderElement2('PD', '50/100', '$250')}
                                    {this.renderElement2('UM/UMI BI','100/250', '$159')}
                                    {this.renderElement2('UM/UIM PD','200/300', '$134')}
                                    {this.renderElement2('MP','5000', '$15')}
                                    {this.renderElement2('Comp','$500', '$134')}
                                    {this.renderElement3('Coll')}
                                    {this.renderElement2('Total','', '$500.05')}
                                </Form>
                            </div>
                        </div>
    }
    
    render(): React.ReactElement<any> {
        let buttonStyle = this.state.active === '' ? "btn btn-primary disabled" : "btn btn-primary"
        let title = <Data data={[
                    {name:'Policy #', value:'000000000000001'}]}/>;
        return<div>
            <div className="wizard-pf-main">
                <div>
                    <h2>{title}</h2>
                    <Data data={[
                    {name:'Status', value:'Active'},
                    {name:'Effective', value:'01/01/2017 - 01/01/2018'},
                    {name:'Payment Plan', value:'Monthly'},
                    {name:'Balance', value:'$128.95'},
                    {name:'Due By', value:'06/01/2017'}]}/>
                    <h3>Policy Notes</h3>
                    <AlertWarning>
                        <div className="row">
                            <div className='col-sm-1 paddingr0'>
                                03/05/2017
                            </div>
                            <div className='col-sm-8'>
                                <h4><strong>Follow up</strong></h4>
        Has Homeowners insurance with Geico. Follow up on <strong>05/05/2017</strong> with a quote.
                            </div>
                            <div className='col-sm-2 paddingl0'>
                                <span className="pficon pficon-user"></span> Agent Smith
                            </div>
                            <div className='col-sm-1 paddingl0'>
                                <button className="btn btn-warning">Resolve</button>
                            </div>                    
                        </div>                    
                    </AlertWarning>
                    <h3>Premium</h3>
                    <hr/>
                    <RateDetails />
                    <Data data={[
                    {name:'Total', value:'$1315.45'},
                    {name:'Annual premium', value:'$1258.45'},
                    {name:'Taxes', value:'$34'},
                    {name:'Fees', value:'$23'}]}/>
                    <div className="row">
                        {this.renderRate1()}
                        {this.renderRate2()}
                        {this.renderRate2()}
                        {this.renderRate2()}
                        {this.renderRate2()}
                        {this.renderRate2()}
                        {this.renderRate2()}
                        {this.renderRate2()}
                    </div> 
                    <h3>Drivers</h3>
                    <hr/>
                    <DriverDetails />
                    <div className="row">
                        {this.renderDriver('Shane Doan, 58, D1234567', true)}
                        {this.renderDriver('Andrea Doan, 46, D1234563', false)}
                    </div>
                    <h3>Vehicles</h3>
                    <hr/>
                    <VehicleDetails/>
                    <div className="row">
                        {this.renderVehicle('2007 Toyota Tundra Limited')}
                        {this.renderVehicle('2011 Mazda 3 S Grand Touring')}
                        {this.renderVehicle('2011 Mazda 3 S Grand Touring')}
                        {this.renderVehicle('2011 Mazda 3 S Grand Touring')}
                        {this.renderVehicle('2011 Mazda 3 S Grand Touring')}
                        {this.renderVehicle('2011 Mazda 3 S Grand Touring')}
                        {this.renderVehicle('2011 Mazda 3 S Grand Touring')}
                        {this.renderVehicle('2011 Mazda 3 S Grand Touring')}
                    </div>
                    <h3>Transaction History</h3>
                    <TransactionHistory />
                </div>
            </div>
        </div>
    }
}

/*
                        <div className='col-sm-2 col-pad'>
                            <div className="caption">
                                <h4>&nbsp;</h4>
                                <Form>
                                    {this.renderElement('Bodily Injury')}
                                    {this.renderElement('Property Damage')}
                                    {this.renderElement('UM/UMI BI')}
                                    {this.renderElement('UM/UIM PD')}
                                    {this.renderElement('Medical Payment')}
                                    {this.renderElement('Comprehensive')}
                                    {this.renderElement('Collision')}
                                    {this.renderElement('Total')}
                                </Form>
                            </div>
                        </div>*/