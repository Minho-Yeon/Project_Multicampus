// 환전소 폼 시작 상욱(08.02)
import React,{Component} from 'react'; 
import Exchangelist from './Exchangelist.js';
import './Exchange.scss';


class Exchange extends Component{
    render(){
        return(
            <div className="Exchange">
                    <Exchangelist number="0"/>
                    <Exchangelist number="1"/>
                    <Exchangelist number="2"/>
                    <Exchangelist number="3"/>
                    <Exchangelist number="4"/>
                    <Exchangelist number="5"/>
                    <Exchangelist number="6"/>
                    <Exchangelist number="7"/>
                    <Exchangelist number="8"/>
                    <Exchangelist number="9"/>
                    
                   </div>
        )
    }
}
export default Exchange;

//환전소 폼 끝 상욱(08.02)