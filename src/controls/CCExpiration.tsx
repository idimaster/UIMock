import * as React from 'react'

export class CCExpiration extends React.Component< {label:string}, any > { 
    static propTypes() {
        return {
            label: React.PropTypes.string
        }
    }
    
    render(): React.ReactElement< any > { 
        return <div className="form-group required">
            <label className="col-sm-2 control-label">{this.props.label}</label>
            <div className="col-sm-6">
                <div className="row">
                    <div className='col-sm-3'>
                        <input type="text" placeholder='MM/YY' className="form-control" />
                    </div>
                    <div className="col-sm-1">
                        <label className="control-label">CCV</label>
                    </div>
                    <div className='col-sm-3'>
                        <input type="text" className="form-control" />
                    </div>    
                    <div className='col-sm-5'>
                        <p className="form-control-static">American Express</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}