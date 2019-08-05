import React, { Component } from 'react';
import './Exchangelist.scss';
import './Exchange.js';

class Exchangelist extends Component {

    constructor(props){
        super(props);
        this.state={
            output:0,
        }
    }
 datain=()=>{
       
        var val = document.getElementsByClassName('datain')[0] ;
        console.log("value=", val.value);
        var out =  document.getElementsByClassName('out');
       
        out.value = Number(val.value)/10;
           console.log("value=", out);
   
           this.setState({
               output:out.value,
           });
   
       }
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
    

        return (
            <div>
                <div className='relativeBox'>
                    
                    <div className='openbox' >
                        <img src="./jpg/maplestory.jpg" alt="" />
                        {this.props.number}
                        <input type="checkbox" className="checkbox" onClick={click}/>
                    </div>
                    <div className='closebox'>
                        <input  className="datain" onKeyUp={this.datain} />
                        <p className="out">{this.state.output}</p>
                        
                        <input type="checkbox" />
                        <input type="number" />
                    </div>
                </div>


            </div>
        );
    }
}

export default Exchangelist;