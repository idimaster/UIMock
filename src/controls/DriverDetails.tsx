import * as React from 'react'

import {Form} from './Form'
import {Header} from './Header'
import {DOB} from './DOB'
import {Gender} from './Gender'
import {MaritalStatus} from './MaritalStatus'
import {License} from './License'
import {RatioGroup} from './RatioGroup'
import {CheckGroup} from './CheckGroup'
import {CheckBox} from './CheckBox'
import {NameInput} from './NameInput'

export class DriverDetails extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="modal fade" id="driverDetails" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                            <span className="pficon pficon-close"></span>
                        </button>
                        <h2 className="modal-title" id="rateDetails1Label">Andrea Doan, 46, D1234563</h2>
                    </div>
                    <div className="modal-body contents neutral_background">
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
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    }
}