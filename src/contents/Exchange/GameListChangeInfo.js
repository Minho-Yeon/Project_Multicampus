import React, { Component } from 'react';
import {InputGroup, InputGroupText, InputGroupAddon, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameListChangeInfo.scss'


class GameListChangeInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    };


    showMoneyInfo = () => {
        let characters = this.props.character;
        let sum_money = 0;
        for (let num in characters) {
            sum_money += characters[num].money;
        }    
        return sum_money;
    };



    render() {
        return ( 
            <div className="ChangeInfo">
                <div className="ChangeInfoBody"> 
                    <Row className="ChangeInfoRow">
                        <InputGroup className="ListChangeInfoBody_input">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText className="Changetitle">현재 보유 금액</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon addonType="append">
                                <InputGroupText className="Change_money"> {this.showMoneyInfo()} </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Row>
                    <Row className="ChangeInfoRow">
                        <InputGroup className="ListChangeInfoBody_input">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText className="Changetitle">변경된 보유 금액</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupAddon className="change" addonType="append">
                                <InputGroupText className="Change_money"> {this.props.money} </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Row>
                </div>
            </div>
        )
    }
}
export default GameListChangeInfo;
