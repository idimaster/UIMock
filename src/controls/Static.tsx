import * as React from 'react'

export class Static extends React.Component< {label: string, value: string}, any > { 
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
                <p className="form-control-static">{this.props.value}</p>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}