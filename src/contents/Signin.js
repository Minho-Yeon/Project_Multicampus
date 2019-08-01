import React,{Component} from 'react';
import AuthButton from './auth/AuthButton.js';
import RightAlignedLink from './auth/RightAlignedLink.js';
import AuthContent from './auth/AuthContent.js';
import InputWithLabel from './auth/InputWithLabel.js';
import InputWithLabelButton from './auth/InputWithLabelButton';
import InputWithButton from './auth/InputWithButton';
import './Signin.scss';
import request from './Request';
import axios from 'axios';
class Signin extends Component{
    handleChange = (e) => {
        const {Signininfo} = this;
        const { name, value } = e.target;
        console.log('name:'+name+' value'+value);
        Signininfo[name]= value;
    }
    trySignin = ()=>{
        console.log(this.Signininfo);
        axios.post('/server/signin',this.Signininfo)
        .then((c)=>{
            console.log('회원가입 성공');
        })
        .catch(err=>{
            console.error(err);
        });
        
    }
    sendCode =()=>{
        console.log('넥슨 코드 요청');
        request('post','/server/email/nexon',{});
    }
    render(){
        return(
            <div className="signinform">
            <AuthContent title="회원가입">
                <InputWithLabel label="이메일" name="email" placeholder="이메일" onchange={this.handleChange}/>
                <InputWithLabel label="이름" name="username" placeholder="이름" onchange={this.handleChange}/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" onchange={this.handleChange}/>
                <InputWithLabel label="비밀번호 확인" name="passwordconfirm" placeholder="비밀번호 확인" type="password" onchange={this.handleChange}/>
                <InputWithLabelButton label="넥슨이메일" name="nexonemail" placeholder="넥슨 이메일" onchange={this.handleChange} onClick={this.sendCode}/>
                <InputWithButton  name="confirmcode" placeholder="넥슨 이메일 인증 코드" onchange={this.handleChange}/>
                <AuthButton onClick={this.trySignin}>회원가입</AuthButton>
                <RightAlignedLink to="/login">로그인</RightAlignedLink>
            </AuthContent>
            </div>
        )
    }
}
export default Signin;