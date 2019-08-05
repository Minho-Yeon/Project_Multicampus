import React, { Component } from 'react';
import './Exchangelist.scss';
import './Exchange.js';

class Exchangelist extends Component {
    render() {
     var props = this.props.number
     function click(){
        if (document.getElementsByClassName('checkbox')[props].checked) {
            document.getElementsByClassName('closebox')[props].style.display = "block";
            document.getElementsByClassName('closebox')[props].style.height = "100%";

        } else {
            console.log(document.getElementsByClassName('checkbox'));
            document.getElementsByClassName('closebox')[props].style.display = "none";
            document.getElementsByClassName('openbox')[props].style.width = "100%";
        }
    }
    function datain(){
        document.getElementsByClassName('datain')[0]
        console.log(document.getElementsByClassName('datain')[0]);
        
    }

        return (
            <div>
                <div className='relativeBox'>
                    
                    <div className='openbox' >
                        <img src="./jpg/maplestory.jpg" alt="" />
                        {this.props.number}
                        <input type="checkbox" className="checkbox" onClick={click}/>
                    </div>
                    <div className='closebox'>
                        <input  className="datain" onKeyUp={datain}/>
                        <p className="out"></p>
                        <input type="checkbox" />
                        <input type="number" />
                    </div>
                </div>


            </div>
        );
    }
}

export default Exchangelist;