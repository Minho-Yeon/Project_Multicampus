import React, { Component } from 'react';
import AuthButton from './auth/AuthButton.js';
import RightAlignedLink from './auth/RightAlignedLink.js';
import AuthContent from './auth/AuthContent.js';
import InputWithLabel from './auth/InputWithLabel.js';
import InputWithLabelButton from './auth/InputWithLabelButton';
import InputWithButton from './auth/InputWithButton';
import './Signin.scss';
import request from './Request';
import axios from 'axios';

class Signin extends Component {
    constructor(props){
        super(props);
        this.Signininfo={}; //회원정보를 담아올 그릇-민호
        this.state={    
            isdisabled:false,   //넥슨 인증시 버튼 비활성화를 위한 인자 -민호
        }
    }
    handleChange = (evt) => {   //인자값 받아오기-민호
        const { name, value } = evt.target;
        if(name==='confirmcode'){
            this.nexoncode=evt.target;
        }
        if(name==="nexonemail"){
            this.nexonemail=evt.target;
            console.log(this.nexonemail.disabled);
        }
        console.log('name:' + name + '\n value: ' + value);
        this.Signininfo[name]= value;
        evt.preventDefault();
    }
    trySignin = () => { //회원가입 메소드- 민호
        console.log(this.Signininfo);
        let regExp = /[a-z0-9]{2,}@[a-z0-9-]{2,}.[a-z0-9]{2,}/i;
        if (!regExp.test(this.Signininfo.email)) {       //이메일 정규식 체크-민호
            console.log('이메일이 아닙니다');
            alert('이메일 형식이 아닙니다.');
            return;
        };
        var regex = /^[A-Za-z0-9]{6,12}$/;
        if (!regex.test(this.Signininfo.password)) {     //비밀번호 숫자,문자 포함 6~12자리-민호
            console.log('비밀번호를 다시 설정하셔야 합니다.');
            alert('비밀번호를 다시 설정하셔야 합니다.');
            return;
        };

        if (!this.Signininfo.password === this.Signininfo.passwordconfirm) { //비밀번호 체크-민호
            console.log('비밀번호가 일치 하지 않습니다.');
            alert('비밀번호가 일치 하지 않습니다.');
            return;
        }
        if (this.nexonemail.disabled === false) {     //넥슨 이메일 인증 체크-민호
            console.log('넥슨 이메일이 인증 되지 않았습니다.');
            alert('넥슨 이메일이 인증 되지 않았습니다.');
            return;
        }
        axios.post('/server/signin', this.Signininfo)   //서버에회원가입 요청-민호 
            .then((c) => {
                console.log(c.data);
            })
            .catch(err => {
                console.error(err);
            });

    }
    
    sendCode = () => {
        console.log('넥슨 코드 요청');
        let regExp = /[a-z0-9]{2,}@nexon.com/i;
        if (!regExp.test(this.Signininfo.nexonemail)) {       //넥슨 이메일 정규식 체크- 민호
            console.log('넥슨 이메일이 아닙니다');
            alert('넥슨 이메일 형식이 아닙니다.');
            return;
        };
        request('post', '/server/email/nexon', {'nexonemail':this.Signininfo.nexonemail});  //서버에 넥슨 이메일코드 전송요청-민호
    }
    checkCode=()=>{ ////서버에 넥슨 코드 인증요청-민호
        console.log('넥슨코드 체크요청 보냄');
        if(request('post','/server/checkcode',{'code':this.nexoncode.value})){
            this.setState(prevstate=>({
                isdisabled:!prevstate.disabled,
            }));
        };
    }
    render() {
        return (    //민호
            <div className="signinform">
                <AuthContent title="회원가입">
                    <InputWithLabel label="이메일" name="email" placeholder="이메일" onChange={this.handleChange} />
                    <InputWithLabel label="이름" name="username" placeholder="이름" onChange={this.handleChange} />
                    <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={this.handleChange} />
                    <InputWithLabel label="비밀번호 확인" name="passwordconfirm" placeholder="비밀번호 확인" type="password" onChange={this.handleChange} />
                    <InputWithLabelButton label="넥슨이메일" name="nexonemail" placeholder="넥슨 이메일" onChange={this.handleChange} onClick={this.sendCode} disabled={this.state.isdisabled}/>
                    <InputWithButton name="confirmcode" placeholder="넥슨 이메일 인증 코드" onChange={this.handleChange} onClick={this.checkCode} disabled={this.state.isdisabled}/>
                    <AuthButton onClick={this.trySignin}>회원가입</AuthButton>
                    <RightAlignedLink to="/login">로그인</RightAlignedLink>
                </AuthContent>
            </div>
        )
    }
}
export default Signin;
//민호 19.08.01