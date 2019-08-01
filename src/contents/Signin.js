import React,{Component} from 'react';
import AuthButton from './auth/AuthButton.js';
import RightAlignedLink from './auth/RightAlignedLink.js';
import AuthContent from './auth/AuthContent.js';
import InputWithLabel from './auth/InputWithLabel.js';
import InputWithLabelButton from './auth/InputWithLabelButton';
import InputWithButton from './auth/InputWithButton';
import './Signin.scss';
class Signin extends Component{
    render(){
        return(
            <div className="signinform">
            <AuthContent title="회원가입">
                <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
                <InputWithLabel label="이름" name="username" placeholder="이름"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                <InputWithLabel label="비밀번호 확인" name="passwordconfirm" placeholder="비밀번호 확인" type="password"/>
                <InputWithLabelButton label="넥슨이메일" name="nexonemail" placeholder="넥슨 이메일"/>
                <InputWithButton  name="confirmcode" placeholder="넥슨 이메일 인증 코드"/>
                <AuthButton>회원가입</AuthButton>
                <RightAlignedLink to="/login">로그인</RightAlignedLink>
            </AuthContent>
            </div>
        )
    }
}
export default Signin;