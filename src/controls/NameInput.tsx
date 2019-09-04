import * as React from 'react'

export class NameInput extends React.Component< {label:string}, any > { 
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
                    <div className='col-sm-4 paddingr0'>
                        <input type="text" placeholder='First Name' className="form-control" />
                    </div>
                    <div className='col-sm-4'>
                        <input type="text" placeholder='Middle Name' className="form-control" />
                    </div>
                    <div className='col-sm-4 paddingl0'>
                        <input type="text" placeholder='Last Name' className="form-control" />
                    </div>                    
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}