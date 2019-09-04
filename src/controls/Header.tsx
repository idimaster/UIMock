import * as React from 'react'

export class Header extends React.Component<{ label: string, check?: boolean}, any> {
    static propTypes(){
        return {
            label: React.PropTypes.string.isRequired
        }
    }

    render(): React.ReactElement<{ label: string}> {
        const check = this.props.check ? <input type="checkbox" checked/> : null
        return (
            <div>
                <div className='clearfix'>
                    <div className='pull-left'><h2>{check} {this.props.label}</h2></div>
                    <div className='pull-right'>{this.props.children}</div>
                </div>
                <hr/>
            </div>)
    }
}