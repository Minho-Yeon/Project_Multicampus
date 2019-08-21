import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'reactstrap';


class ReceiptList extends Component {
    constructor(props){
        super(props);
        this.state = {
 
        };
    };


    render() {
        return (

                <tr>
                    <th scope="row">{parseInt(this.props.number) + 1}</th>
                    <td>{this.props.game_name}</td>
                    <td>{this.props.money}</td>
                    <td>{this.props.money_with_rate}</td>
                    <td>{this.props.fee}</td>
                    <td>700</td>
                    <td>800</td>
                </tr>

        )
    }
}
export default ReceiptList;

