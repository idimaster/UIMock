import * as React from 'react'

export class Search extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="row">
            <div className='col-sm-9 paddingr0'>
                <input type="text" className="form-control" />
            </div>
            <div className='col-sm-3 '>
                <button type="button" className='btn btn-primary'><span className="i fa fa-search"></span> Search</button>
            </div>                    
        </div>
    }
}