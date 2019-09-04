import * as React from 'react'

export class AlertInfo extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="alert alert-info">
            <span className="pficon pficon-info"></span> {this.props.children}
        </div>
    }
}