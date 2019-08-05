import React,{Component} from 'react';
import Submy from './contents/Submy';
import { Link } from 'react-router-dom';
import './Mypage.scss';

class Mypage extends Component{
    render(){
        return(
            <div>
                Mypage

                <div><Submy img="./jpg/maplestory.jpg" name="메이플스토리" alt=""/></div>
                <div><Submy img="./jpg/maplestory2.jpg"alt="" /></div>
                <div><Submy img="./jpg/dnf.jpg" alt="" /></div>
                <div><Submy img="./jpg/mabi.jpg" alt="" /></div>
                <div><Submy img="./jpg/cheon.jpg" alt="" /></div>
                <div><Submy img="./jpg/talesweaver.jpg" alt="" /></div>
                <div><Submy img="./jpg/varam.jpg" alt="" /></div>
                <div><Submy img="./jpg/arche.jpg" alt="" /></div>
                <div><Submy img="./jpg/tera.jpg" alt="" /></div>
                <div><Submy img="./jpg/elsword.jpg" alt="" /></div>
                <div ><Link className="changeLink" to="/exchange">결제페이지</Link></div>
            </div>
        )
    }
}

export default Mypage;