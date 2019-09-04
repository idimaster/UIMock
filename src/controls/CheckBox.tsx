import * as React from 'react'

export class CheckBox extends React.Component< {label: string, info:string, value: boolean}, any > { 
    static propTypes() {
        return {
            label: React.PropTypes.string,
            value: React.PropTypes.string
        }
    }
    
    render(): React.ReactElement< any > { 
        return <div className="form-group">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-6">
                <div className="checkbox">
                    <label>
                  <input type="checkbox" checked={this.props.value}/> {this.props.info}
                </label>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}
