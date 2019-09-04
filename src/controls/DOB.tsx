import * as React from 'react'

export class DOB extends React.Component< {label:string, info:string, val: string}, any > { 
    static propTypes() {
        return {
            label: React.PropTypes.string
        }
    }
    
    render(): React.ReactElement< any > { 
        return <div className="form-group required">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-4">
                <input type="date" id="textInput-markup" className="form-control" />
            </div>
            <div className="col-sm-2 paddingl0">
                <label className="control-label">{this.props.info}</label> {this.props.val}
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}