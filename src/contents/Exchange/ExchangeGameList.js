import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import GameListImage from './GameListImage';
import GameListInfo from './GameListInfo';
import GameListChangeInfo from './GameListChangeInfo';
import './ExchangeGameList.scss';


class ExchangeGameList extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
};


    render() {
        return (
            <div className="List">
                <Row className="gameList">
                    <Col xs="5" sm="3"><GameListImage img={this.props.img}/>
                    </Col>
                    <Col xs="7" sm="5"><GameListInfo cSelected={this.props.cSelected} 
                                                    name={this.props.name} 
                                                    rate={this.props.rate} 
                                                    character={this.props.character} 
                                                    changeState={this.props.changeState} />
                                                    </Col>
                    <Col sm="4"><GameListChangeInfo cSelected={this.props.cSelected} 
                                                money={this.props.money} 
                                                character={this.props.character}/>
                                                </Col>
                </Row>
            </div>
        )
    }
}
export default ExchangeGameList;
