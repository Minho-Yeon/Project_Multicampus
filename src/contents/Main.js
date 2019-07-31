import React, { Component } from 'react';
import Chart from './Chart';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            modal:false,
        }
    }
    isOpen=()=>{
        console.log('눌림');
        this.setState(prevstate=>({
            modal:!prevstate.modal,
        }));
    }
    render() {
        return (
            <div>
                <div className="search">

                </div>
                <div className="body">
                    <div><Chart name="메이플스토리" change="100메소 = 1P" img="./jpg/maplestory.jpg" isOpen={this.isOpen} alt=""/></div>
                    <div><Chart name="메이플스토리2" change="100메소 = 1P" img="./jpg/maplestory2.jpg" isOpen={this.isOpen} alt=""/></div>
                    <div><Chart name="던전앤파이터" change="100메소 = 1P" img="./jpg/dnf.jpg" isOpen={this.isOpen} alt=""/></div>
                    <div><Chart name="마비노기" change="100메소 = 1P" img="./jpg/mabi.jpg" isOpen={this.isOpen} alt="" /></div>
                    <div><Chart name="천애명월도" change="100메소 = 1P" img="./jpg/cheon.jpg" isOpen={this.isOpen} alt=""/></div>
                    <div><Chart name="테일즈위버" change="100메소 = 1P" img="./jpg/talesweaver.jpg" isOpen={this.isOpen} alt=""/></div>
                    <div><Chart name="바람의나라" change="100메소 = 1P" img="./jpg/varam.jpg" isOpen={this.isOpen} alt=""/></div>
                    <div><Chart name="아키에이지" change="100메소 = 1P" img="./jpg/arche.jpg" isOpen={this.isOpen} alt=""/></div>
                    <div><Chart name="테라" change="100메소 = 1P" img="./jpg/tera.jpg" isOpen={this.isOpen} alt=""/></div>
                    <div><Chart name="엘소드" change="100메소 = 1P" img="./jpg/elsword.jpg" isOpen={this.isOpen} alt="" /></div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.isOpen}>
                    <ModalHeader toggle={this.isOpen}>Modal title</ModalHeader>
                    <ModalBody>
                        모달입니다
                    </ModalBody>
                </Modal>
                {/* 헤더와 로그인폼 끝 (상욱 07.25) */}
            </div>
        )
    }
}
export default Main;