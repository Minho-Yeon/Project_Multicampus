import React, { Component } from 'react';
import ExchangeMain from './ExchangeMain'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewExchange.scss'

class NewExchange extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };


    render() {
        return (
            <div className="newExchange">
                <ExchangeMain/>
            </div>
        )
    }
}
export default NewExchange;

