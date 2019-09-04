import * as React from 'react'

export class TopPanel extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        let style = {margin: '-20px', padding: '20px'};
        return <div className='cards-pf' style={style}>
            {this.props.children}
        </div>
    }
}