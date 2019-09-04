import * as React from 'react'

export class License extends React.Component< {label:string}, any > { 
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
                        <input type="text" placeholder='Number' className="form-control" />
                    </div>
                    <div className='col-sm-3'>
                        <select placeholder='State' className="form-control">
                            <option value="" disabled selected>State</option>
                            <option>AZ</option>
                            <option>CA</option>
                            <option>IN</option>
                            <option>NV</option>
                            <option>WA</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}