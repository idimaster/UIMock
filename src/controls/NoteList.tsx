import * as React from 'react'

export class NoteList extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return <div className="list-group list-view-pf">
  <div className="list-group-item list-view-pf-stacked">
    <div className="list-view-pf-actions">
      <button className="btn btn-default">Resolve</button>
    </div>
    <div className="list-view-pf-main-info">
      <div className="list-view-pf-left">
        <div className="list-view-pf-calendar">
          March, 2017
          <strong>29</strong>
        </div>
      </div>
      <div className="list-view-pf-body">
        <div className="list-view-pf-description">
          <div className="list-group-item-heading">
            Follow up
          </div>
          <div className="list-group-item-text">
            Has Homeowners insurance with Geico. Follow up on <strong>05/05/2017</strong> with a quote.
          </div>
        </div>
        <div className="list-view-pf-additional-info">
          <div className="list-view-pf-additional-info-item">
            <span className="pficon pficon-user"></span>
            Agent Smith
          </div>
          <div className="list-view-pf-additional-info-item">
            <span className="pficon pficon-home"></span>
            <strong>1</strong> Home
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    }
}