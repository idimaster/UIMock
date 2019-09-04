import * as React from 'react'

export class Coverage extends React.Component<{label:string}, any> {
    static propTypes(){
        return {
            label: React.PropTypes.string.isRequired
        }
    }
    
    render(): React.ReactElement<any> {
        return <div className='form-group form-group-tn'>
            <label className='col-sm-6 control-label col-pad'>{this.props.label}</label>
            <div className='col-sm-6 col-pad'>
                <select className="form-control">
                    <option> </option>
                    <option>$100/$500</option>
            </select>
            </div>
        </div>
    }
}