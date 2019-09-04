import * as React from 'react'

export class AlertSuccess extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="alert alert-success">
            <span className="pficon pficon-ok"></span> {this.props.children}
        </div>
    }
}