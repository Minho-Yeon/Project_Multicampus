import React,{Component} from 'react';
import AuthButton from './auth/AuthButton.js';
import AuthContent from './auth/AuthContent.js';
import InputWithLabel from './auth/InputWithLabel.js';
import './Login.scss';
import axios from 'axios';

class Login extends Component{
    handleChange = (e) => {
        const {logininfo} = this;
        const { name, value } = e.target;
        console.log('name:'+name+' value'+value);
        logininfo[name]= value;
    }
    tryLogin = ()=>{
        console.log(this.logininfo);
        axios.post('/server/login',{
            email:this.logininfo.email,
            password:this.logininfo.password
        })
        .then((c)=>{
            if(c.data.userinfo!==undefined){
                localStorage.setItem('logininfo',c.data.userinfo);
                this.props.history.push('/');
            }
        })
        .catch(err=>{
            console.error(err);
        });
        
    }
    render(){
        return(

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
export default Login;