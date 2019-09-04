import * as React from 'react'

export interface IOption {
    value: string;
    label: string;
}

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

export class SelectTab extends React.Component< {selected:string, options: IOption[], onSelect?: OnSelectCallback}, any > { 
    static propTypes() {
        return {
            selected: React.PropTypes.string,
            options: React.PropTypes.array,
            onSelect: React.PropTypes.func
        }
    }
    
    private handleSelect(payload: string) {
        if (this.props.onSelect) {
            this.props.onSelect({command: 'select', payload: payload})
        }
    }
    
    render(): React.ReactElement< any > { 
        return <div className="form-group">
            <ul className="nav nav-tabs">
                {this.props.options.map((opt, index)=>{
                    let style = opt.value === this.props.selected ? "active" : "";
                    return <li key={index} className={style}><a onClick={this.handleSelect.bind(this, opt.value)}>{opt.label}</a></li>
                })}
            </ul>
        </div>
    } 
}