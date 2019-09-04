import * as React from 'react'

export class RatioGroup extends React.Component< {label: string}, any > { 
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
                      <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Valid
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Revoced
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/> Suspended
                    </label>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}


