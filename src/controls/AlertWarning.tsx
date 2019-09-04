import * as React from 'react'

export class AlertWarning extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="alert alert-warning">
            <span className="pficon pficon-warning-triangle-o"></span> {this.props.children}
        </div>
    }
}