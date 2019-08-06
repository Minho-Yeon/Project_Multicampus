import React, { Component } from 'react';
import './Project.scss';
import Header from './Header';
import Main from './contents/Main';
import Exchange from './contents/Exchange';
import Login from './contents/Login';
import Signin from './contents/Signin';
import Mypage from './Mypage';
import Footer from './Footer';
import Auth from './contents/Auth';
import Confirm from './contents/Confirm';
import LoginModal from './contents/LoginModal';
import { BrowserRouter, Route } from 'react-router-dom';
import request from './contents/Request';
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,

            characterinfo:"",
            isModalOpen: false,
        }
    }
    isToggle = () => {
        this.setState(prevstate => ({
            isOpen: !prevstate.isOpen,
        }));
    }
    getdata= async()=>{
        let rawdata1 = await request('get', '/server/gameinfo', {});
        let rawdata2 = await request('get', '/server/exchangerate', {});
        localStorage.setItem('gamelist', JSON.stringify(rawdata1.data.gamelist));
        localStorage.setItem('exchangerate', JSON.stringify(rawdata2.data.exchangerate));
    }
    getCharacter=async()=>{
        if(localStorage.getItem('logininfo')){
            let logininfo = JSON.parse(localStorage.getItem('logininfo'));
            let rawdata= await request('post','/server/character',{useremail:logininfo.email_user});
            let characterinfo=rawdata.data.characterinfo;
            console.log("character정보");
            console.log(characterinfo);
            this.setState({
                characterinfo:characterinfo,
            })
        }
    }
    componentDidMount=()=>{
        console.log('project재실행');
        this.getCharacter();
        this.getdata();
    }

    openModal = () => {
        this.setState(prevstate =>({ 
            isModalOpen: true, 
        }));
    }

    closeModal = () => {
        this.setState(prevstate =>({ 
            isModalOpen: false 
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
                        <Route exact to path="/" component={() => <Main  characterinfo={this.state.characterinfo}/>}/>
                        <Route path="/exchange" component={() => <Exchange  getCharacter={this.getCharacter} characterinfo={this.state.characterinfo}/>}/>
                        <Route path="/login" component={() => <Login getCharacter={this.getCharacter}/>}/>
                        <Route path="/signin" component={Signin} />
                        <Route path="/auth" component={Auth} />
                        <Route path="/confirm" component={Confirm} />
                    </div>
                    <div id="Mypage" style={{ width: this.state.isOpen ? '30%' : '0%'}}  >{/*마이페이지 부분 */}
                        <Mypage characterinfo={this.state.characterinfo}/>
                    </div>
                </div>
                <div>
                    <Footer />{/* footer 부분*/}
                    <button onClick={this.openModal}>Modal Open</button>
                    <LoginModal isOpen={this.state.isModalOpen} close={this.closeModal}/>
                </div>

            </BrowserRouter>
        )
    }
}

export default Project;        