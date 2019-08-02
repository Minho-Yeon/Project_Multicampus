import React,{Component} from 'react';
import AuthButton from './auth/AuthButton.js';
import AuthContent from './auth/AuthContent.js';
import InputWithLabel from './auth/InputWithLabel.js';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import request from './Request.js';
class Login extends Component{
    constructor(props){
        super(props);
        this.logininfo={};  //로그인 시도 정보 담아오는 그릇-민호
    }
    handleChange = (e) => { //로그인 시도 정보를 받아오는 메소드 -민호
        const { name, value } = e.target;
        console.log('name:'+name+' value'+value);
        this.logininfo[name]= value;
        e.preventDefault();
    }
    tryLogin = ()=>{    //로그인시도 메소드 -민호
        console.log(this.logininfo);
        let regExp = /[a-z0-9]{2,}@[a-z0-9-]{2,}.[a-z0-9]{2,}/i;
        if (!regExp.test(this.logininfo.email)) {       //이메일 정규식 체크-민호
            console.log('이메일이 아닙니다');
            alert('이메일 형식이 아닙니다.');
            return;
        };
        
        let issuccess=request('post','/server/login',this.logininfo); //서버에 로그인 요청- 민호
        if(issuccess.data.userinfo!==undefined){
            localStorage.setItem('logininfo',issuccess.data.userinfo);//로컬 스토리지에 로그인 정보 저장-민호
            this.props.history.push('/');   //메인페이지로 이동-민호
        }else{
            alert(issuccess.data.message);  //로그인 실패시 메세지-민호
        }
        
    }
    render(){
        return(//민호

            <div className='loginform'>
            <AuthContent title="로그인">
                <InputWithLabel label="이메일" name="email" placeholder="이메일" onChange={this.handleChange}/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={this.handleChange}/>
                <AuthButton onClick={this.tryLogin}>로그인</AuthButton>
            </AuthContent>
            </div>
        )
    }
}
export default withRouter(Login);