import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
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
                        characterMoney={characters[num].money} 
                        cSelected={this.props.cSelected}
                        name={this.props.name}
                        img={this.props.img}
                        rate={this.props.rate}
                        character={this.props.character} 
                        changeState={this.props.changeState}/>
            </div>);
        };
        return list;
    };


    // setReceipt() {

    //     let Info = {}
    //     Info['check'] = 1;
    //     Info['game_name'] = this.props.name;
    //     Info['money'] = parseInt(this.state.moneyValue);
    //     Info['money_with_rate'] = parseInt(parseInt(this.state.moneyValue) * parseInt(this.props.rate));
    //     Info['fee'] = parseInt(parseInt(this.state.moneyValue) * 0.05);
    //     Info['remain_game_money'] = 0;
    //     Info['remain_platform_money'] = 0;
    //     Info['selected'] = this.props.cSelected;
    //     console.log(Info)
    //     this.props.changeState(Info);
    // }


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
                                <Col xs="7" className="ratevalue"> {this.props.rate}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        {this.showCharacterInfo()}
                    </Row>
                </div>
            </div>
        )
    }
}
export default GameListInfo;
