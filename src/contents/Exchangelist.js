import React, { Component } from 'react';
import './Exchangelist.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        function click(){
            console.log(document.getElementsByClassName('checkbox'));
            if(document.getElementsByClassName('checkbox')[0].checked){
                document.getElementsByClassName('hide')[0].style.display = "inline-block";
                document.getElementsByClassName('hide')[0].className = "test";
            } else {
                console.log(document.getElementsByClassName('test'));
                
                document.getElementsByClassName('test')[0].style.display = "none";
                document.getElementsByClassName('test')[0].className = "hide";
            }
        }
        
        return (
            <div>
                <div className="check" style={exlist}>
                    <div>
                        <img src="./jpg/maplestory.jpg" />
                        메이플 스토리
                        <form>
                            <input className="checkbox" type="checkbox" onClick={click} />
                        </form>
                        <div className="hide">
                        보일내용
                    </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default Exchangelist;