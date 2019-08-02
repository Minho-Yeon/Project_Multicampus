import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import AuthButton from './contents/auth/AuthButton.js';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
    }
    isOpen = () => {   
        this.setState(prevstate => ({
            modal: !prevstate.modal
        }))
    }
    isToggle = () => {
        this.props.isToggle();
    }
    isLogin = () => {   // 로그인 여부 판단메소드 - 민호
        console.log("1",localStorage);
        // if (localStorage.getItem('email_user')!==null) {
        //     return true;
        // } else {
        //     return false;
        // }
        return false;
    }
    menuSet = () => {       //로그인 여부에 따라 메뉴 출력 메소드-민호
        console.log(this.isLogin);
        if (this.isLogin()) {
            return (
                <>
                    <li><Link to="/signin">회원가입</Link></li>
                    <li><Link to="/login">로그인</Link></li>
                </>
            );

        } else {
            return (
                <>
                    <li onClick={() => {this.isToggle()}}>마이페이지</li>
                    <li>로그아웃</li>
                    <li onClick={() => {this.isOpen()}}>회원정보수정</li>
                </>
            );
        }

    }
    render() {
        let menu = this.menuSet();  //로그인에 따라 메뉴 출력 - 민호

        var Header = {
            fontSize: '30px',
            fontWeight: '1000',
            display: 'block',
            position: 'absolute',
            left: '50%',
            top: '30px',
            margin: '0px auto',
            padding: '0px',
            transform: 'translate(-50%,-50%)',
            color: 'black'
        }
        var modal = {
            backgroundColor: '#f2f2f2'

        }
        var infoinput = {
            width: '100%',
            height: '25px',
        }
        var pstyle = {
            fontSize: '12px',
            margin: '5px'
        }

        var pbutton = {
            textAlign: 'center'
        }
        return (
            <div className="header">
                <Link to="/"><p style={Header}><img className="mainicon" src="./jpg/nexonicon.jpg" alt="" />Nexon Trade</p></Link>
                <ul className="form">
                    {/* <li><Link to="/signin">회원가입</Link></li>
                    <li><Link to="/login">로그인</Link></li>
                    <li onClick={() => { this.isToggle() }}>마이페이지</li>
                    <li>로그아웃</li>
                    <li onClick={() => { this.isOpen() }}>회원정보수정</li> */}
                    {menu}
                    <Modal className="userinfo" isOpen={this.state.modal} toggle={this.isOpen}>
                        <ModalHeader style={modal} toggle={this.isOpen}>회원정보</ModalHeader>
                        <ModalBody style={modal}>
                            <div>
                                <div className="uploadimg">
                                    <img className="userinfoimg" src="./jpg/maplestory.jpg" />
                                    <AuthButton >이미지변경</AuthButton>
                                </div>
                                <div className="info">
                                    <p>이름: 황상욱</p>
                                    <p>포인트 :100p </p>
                                    <p style={pstyle}>현재 비밀번호 : <input style={infoinput} type="password"></input></p>
                                    <p style={pstyle}>새 비밀번호 : <input style={infoinput} type="password"></input></p>
                                    <p style={pstyle}>새 비밀번호 확인 : <input style={infoinput} type="password"></input></p>
                                    <button className="pbutton">비밀번호변경</button>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>

                </ul>
            </div>
        )
    }
}

export default Header;