import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'reactstrap';
import ExchangeGameList from './ExchangeGameList';
import './ExchangeBody.scss'
import Receipt from './Receipt'

class ExchangeBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: JSON.parse(localStorage.getItem('gamelist')),
            rates: JSON.parse(localStorage.getItem('exchangerate')),
            check: 0,
            game_name: '',
            money:0,
            money_with_rate: 0,
            fee: 100,
            remain_game_money:0,
            remain_platform_money:0,
            selected: '',
            showReceipt:'',
            };
        this.changeState = this.changeState.bind(this);
        this.showReceipt = this.showReceipt.bind(this);
        };


    changeState= async (Info)=> {

        let data = JSON.parse(localStorage.getItem('Infos'))
        // console.log('1',data)
        data.push(Info);
        localStorage.setItem('Infos', JSON.stringify(data)) 
        // console.log('2',data)
        

        this.setState({
        check: Info.check,
        game_name: Info.game_name,
        money:Info.money,
        money_with_rate: Info.money_with_rate,
        fee: Info.fee,
        remain_game_money:Info.remain_game_money,
        remain_platform_money:Info.remain_platform_money,
        selected:Info.selected,
        showReceipt:await this.showReceipt(data)
        })

    };

    showReceipt(data) {
    
    // console.log('sjsjsj', data)
    if (this.state.check === 1){
        return <Receipt Infos={data}      
            check={this.state.check}
            game_name={this.state.game_name}
            money={this.state.money}
            money_with_rate={this.state.money_with_rate}
            fee={this.state.fee}
            remain_game_money={this.state.remain_game_money}
            remain_platform_money={this.state.remain_platform_money} 
            />
    }
};





    gameList() {

        if (localStorage.getItem('chracters')) {

            let game_info = JSON.parse(localStorage.getItem('chracters'));
            let list = [];
            let gameInfo = game_info.games;
            let gameName = '';
            let exchangeRate = '';
            let img = '';
            let characterList = [];

            for (let num in gameInfo) {
                gameName = gameInfo[num].name_game;
                exchangeRate = gameInfo[num].exchange_rate;
                img = gameInfo[num].img;
                characterList = gameInfo[num].characters;

                list.push(<div key={num + 300}>
                    <ExchangeGameList cSelected={this.props.cSelected}
                        name={gameName}
                        img={img}
                        rate={exchangeRate}
                        character={characterList} 
                        changeState={this.changeState}
                        />
                </div>);
            };
            return list;

        } else {

            let list2 = [];
            let game_list = this.state.games;
            let rate_list = this.state.rates;
            for (let num2 in game_list) {
                list2.push(<div key={num2}>
                    <ExchangeGameList cSelected={this.props.cSelected}
                        name={game_list[num2].name_game}
                        img={game_list[num2].image_path}
                        rate={rate_list[num2].exchange_rate}
                        money={'-'} />
                </div>);
            }
            return list2;
        };
    };



    render() {

 

        return (
            <div className="ExchangeBody">
                {this.gameList()}
                <div className="ExchangeReceipt">
                    {this.state.showReceipt}
                </div>
            </div>
        )
    }
}
export default ExchangeBody;
