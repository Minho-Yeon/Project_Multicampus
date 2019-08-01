import React,{Component} from 'react';
import AuthButton from './auth/AuthButton.js';
import AuthContent from './auth/AuthContent.js';
import InputWithLabel from './auth/InputWithLabel.js';

import './Login.scss';
class Login extends Component{
    render(){
        return(

            <div className='loginform'>
            <AuthContent title="로그인">
                <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                <AuthButton>로그인</AuthButton>
            </AuthContent>
            </div>
        )
    }
}
export default Login;