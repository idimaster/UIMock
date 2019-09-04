import * as React from 'react'

export class Form extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <form className="form-horizontal">
                {this.props.children}
            </form>
    }
}