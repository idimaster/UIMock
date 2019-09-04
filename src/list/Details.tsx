import * as React from 'react'

export class Details extends React.Component<any, any> {
    
        renderParty(name: string, insured: boolean): React.ReactElement<any> {
        let ins = insured ? <i className="fa fa-shield text-success" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Insured"></i> : null;
        return <dt>{ins} {name} <i className="fa fa-user text-primary" aria-hidden="true"></i></dt>
    }
    
    render(): React.ReactElement<any> {
        return <div className="row">
            <div className="col-md-5">
                <dl className='dl-horizontal'>
                    {this.renderParty("Jon Dow, 43", true)}
                    <dd><i className="fa fa-phone text-primary" aria-hidden="true"></i> 630-349-4455, <strong>SSN</strong> *-2343</dd>
                    {this.renderParty("Catrin Dow, 39", true)}
                    <dd><i className="fa fa-phone text-primary" aria-hidden="true"></i> 630-349-4665, <strong>SSN</strong> *-4443</dd>
                    {this.renderParty("Ben Dow, 19", false)}
                    <dd><i className="fa fa-phone text-primary" aria-hidden="true"></i> 602-349-4445, <strong>SSN</strong> *-2563</dd>
                </dl>
            </div>
            <div className="col-md-5">
                <dl>
                    <dt>Locations</dt>
                    <dd>5690 West Paradise Lane, Glendale, AZ, United States</dd>
                    <dd>344 Coma Line, Phoenix, AZ, United States</dd>
                </dl>
            </div>
      </div>
    }
}