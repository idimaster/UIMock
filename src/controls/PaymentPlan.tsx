import * as React from 'react'

export class PaymentPlan extends React.Component< {label:string}, any > { 
    static propTypes() {
        return {
            label: React.PropTypes.string
        }
    }
    
    render(): React.ReactElement< any > { 
        return <div className="form-group required">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-6">
                <div className="row">
                    <div className='col-sm-9 paddingr0'>
                       <select className="form-control">
                            <option value="" disabled selected> </option>
                            <option>Semimonthly</option>
                            <option>Monthly</option>
                            <option>Quarterly</option>
                            <option>Semiannual</option>
                            <option>Annual</option>
                        </select>
                    </div>
                    <div className='col-sm-3'>
                        <input type="number" min="1" max="31" placeholder='Due Date' className="form-control" />
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}