import * as React from 'react'

export class Payment extends React.Component< {label:string, value:string}, any > { 
    static propTypes() {
        return {
            label: React.PropTypes.string,
            value: React.PropTypes.string
        }
    }
    
    render(): React.ReactElement< any > { 
        return <div className="form-group required">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-6">
                <div className="row">
                    <div className='col-sm-2 paddingr0'>
                        <p className="form-control-static"><strong>{this.props.value}</strong></p>
                    </div>
                    <div className='col-sm-10'>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/> Recurring
                             </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}