import React,{Component} from 'react';
import {Button} from 'reactstrap';
class Header extends Component{
    isToggle=()=>{
        this.props.isToggle();
    }
    render(){
        return(
            <div>
                <Button onClick={()=>{this.isToggle()}}>마이페이지</Button>
            </div>
        )
    }
}

export default Header;