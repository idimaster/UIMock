import * as React from 'react'

import {AlertSuccess} from './AlertSuccess';

export class Agreement extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="form-group required">
            <label className="col-sm-2 control-label"><input type="checkbox"/></label>
            <div className="col-sm-6">
                <AlertSuccess>{this.props.children}</AlertSuccess>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    }
}