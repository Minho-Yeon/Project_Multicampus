import React, { Component } from 'react';
import AuthButton from './auth/AuthButton.js';
import AuthContent from './auth/AuthContent.js';
import InputWithLabel from './auth/InputWithLabel.js';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import './LoginModal.scss';
import { withRouter } from 'react-router-dom';
import request from './Request.js';


class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.logininfo = {};
    }

    handleChange = (e) => { //로그인 시도 정보를 받아오는 메소드 -민호
        const { name, value } = e.target;
        console.log('name:' + name + ' value' + value);
        this.logininfo[name] = value;
        e.preventDefault();
    }

    tryLogin = async () => {    //로그인시도 메소드 -민호
        console.log(this.logininfo);
        let regExp = /[a-z0-9]{2,}@[a-z0-9-]{2,}.[a-z0-9]{2,}/i;
        if (!regExp.test(this.logininfo.email)) {       //이메일 정규식 체크-민호
            console.log('이메일이 아닙니다');
            alert('이메일 형식이 아닙니다.');
            return;
        };

        let issuccess = await request('post', '/server/login', this.logininfo); //서버에 로그인 요청- 민호
        if (issuccess.data.userInfo !== undefined) {
            localStorage.setItem('logininfo', JSON.stringify(issuccess.data.userInfo));//로컬 스토리지에 로그인 정보 저장-민호
            this.props.history.push('/');   //메인페이지로 이동-민호
            this.props.close(); // modal 닫기
        } else {
            alert(issuccess.data.message);  //로그인 실패시 메세지-민호
        }
    }

    trySignin = async () => {
        this.props.history.push('/signin');  // 회원가입 페이지로 이동_ 다래
        this.props.close(); // modal 닫기
    }

    render() {
        return (//다래

            <div className='loginmodal'>
                <Modal isOpen={this.props.isOpen} toggle={this.props.isToggle}>
                <ModalHeader toggle={this.props.isToggle}>로그인</ModalHeader>
                    <ModalBody>
                        <AuthContent >
                            <InputWithLabel label="이메일" name="email" placeholder="이메일" onChange={this.handleChange} />
                            <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={this.handleChange} />
                            <AuthButton onClick={this.tryLogin}>로그인</AuthButton>
                        </AuthContent>
                    </ModalBody>
                    <ModalFooter >
                        <p>  Nexon Trade 회원이 아니세요? <br></br></p>
                        <Button outline color="warning" onClick={this.trySignin} size="sm"> 회원가입하러가기</Button>
                    </ModalFooter>
                </Modal>
            </div>

        )
    }
}

export default withRouter(LoginModal);