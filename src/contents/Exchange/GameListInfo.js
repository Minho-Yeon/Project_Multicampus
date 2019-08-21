import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, InputGroupText, InputGroupAddon, Input, Row, Col } from 'reactstrap';
import './GameListInfo.scss'
import ExchangeCharacter from './ExchangeCharacter.js'



class GameListInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moneyValue: 0,
        };
    };


    showCharacterInfo = () => {
        let list = [];
        let characters = this.props.character;
        for (let num in characters) {
            list.push(
            <div key={num + 500}>
                    <ExchangeCharacter characterName={characters[num].name}
                        characterMoney={characters[num].money} />
            </div>);
        };
        return list;
    };


    setReceipt() {

        let Info = {}
        Info['check'] = 1;
        Info['game_name'] = this.props.name;
        Info['money'] = parseInt(this.state.moneyValue);
        Info['money_with_rate'] = parseInt(parseInt(this.state.moneyValue) * parseInt(this.props.rate));
        Info['fee'] = parseInt(parseInt(this.state.moneyValue) * 0.05);
        Info['remain_game_money'] = 0;
        Info['remain_platform_money'] = 0;
        Info['selected'] = this.props.cSelected;
        console.log(Info)
        this.props.changeState(Info);
    }


    render() {
        return (
            <div className="ListInfo">
                <div className="ListInfoBody">
                    <Row>
                        <Col xs="6">
                            <h1 className="gametitle">{this.props.name}</h1>
                        </Col>
                        <Col xs="6">
                            <Row className="rate">
                                <Col xs="5" className="ratetitle"> 환율
                                </Col>
                                <Col xs="7"> {this.props.rate}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        {this.showCharacterInfo()}
                    </Row>
                    <InputGroup className="ListInfoBody_input">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText className="moneytitle">{this.props.cSelected}</InputGroupText>
                        </InputGroupAddon>
                        <Input className="money" placeholder="변경할 금액을 입력해주세요" onChange={async (e) => { await this.setState({moneyValue: e.target.value}); await this.setReceipt();}}/>
                    </InputGroup>
                </div>
            </div>
        )
    }
}
export default GameListInfo;
