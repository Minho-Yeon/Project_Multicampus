import React, { Component } from 'react';
import './Project.scss';
import Header from './Header';
import Main from './contents/Main';
import Exchange from './contents/Exchange';
import Login from './contents/Login';
import Signin from './contents/Signin';
import Mypage from './Mypage';
import Footer from './Footer';
import Auth from './Auth';
import { BrowserRouter, Route } from 'react-router-dom';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    isToggle = () => {
        this.setState(prevstate => ({
            isOpen: !prevstate.isOpen,
        }));
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header isToggle={this.isToggle} />{/*Navbar 부분 */}
                </div>
                <div className="ContentsBox">
                    <div id="Contents" style={{ width: this.state.isOpen ? '70%' : '100%'}}>{/*내용 부분 */}
                        <Route exact to path="/" component={Main} />
                        <Route path="/exchange" component={Exchange} />
                        <Route path="/login" component={Login} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/auth" component={Auth} />
                    </div>
                    <div id="Mypage" style={{ width: this.state.isOpen ? '30%' : '0%'}}>{/*마이페이지 부분 */}
                        <Mypage />
                    </div>
                </div>
                <div>
                    <Footer />{/* footer 부분*/}
                </div>
            </BrowserRouter>
        )
    }
}

export default Project;        