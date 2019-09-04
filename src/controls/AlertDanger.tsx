import * as React from 'react'

export class AlertDanger extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="alert alert-danger">
            <span className="pficon pficon-error-circle-o"></span> {this.props.children}
        </div>
    }
}