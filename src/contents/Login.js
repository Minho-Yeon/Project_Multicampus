import React,{Component} from 'react';
import './Login.scss';
class Login extends Component{
    render(){
        return(
            <div>
                <div className="Logindiv">
                    <form>
                    <h1>로그인</h1>
                    <div>
                    <p className="Email">이메일</p>
                    <input className="Emailin" type="email" autoFocus placeholder="이메일" />
                    </div>
                    <div>
                    <p className="Password">비밀번호</p>
                    <input className="Passwordin" type="password" placeholder="비밀번호" />
                    </div>
                    <br />
                    <button className="LoginBtn">로그인</button>
                    </form>  
                    <a className="Loginunder" href="/signin">회원가입</a>
                    <a className="Loginunder" href="/" >홈페이지</a>
                 
                </div>
            </div>
        )
    }
}
export default Login;