import * as React from 'react'

export class MaritalStatus extends React.Component< {label: string}, any > { 
    static propTypes() {
        return {
            label: React.PropTypes.string,
            values: React.PropTypes.array
        }
    }
    
    render(): React.ReactElement< any > { 
        return <div className="form-group">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-6">
                <div className="checkbox">
                    <label className="radio-inline">
                      <input type="radio" name="mRadioOptions" id="mRadio1" value="M"/> Single
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="mRadioOptions" id="mRadio2" value="F"/> Married
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="mRadioOptions" id="mRadio2" value="D"/> Divorsed
                    </label>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}


