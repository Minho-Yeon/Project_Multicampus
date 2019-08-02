import React, { Component } from 'react';
import './Exchangelist.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Exchange.scss';
class Exchangelist extends Component {



    render() {
        var exlist = {
            border: '1px solid black',
            borderRadius: '12px',
            width: '500px',
            padding: '5px',
            margin: '0 auto',
            marginTop: '15px'
        }
        var props = this.props.number

        function click() {
            console.log(document.getElementsByClassName('checkbox'));
            console.log(props);
                        
            if (document.getElementsByClassName('checkbox')[props].checked) {
                document.getElementsByClassName('openbox')[props].style.width = "20%";
                document.getElementsByClassName('closebox')[props].style.display = "block";
                document.getElementsByClassName('closebox')[props].style.float = "left";
                document.getElementsByClassName('closebox')[props].style.width = "80%";
            } else {
                console.log(document.getElementsByClassName('checkbox'));
                document.getElementsByClassName('closebox')[props].style.display = "none";
                document.getElementsByClassName('openbox')[props].style.width = "100%";
            }
        }

        return (
            <div>
<<<<<<< HEAD
                <div id="relative">
                    <div className="openbox">
                        <img src="./jpg/maplestory.jpg" />
                        <input type="checkbox" className="checkbox" onClick={click} />
=======
                <div className="check" style={exlist}>
                    <div>
                        <img src="./jpg/maplestory.jpg" alt="" />
                        메이플 스토리
                        <form>
                            <input className="checkbox" type="checkbox" onClick={click} />
                        </form>
                        <div className="hide">
                        보일내용
>>>>>>> origin/master
                    </div>
                    <div className="closebox">
                        <p>{this.props.number}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exchangelist;