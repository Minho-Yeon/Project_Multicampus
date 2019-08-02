// 환전소 폼 시작 상욱(08.02)
import React,{Component} from 'react'; 
import Exchangelist from './Exchangelist.js';
import './Exchange.scss';


class Exchange extends Component{
    render(){
        return(
            <div>
                    <Exchangelist />
            </div>
        )
    }
}
export default Exchange;