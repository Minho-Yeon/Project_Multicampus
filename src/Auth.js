import React, { Component } from 'react';
import './Auth.scss';
import { Button } from 'reactstrap';

class Auth extends Component {



    render() {
        return (
            <div className="Auth">
                <h1> 환영합니다! </h1>
                <p> 계정이 확인되어 이제 활성화되었습니다. </p>
                <p> 시작하려면 로그인하십시오. </p>
                <Button className='btn' color="primary" size="lg" block>Block level button</Button>
            </div>
        );
    }
}

export default Auth;