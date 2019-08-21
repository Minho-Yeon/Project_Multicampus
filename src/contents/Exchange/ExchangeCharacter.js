import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col } from 'reactstrap';
import './ExchangeCharacter.scss'


class ExchangeCharacter extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };


    render() {
        return (
            <Row className='characterInfo'>    
                <Col xs="4"> {this.props.characterName}
                </Col>
                <Col xs="8"> / {this.props.characterMoney}
                </Col>
            </Row> 
        )
    };
};
export default ExchangeCharacter;
