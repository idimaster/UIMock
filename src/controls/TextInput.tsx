import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

export class TextInput extends React.Component< {label:string, id?: string, onChange?: OnSelectCallback}, any > { 
    static propTypes() {
        return {
            id: React.PropTypes.string,
            label: React.PropTypes.string,
            onChange: React.PropTypes.func
        }
    }
    
    private handleOnChange = (event: React.FormEvent) => {
        if (this.props.onChange) {
            this.props.onChange({command: 'change', payload: (event.target as HTMLInputElement).value});
        }
    }
    
    render(): React.ReactElement< any > { 
        return <div className="form-group required">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-6">
                <input onChange={this.handleOnChange} id={this.props.id} type="text" className="form-control" />
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}