// 환전소 폼 시작 상욱(08.02)
import React, { Component } from 'react';
import Exchangelist from './Exchangelist.js';
import './Exchange.scss';
import {Link} from 'react-router-dom';


class Exchange extends Component {
    constructor(props){
        super(props);
        this.state = {
            trade :""

        };
    };

    click1 = () => {
        var langSelect = document.getElementById('trade');
        console.log('log :', langSelect);
        var selectValue = langSelect.options[langSelect.selectedIndex].value;
        console.log(selectValue);
        var selectText = langSelect.options[langSelect.selectedIndex].text;
        console.log(selectText);
        this.setState({
                trade : selectValue
        });
    }

    render() {
        return (
            <div className="Exchange">
                <h1>거래소</h1>
                <select id="trade" onChange={this.click1}>
                    <option value="" > 선택</option>
                    <option value="localhost:3000/exchangeGameMony" > 게임머니로 바꾸기</option>
                    <option value="pointtrade">포인트로 바꾸기</option>
                   
                </select>
                    {this.state.trade}
                <Exchangelist number="0" />

            </div>
        )
    }
}
export default Exchange;

//환전소 폼 끝 상욱(08.02)