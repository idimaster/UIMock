import * as React from 'react'

export interface VehicleInfo {
    year:number;
    make:string;
    model:string;
    trim:string;
}

export class YearMakeModel extends React.Component< {label:string, value?:VehicleInfo}, any > { 
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
                    <div className='col-sm-3 paddingr0'>
                        <input type="text" placeholder='Year' className="form-control" value={this.props.value.year}/>
                    </div>
                    <div className='col-sm-4'>
                        <input type="text" placeholder='Make' className="form-control" value={this.props.value.make}/>
                    </div>
                    <div className='col-sm-5 paddingl0'>
                        <input type="text" placeholder='Model' className="form-control" value={this.props.value.model} />
                    </div>                    
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    } 
}