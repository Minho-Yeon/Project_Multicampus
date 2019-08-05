// 환전소 폼 시작 상욱(08.02)
import React,{Component} from 'react'; 
import Exchangelist from './Exchangelist.js';
import './Exchange.scss';


class Exchange extends Component{
    render(){
        return(
            <div className="Exchange">
                    <Exchangelist number="0"/>
          
                   </div>
        )
    }
}
export default Exchange;

//환전소 폼 끝 상욱(08.02)