import * as React from 'react'

export class Status extends React.Component<{status: string}, any> {
    static propTypes() {
        return {
            status: React.PropTypes.string
        }
    }
    
    renderActive(): React.ReactElement<any> {
        return <small className='text-success'><strong>{this.props.status}</strong></small>
    }
    
    renderCancelled(): React.ReactElement<any> {
        return <small className='text-danger'><strong>{this.props.status}</strong></small>
    }
    
    renderDG(): React.ReactElement<any> {
        return <small>{this.props.status}</small>
    }
    
    render(): React.ReactElement<any> {
        //TODO: replace demo logic by inForce and policy status real check 
        if (this.props.status === 'Issued')
            return this.renderActive();
        if (this.props.status === 'Cancelled')
            return this.renderCancelled();
        return this.renderDG();
    }
}