import React, { Component } from 'react';
import Submy from './contents/Submy';
import './Mypage.scss';
import {Link} from 'react-router-dom';
class Mypage extends Component {

    getmygameinfo=()=>{
        console.log('Mypage의 gemygameinfo()');
        if (this.props.characterinfo) {
            let gamelist = JSON.parse(localStorage.getItem('gamelist'));
            let list = [];
            let characterinfo = this.props.characterinfo;

            for (let num in gamelist) {
                let character = characterinfo.filter((character) => {
                    return character.idx_game === parseInt(num) + 1;
                });
                list.push(<div key={num}><Submy name={gamelist[num].name_game} characterinfo={character} img={gamelist[num].image_path} alt="" /></div>);
            }
            return list;
        }
    }

    render() {
        return (
            <div>
                Mypage
                {this.getmygameinfo()}
                <div ><Link className="changeLink" to="/exchange">결제페이지</Link></div>
            </div>
        )
    }
}

export default Mypage;