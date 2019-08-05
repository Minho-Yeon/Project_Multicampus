import React, { Component } from 'react';
import './Exchangelist.scss';
import './Exchange.js';

class Exchangelist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            output: 0,
        }
    }


    datain = () => {

        var val = document.getElementsByClassName('datain')[0];
        console.log("value=", val.value);
        var out = document.getElementsByClassName('out');
        var change = document.getElementsByClassName('aaabbb')[0];
        console.log(change);

        out.value = Number(val.value) * change.value;
        console.log("value=", out);

        this.setState({
            output: out.value,
        });
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

        // addBtn = () =>{
        //     console.log("closebox =",document.getElementsByClassName('closebox'));

        // }

    }
    render() {


        return (
            <div>

                <div className='relativeBox'>

                    <div className='openbox' >
                        <img src="./jpg/maplestory.jpg" alt="" />
                        {/* 게임 이름과 환율이 들어갈 자리 */}
                        <h2>메이플 스토리</h2>
                        <h2>환율: 1P = </h2>
                        {/*  */}

                        <input className="aaabbb"></input>
                        <input type="checkbox" className="checkbox" onClick={this.click} />
                        <hr />
                    </div>
                    <div className='closebox'>
                        <select >
                            <option value="charic1"> 캐릭터1</option>
                            <option value="charic2"> 캐릭터2</option>
                            <option value="charac3"> 캐릭터3</option>
                        </select>
                        <input className="datain" onKeyUp={this.datain} />
                        <img src="./jpg/rightarrow.png" className="right" alt="" />
                        <input className="output" type="text" value={this.state.output} />
                        <button className="addBtn" onClick={this.addBtn}>추가하기</button>
                    </div>
                </div>


            </div>
        );
    }
}

export default Exchangelist;