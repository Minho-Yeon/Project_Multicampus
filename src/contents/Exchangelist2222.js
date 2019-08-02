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
                document.getElementsByClassName('')[0].style.width = "300px";
                document.getElementsByClassName('')[0].style.display = "";
            } else {
                console.log(document.getElementsByClassName('checkbox'));    
                document.getElementsByClassName('')[0].style.display = "";
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
                    </div>   
                </div>
                <div className="closecheck" style={exlist}>
                    <div >
                        <img src="./jpg/maplestory.jpg" />
                        메이플 스토리
                       
                    </div>   
                </div>
            </div>
        );
    }
}

export default Exchangelist;