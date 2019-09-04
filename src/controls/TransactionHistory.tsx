import * as React from 'react'

export class TransactionHistory extends React.Component<any, any> {
    render(): React.ReactElement<any> {
        return<table className="table table-condensed">
            <thead>
                <tr>
                    <th>Transaction</th>
                    <th>Effective</th>
                    <th>Transaction Date</th>
                    <th>Premium change</th>
                    <th>Description</th>
                    <th>Requested By</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a>Endorsement</a></td>
                    <td>02/01/2017</td>
                    <td>02/01/2017</td>
                    <td>$8.00</td>
                    <td>Increased coverage</td>
                    <td>Shane Doan</td>
                </tr>
                <tr>
                    <td><a>Policy Issue</a></td>
                    <td>01/01/2017</td>
                    <td>01/01/2017</td>
                    <td>$1250.45</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    }
}