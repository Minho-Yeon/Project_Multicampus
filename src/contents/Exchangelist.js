import React, { Component } from 'react';
import './Exchangelist.scss';
import './Exchange.js';
import Character from './Character.js';
import './Character.js';

class Exchangelist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            output: 0,
            add: "",
            addvalue: 0,
        }
    }



    click = () => {
        var props = this.props.number     
        if (document.getElementsByClassName('checkbox')[props].checked) {
            document.getElementsByClassName('closebox')[props].style.display = "block";
            document.getElementsByClassName('closebox')[props].style.height = "100%";

        } else {
            console.log(document.getElementsByClassName('checkbox'));
            document.getElementsByClassName('closebox')[props].style.display = "none";
            document.getElementsByClassName('openbox')[props].style.width = "100%";
        }

    }
    addBtn = () => {
            
            console.log("나와라잇", document.getElementsByClassName("Character"))

            var money = document.getElementsByClassName('output')[0].value;
            var gname = document.getElementsByClassName('name')[0].innerText;
            console.log("output =", document.getElementsByClassName('output')[0].value);
            console.log("name = ", document.getElementsByClassName('name')[0].innerText);
    
            this.setState({
                add: gname + money,
            })
        }



    render() {
        return (
            <div>

                <div className='relativeBox'>

                    <div className='openbox' >
                        <img src="./jpg/maplestory.jpg" alt="" />
                        {/* 게임 이름과 환율이 들어갈 자리 */}
                        <h2 className="name" >메이플 스토리</h2>
                        <h2>환율: 1P = </h2>
                        {/*  */}

                        <input className="aaabbb"></input>
                        <input type="checkbox" className="checkbox" onClick={this.click} />
                        <hr />
                    </div>
                    <div className='closebox'>
                        <Character className="Character" function={this.addBtn} number="0"/>
                        <Character className="Character" function={this.addBtn} number="1" />
                        <Character className="Character" function={this.addBtn} number="2" />
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Exchangelist;