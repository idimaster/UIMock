import * as React from 'react'

export class Claim extends React.Component<{exist: boolean}, any> {
    static propTypes() {
        return {
            exist: React.PropTypes.bool
        }
    }
    
    render(): React.ReactElement<any> {
        let style = this.props.exist ? "fa fa-file-text text-danger" : "fa fa-file-o text-success"
        return <i className={style} aria-hidden="true"></i>
    }
}