import * as React from 'react'

export interface OverviewProps {
    index?: number
    data: any[]
    editClass?: typeof React.Component
    role?: string
    onEdit?: (index: number, editClass: typeof React.Component, overview: Overview<OverviewProps, any>) => void
}

export class Overview<P extends OverviewProps, S> extends React.Component<P, S> {
    static propTypes(){
        return {
            index: React.PropTypes.number,
            data: React.PropTypes.array.isRequired,
            editClass: React.PropTypes.element,
            role: React.PropTypes.string,
            onEdit: React.PropTypes.func
        }
    }

    onEdit() {
        if (this.props.onEdit) {
            this.props.onEdit(this.props.index, this.props.editClass, this)
        }
    }

    render() {
        const role = this.props.role ? <span className='label label-info'>{this.props.role}</span> : null
        return (
            <ul className='list-inline' tabIndex={0} onFocus={this.onEdit.bind(this)}>
                {this.props.data.map((field, i) => {
                    return (<li key={i}><strong>{field.name}: </strong>{field.value}</li>)
                })}
                {role}
            </ul>)
    }
}