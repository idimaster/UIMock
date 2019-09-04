import * as React from 'react'

import {CommandPayload, OnSelectCallback} from 'patternfly-react';

export class WizardButtons extends React.Component<{first?: boolean, last?: boolean, onNext?: OnSelectCallback, onBack?: OnSelectCallback, payload?: CommandPayload}, any> {
    static propTypes() {
        return {
            first: React.PropTypes.bool,
            last: React.PropTypes.bool,
            onNext: React.PropTypes.func,
            onBack: React.PropTypes.func,
            payload: React.PropTypes.object
        }
    }
    
    private handleNext = () => {
        if (this.props.onNext) {
            this.props.onNext(this.props.payload);
        }
    }
    
    private handleBack = () => {
        if (this.props.onBack) {
            this.props.onBack(this.props.payload);
        }
    }
    
    render(): React.ReactElement<any> {
        let styleBack = this.props.first ? "btn btn-default disabled" : "btn btn-default";
        let styleNext = this.props.last ? "btn btn-primary disabled" : "btn btn-primary";
        return  <div className="modal-footer wizard-pf-footer">
            <button type="button" className="btn btn-default btn-cancel">Cancel</button>
             {this.props.children}
            <button type="button" onClick={this.handleBack} className={styleBack}>
                 <span className="i fa fa-angle-left"></span>Back</button>
            <button type="button" onClick={this.handleNext} className={styleNext}>Next<span className="i fa fa-angle-right"></span></button>
        </div>
    }
}