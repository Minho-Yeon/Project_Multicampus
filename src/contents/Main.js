import React, { Component } from 'react';
import Chart from './Chart';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
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
            modalmessage:''
        }
    }
    handlechange=(evt)=>{
        this.exchangeinfo={};
        const {name,value}=evt.target;
        this.exchangeinfo[name]=value;
        evt.preventDefault();
    }
    isOpen = (message) => {
        console.log('눌림');
        this.setState(prevstate => ({
            modal: !prevstate.modal,
            // modalmessage:message,
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
                list.push(<div key={num}><Chart name={gamelist[num].name_game} number={parseInt(num)+1} characterinfo={character} change={chan} img={gamelist[num].image_path} gameintro={gamelist[num].game_intro} isOpen={this.isOpen} alt="" handlechange={this.handlechange}/></div>);
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
                    <ModalHeader toggle={this.isOpen}>바로 결제하시겠습니까?</ModalHeader>
                    <ModalBody>
                        {this.state.modalmessage}
                        <Button color="success">이것만 결제할래요.</Button>
                       <Button color="link"><Link to="/exchange">다른 게임도 볼래요.</Link></Button>
                    </ModalBody>
                </Modal>
                
                {/* 헤더와 로그인폼 끝 (상욱 07.25) */}
                <LoginModal isOpen={this.state.isModalOpen} isToggle={this.isToggle}/>

            </div>

        )
    }
}
export default Main;