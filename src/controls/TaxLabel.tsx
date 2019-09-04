import * as React from 'react'

export class TaxLabel extends React.Component<{label:string}, any> {
    static propTypes(){
        return {
            label: React.PropTypes.string.isRequired
        }
    }
    
    render(): React.ReactElement<any> {
        return <div className='form-group form-group-tn'>
            <label className='col-sm-6 control-label'>{this.props.label}</label>
            <div className='col-sm-6'>
                <p className="form-control-static static-tn">$4.00</p>
            </div>
        </div>
    }
}