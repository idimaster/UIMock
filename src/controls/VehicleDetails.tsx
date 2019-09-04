import * as React from 'react'

import {Form} from './Form'
import {Header} from './Header'
import {YearMakeModel} from './YearMakeModel'
import {Static} from './Static'
import {TextInput} from './TextInput'
import {SelectInput} from './SelectInput'
import {CheckBox} from './CheckBox'
import {ZipStateCity} from './ZipStateCity'

export class VehicleDetails extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="modal fade" id="vehicleDetails" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            <span className="pficon pficon-close"></span>
                        </button>
                        <h2 className="modal-title" id="rateDetails1Label">2011 Accure MDX</h2>
                    </div>
                    <div className="modal-body contents neutral_background">
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
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    }
}