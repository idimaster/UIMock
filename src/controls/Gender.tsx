import * as React from 'react'

export class Gender extends React.Component< {label: string}, any > { 
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
                      <input type="radio" name="genderRadioOptions" id="genderRadio1" value="M"/> Male
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="genderRadioOptions" id="genderRadio2" value="F"/> Female
                    </label>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}


