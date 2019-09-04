import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

export class SelectInput extends React.Component< {label:string, onChange?: OnSelectCallback}, any > { 
    static propTypes() {
        return {
            label: React.PropTypes.string
        }
    }
    
    
    private handleChange = (event: React.FormEvent) => {
        if (this.props.onChange) {
            let value = ((event.target) as any).value;
            this.props.onChange({command: 'change', payload: value})
        }
    }
    
    render(): React.ReactElement< any > { 
        return <div className="form-group required">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-6">
                <select className="form-control" onChange={this.handleChange}>
                    {this.props.children}
                </select>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}