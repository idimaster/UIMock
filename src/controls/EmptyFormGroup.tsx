import * as React from 'react'

import {FormGroup} from './FormGroup';

export class EmptyFormGroup extends React.Component< any, any > { 
    static propTypes() {
        return {
            label: React.PropTypes.string
        }
    }
    
    render(): React.ReactElement< any > { 
        return <FormGroup label='&nbsp;'><p className="form-control-static">&nbsp;</p></FormGroup>
    } 
}