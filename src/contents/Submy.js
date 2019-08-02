//마이페이지 시작 7.31(상욱)

import React, { Component } from 'react';
import './Submy.scss';
import { Collapse, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Submy extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    click(){
        var ctrlSelect = document.getElementById("lstFavorite");
        if( ctrlSelect.selectedIndex === 0){
            alert("서버1");
        // DB에서 서버1에 해당하는 캐릭터의 이름과 보유 머니를 불러와 주세요.

            ctrlSelect.focus();
        }else if(ctrlSelect.selectedIndex === 1){
            window.alert("서버2" );
        // DB에서 서버2에 해당하는 캐릭터의 이름과 보유 머니를 불러와 주세요.

        } else{
            window.alert("서버3" );
        // DB에서 서버3에 해당하는 캐릭터의 이름과 보유 머니를 불러와 주세요.

        }

    }
    toggle() {
        this.setState(state => ({
            collapse: !state.collapse
        }));
    }

    render() {
        return (
            <div className="ChartDiv">

                <div className="Submyli">
                    <img className="myimg" src={this.props.img} alt="" />
                    {this.props.name}
                    <button className="downbtn" onClick={this.toggle}><img className="Subdown" src="./jpg/down.png" alt="" /></button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <p>보유머니 : </p>
                                {/* 여기에 게임의 총 보유머니 표시하는 요소 */}
                                <select id="lstFavorite">
                                    <option value="volvo">서버1</option>
                                    <option value="saab">서버2</option>
                                    <option value="opel">서버3</option>
                                </select>
                                {/* 여기에 해당 서버의 게임 캐릭터명과 보유머니가 표시되어야 함 */}
                                <button onClick={this.click}>검색</button>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>

            </div>
        );
    }
}

export default Submy;