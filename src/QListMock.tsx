import * as React from 'react'

import {ListItemExpanded, ListExpand, Cards, Card} from 'patternfly-react'
import {TopPanel, Search, Details, Status, Claim} from './list'
import {CommandPayload, OnSelectCallback} from 'patternfly-react';
import {ListView, ListItem, CheckBox as ListCheckBox, ListActions, ListActionItem, ListMainInfo, ActionPayload} from 'patternfly-react';

export class QListMock extends React.Component<any, {active: number}> {
    
    private handleClose = (event: ActionPayload) => {
        alert('OK');
    }
    
    private handleClick = (event: CommandPayload) => {
        alert('Card');
    }
    
    renderDetails(): React.ReactElement<any> {
        return <Details />    
    }
    
    render(): React.ReactElement<any> {
        return <div>
            <TopPanel>
                <h2>Create New Quote</h2>
                <Cards>
                    <Card onClick={this.handleClick} payload={{command: 'select', payload: 1}}>
                        <Card.Body>
                            <Card.Top>
                                <Card.Header><span className="fa fa-car card-pf-icon-circle"></span> Genesis Ref</Card.Header>
                            </Card.Top>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Top>
                                <Card.Header><span className="fa fa-car card-pf-icon-circle"></span> Blue Owl</Card.Header>
                            </Card.Top>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Top>
                                <Card.Header><span className="fa fa-home card-pf-icon-circle"></span> Genesis Ref</Card.Header>
                            </Card.Top>
                        </Card.Body>
                    </Card>
                </Cards>
                <Search/>
            </TopPanel>
                
            <ListView>
                <ListItemExpanded details={this.renderDetails()} onClose={this.handleClose} patload={{action: 'close', patload: null}}>
                    <ListExpand expand={true}/>
                    <ListActions>
                        <button className="btn btn-link">Endorse</button>
                        <ListActionItem label='Decline By Customer'/>
                        <ListActionItem label='Decline By Company'/>
                        <ListActionItem label='Propose'/>
                        <ListActionItem label='Issue'/>
                        <ListActionItem label='Generate Documents'/>
                    </ListActions>
                    <ListMainInfo>
                        <ListMainInfo.Left><span className="fa fa-car list-view-pf-icon-sm"></span></ListMainInfo.Left>
                        <ListMainInfo.Description>
                            <ListMainInfo.Description.Header>
                                <small>AZ, Blue Owl</small>
                                <a href="#">P74545545</a>
                                <Status status="Issued"/>
                            </ListMainInfo.Description.Header>
                            <ListMainInfo.Description.Text>
                            <strong>Jon Dow</strong>, <strong>Catrin Dow</strong><br/>
                            2016 Dodge Callanger; 2015 Mazda 6
                            </ListMainInfo.Description.Text>
                        </ListMainInfo.Description>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Effective</strong>
                            05/10/2016
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Agency</strong>
                            Auto Insurance & Co.
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.Additional>
                            <span className="fa fa-history"></span>
                            10/10/2016
                        </ListMainInfo.Additional>
                        <ListMainInfo.Additional>
                            <span className="fa pficon-flag text-danger"></span>
                            <Claim exist={true}/>
                            <i className="fa fa-sticky-note text-warning" aria-hidden="true"></i>
                        </ListMainInfo.Additional>
                    </ListMainInfo>
                </ListItemExpanded>
                <ListItem>
                    <ListExpand expand={false} onClick={this.handleClick} payload={{command: 'expand', payload: 1}}/>
                    <ListMainInfo>
                        <ListMainInfo.Left><span className="fa fa-car list-view-pf-icon-sm"></span></ListMainInfo.Left>
                        <ListMainInfo.Description>
                            <ListMainInfo.Description.Header>
                                <small>CA, Genesis Ref</small>
                                <a href="#">P74545545</a>
                                <Status status="Issued"/>
                            </ListMainInfo.Description.Header>
                            <ListMainInfo.Description.Text>
                            <strong>Jon Dow</strong>, <strong>Catrin Dow</strong><br/>
                            2016 Dodge Callanger; 2015 Mazda 6
                            </ListMainInfo.Description.Text>
                        </ListMainInfo.Description>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Effective</strong>
                            05/10/2016
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Agency</strong>
                            Auto Insurance & Co.
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.Additional>
                            <span className="fa fa-history"></span>
                            10/10/2016
                        </ListMainInfo.Additional>
                        <ListMainInfo.Additional>
                            <span className="fa pficon-flag text-warning"></span>
                            <Claim exist={false}/>
                        </ListMainInfo.Additional>
                    </ListMainInfo>
                    <ListActions>
                        <button className="btn btn-link">Endorse</button>
                        <ListActionItem label='Decline By Customer'/>
                        <ListActionItem label='Decline By Company'/>
                        <ListActionItem label='Propose'/>
                        <ListActionItem label='Issue'/>
                        <ListActionItem label='Generate Documents'/>
                    </ListActions>
                </ListItem>
                <ListItem>
                    <ListExpand expand={false} />
                    <ListMainInfo>
                        <ListMainInfo.Left><span className="fa fa-home list-view-pf-icon-sm"></span></ListMainInfo.Left>
                        <ListMainInfo.Description>
                            <ListMainInfo.Description.Header>
                                <small>NY, Genesis Ref</small>
                                <a href="#">P74545545</a>
                                <Status status="Cancelled"/>
                            </ListMainInfo.Description.Header>
                            <ListMainInfo.Description.Text>
                                <strong>Jon Smith</strong>, <strong>Jil Smith</strong><br/>
                                4403 W Utopia, Glendale, AZ, 85308
                            </ListMainInfo.Description.Text>
                        </ListMainInfo.Description>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Effective</strong>
                            05/10/2016
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Agency</strong>
                            Auto Insurance & Co.
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.Additional>
                            <span className="fa fa-history"></span>
                            10/10/2016
                        </ListMainInfo.Additional>
                        <ListMainInfo.Additional>
                            <span className="fa pficon-flag text-primary"></span>
                        </ListMainInfo.Additional>
                    </ListMainInfo>
                    <ListActions>
                        <button className="btn btn-link">Reinstate</button>
                        <ListActionItem label='Decline By Customer'/>
                        <ListActionItem label='Decline By Company'/>
                        <ListActionItem label='Propose'/>
                        <ListActionItem label='Issue'/>
                        <ListActionItem label='Generate Documents'/>
                    </ListActions>
                </ListItem>
                <ListItem>
                    <ListExpand expand={false} />
                    <ListMainInfo>
                        <ListMainInfo.Left><span className="fa fa-car list-view-pf-icon-sm"></span></ListMainInfo.Left>
                        <ListMainInfo.Description>
                            <ListMainInfo.Description.Header>
                                <small>WA, Blue Owl</small>
                                <a href="#">Q74545545</a>
                                <Status status="Pending"/>
                            </ListMainInfo.Description.Header>
                            <ListMainInfo.Description.Text>
                            <strong>Jon Dow</strong>, <strong>Catrin Dow</strong><br/>
                            2016 Dodge Callanger; 2015 Mazda 6
                            </ListMainInfo.Description.Text>
                        </ListMainInfo.Description>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Effective</strong>
                            05/10/2016
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Agency</strong>
                            Auto Insurance & Co.
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.Additional>
                            <span className="fa fa-history"></span>
                            10/10/2016
                        </ListMainInfo.Additional>
                        <ListMainInfo.Additional>
                            <span className="fa pficon-flag text-primary"></span>
                        </ListMainInfo.Additional>
                    </ListMainInfo>
                    <ListActions>
                        <button className="btn btn-link">Issue</button>
                        <ListActionItem label='Decline By Customer'/>
                        <ListActionItem label='Decline By Company'/>
                        <ListActionItem label='Propose'/>
                        <ListActionItem label='Issue'/>
                        <ListActionItem label='Generate Documents'/>
                    </ListActions>
                </ListItem>
                <ListItem>
                    <ListExpand expand={false} />
                    <ListMainInfo>
                        <ListMainInfo.Left><span className="fa fa-home list-view-pf-icon-sm"></span></ListMainInfo.Left>
                        <ListMainInfo.Description>
                            <ListMainInfo.Description.Header>
                                <small>CA, Genesis Ref</small>
                                <a href="#">Q74545545</a>
                                <Status status="Rated"/>
                            </ListMainInfo.Description.Header>
                            <ListMainInfo.Description.Text>
                                <strong>Jon Dow</strong>, <strong>Catrin Dow</strong><br/>
                                5503 W Bell Road, Glendale, AZ, 85308
                            </ListMainInfo.Description.Text>
                        </ListMainInfo.Description>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Effective</strong>
                            05/10/2016
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Agency</strong>
                            Auto Insurance & Co.
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.Additional>
                            <span className="fa fa-history"></span>
                            10/10/2016
                        </ListMainInfo.Additional>
                        <ListMainInfo.Additional>
                        </ListMainInfo.Additional>
                    </ListMainInfo>
                    <ListActions>
                        <button className="btn btn-link">Propose</button>
                        <ListActionItem label='Decline By Customer'/>
                        <ListActionItem label='Decline By Company'/>
                        <ListActionItem label='Propose'/>
                        <ListActionItem label='Issue'/>
                        <ListActionItem label='Generate Documents'/>
                    </ListActions>
                </ListItem>
                <ListItem>
                    <ListExpand expand={false} />
                    <ListMainInfo>
                        <ListMainInfo.Left><span className="fa fa-car list-view-pf-icon-sm"></span></ListMainInfo.Left>
                        <ListMainInfo.Description>
                            <ListMainInfo.Description.Header>
                                <small>IL, Blue Owl</small>
                                <a href="#">Q74545545</a>
                                <Status status="Data Gathering"/>
                            </ListMainInfo.Description.Header>
                            <ListMainInfo.Description.Text>
                            <strong>Jon Dow</strong>, <strong>Catrin Dow</strong><br/>
                            2016 Dodge Callanger; 2015 Mazda 6
                            </ListMainInfo.Description.Text>
                        </ListMainInfo.Description>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Effective</strong>
                            05/10/2016
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.AdditionalStacked>
                            <strong>Agency</strong>
                            Auto Insurance & Co.
                        </ListMainInfo.AdditionalStacked>
                        <ListMainInfo.Additional>
                            <span className="fa fa-history"></span>
                            10/10/2016
                        </ListMainInfo.Additional>
                        <ListMainInfo.Additional>
                            <i className="fa fa-sticky-note text-warning" aria-hidden="true"></i>
                        </ListMainInfo.Additional>
                    </ListMainInfo>
                    <ListActions>
                        <button className="btn btn-link">Rate</button>
                        <ListActionItem label='Decline By Customer'/>
                        <ListActionItem label='Decline By Company'/>
                        <ListActionItem label='Propose'/>
                        <ListActionItem label='Issue'/>
                        <ListActionItem label='Generate Documents'/>
                    </ListActions>
                </ListItem>                
            </ListView>                
        </div>;
    }
}