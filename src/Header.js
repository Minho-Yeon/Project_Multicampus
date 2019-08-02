import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import AuthButton from './contents/auth/AuthButton.js';
import { withRouter } from 'react-router-dom';
import request from './contents/Request.js';
import hasher from 'pbkdf2-password';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
        this.passwordinfo = {};
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
<<<<<<< HEAD
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
=======
        console.log("1", localStorage);
        // if (localStorage.getItem('logininfo')) {
        return true;
        // } else {
        // return false;
        // }
    }
    logOut = () => {  //로그아웃 메소드 - 민호
        console.log('로그아웃 시도');
        localStorage.removeItem('logininfo');
        this.props.history.push('/');
    }
    menuSet = () => {       //로그인 여부에 따라 메뉴 출력 메소드-민호
>>>>>>> origin/master
        if (this.isLogin()) {
            return (
                <>
                    <li onClick={() => { this.isToggle() }}>마이페이지</li>
                    <li onClick={this.logOut}>로그아웃</li>
                    <li onClick={this.isOpen}>회원정보수정</li>
                </>
            );
        } else {
            return (
                <>
                    <li><Link to="/signin">회원가입</Link></li>
                    <li><Link to="/login">로그인</Link></li>
                </>
            );
        }
    }
    handleChange = (evt) => {   //비밀번호 변경 인자값 받아오기-민호
        const { name, value } = evt.target;
        console.log('name:' + name + '\n value: ' + value);
        this.passwordinfo[name] = value;
        evt.preventDefault();
    }
    changePassword = () => {
        var regex = /^[A-Za-z0-9]{6,12}$/;
        if (!regex.test(this.passwordinfo.new_password)) {     //비밀번호 숫자,문자 포함 6~12자리-민호
            console.log('새로운 비밀번호를 다시 설정하셔야 합니다.');
            alert('새로운 비밀번호를 다시 설정하셔야 합니다.');
            return;
        };
        if (!this.passwordinfo.new_password === this.passwordinfo.confirm_password) {
            console.log('비밀번호가 일치하지 않습니다.');
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        hasher({
            password: this.passwordinfo.current_password,
            salt: localStorage.getItem('logininfo').salt,
        }, (err, pass, salt, hash) => {
            if (err) throw err;
            else {
                this.passwordinfo.current_password = hash;
                hasher({
                    password: this.passwordinfo.new_password
                }, (err, pass, salt, hash) => {
                    if (err) throw err;
                    else {
                        this.passwordinfo.salt = salt;
                        this.passwordinfo.new_password = hash;
                        let issuccess = request('post', '/server/changepassword',this.passwordinfo);
                        console.log(issuccess.data.success);
                        if (issuccess.data.success) {
                            alert('비밀번호 변경이 완료 되었습니다.');
                        }
                        else {
                            alert('현재 비밀번호가 틀렸습니다.');
                        }
                    }
                })
            }
        });
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

        // var pbutton = {
        //     textAlign: 'center'
        // }
        return (
            <div className="header">
                <Link to="/"><p style={Header}><img className="mainicon" src="./jpg/nexonicon.jpg" alt="" />Nexon Trade</p></Link>
                <ul className="form">
                    {menu}
                    <Modal className="userinfo" isOpen={this.state.modal} toggle={this.isOpen}>
                        <ModalHeader style={modal} toggle={this.isOpen}>회원정보</ModalHeader>
                        <ModalBody style={modal}>
                            <div>
                                <div className="uploadimg">
                                    <img className="userinfoimg" src="./jpg/maplestory.jpg" alt=""/>
                                    <AuthButton >이미지변경</AuthButton>
                                </div>
                                <div className="info">
                                    <p>이름: 황상욱</p>
                                    <p>포인트 :100p </p>
                                    <p style={pstyle}>현재 비밀번호 : <input style={infoinput} type="password" name='current_password' onChange={this.handleChange}></input></p>
                                    <p style={pstyle}>새 비밀번호 : <input style={infoinput} type="password" name='new_password' onChange={this.handleChange}></input></p>
                                    <p style={pstyle}>새 비밀번호 확인 : <input style={infoinput} type="password" name='confirm_password' onChange={this.handleChange}></input></p>
                                    <button className="pbutton" onClick={this.changePassword}>비밀번호변경</button>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>

                </ul>
            </div>
        )
    }
}

export default withRouter(Header);