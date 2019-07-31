import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';
class Header extends Component {
    isToggle = () => {
        this.props.isToggle();
    }
    render() {
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
        return (
                <div className="header">
                    <Link to="/"><p style={Header}><img className="mainicon" src="./jpg/nexonicon.jpg" alt=""/>Nexon Trade</p></Link>
                    <ul className="form">
                        <li><Link to="/signin">회원가입</Link></li>
                        <li><Link to="/login">로그인</Link></li>
                        <li onClick={() => { this.isToggle() }}>마이페이지</li>
                        <li>로그아웃</li>
                    </ul>
                </div>
        )
    }
}

export default Header;