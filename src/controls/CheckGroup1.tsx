import * as React from 'react'

export class CheckGroup1 extends React.Component< {label: string}, any > { 
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
                    <label className="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox2" value="option2"/> Defensive Driver
                    </label>
                    <label className="checkbox-inline">
                      <input type="checkbox" id="inlineCheckbox3" value="option3"/> Student
                    </label>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}


