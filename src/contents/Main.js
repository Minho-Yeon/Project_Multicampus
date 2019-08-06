import React, { Component } from 'react';
import Chart from './Chart';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import './Main.scss';
import LoginModal from './LoginModal';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            gamelist: "",
            isModalOpen: false,
        }
    }
    isOpen = () => {
        console.log('눌림');
        this.setState(prevstate => ({
            modal: !prevstate.modal,
        }));
    }
    isToggle = () => {
            this.setState(prevstate => ({
               isModalOpen:!prevstate.isModalOpen,
            }));
        }

    componentDidMount = () => {
        let gamelist = JSON.parse(localStorage.getItem('gamelist'));
        let exchangerate = JSON.parse(localStorage.getItem('exchangerate'));
        let list = [];
        if (this.props.characterinfo) {
            let characterinfo = this.props.characterinfo;

            for (let num in gamelist) {
                let character = characterinfo.filter((character) => {
                    return character.idx_game ===parseInt(num)+1;
                });
                let chan = "10P = " + exchangerate[num].exchange_rate + "0";
                list.push(<div key={num}><Chart name={gamelist[num].name_game} characterinfo={character} change={chan} img={gamelist[num].image_path} gameintro={gamelist[num].game_intro} isOpen={this.isOpen} alt="" /></div>);
            }
        }
        else {
            for (let num in gamelist) {
                let chan = "10P = " + exchangerate[num].exchange_rate + "0";
                list.push(<div key={num}><Chart name={gamelist[num].name_game} change={chan} img={gamelist[num].image_path} gameintro={gamelist[num].game_intro} isOpen={this.isOpen} alt="" isToggle={this.isToggle}/></div>);
            }
        }
        this.setState({
            gamelist: list
        });

    }
    render() {
        return (

            <div className="aaa">
                <div className="search">

                </div>
                <div className="body">
                    {this.state.gamelist}
                </div>
                <Modal isOpen={this.state.modal} toggle={this.isOpen}>
                    <ModalHeader toggle={this.isOpen}>Modal title</ModalHeader>
                    <ModalBody>
                        모달입니다
                       <Link to="/exchange">결제페이지</Link>
                    </ModalBody>
                </Modal>
                
                {/* 헤더와 로그인폼 끝 (상욱 07.25) */}
                <LoginModal isOpen={this.state.isModalOpen} isToggle={this.isToggle}/>

            </div>

        )
    }
}
export default Main;