import React, { Component } from 'react';
import { Collapse, Card, CardBody, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chart.scss';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,

    };
    this.exchangeinfo={
    };

  }
  handleChange=(evt)=>{
    
    console.log(evt.target);
    // console.log(this.exchangeinfo);
    const {name,value}=evt.target;
    // console.log(this.exchangeinfo[number]);
    this.exchangeinfo[name]=value;

    console.log(this.exchangeinfo);
    evt.preventDefault();
}
  toggle=()=> {
    if (localStorage.getItem('logininfo')) {
      this.setState(prevstate => ({
        collapse: !prevstate.collapse
      }));
    }
    else { //로그인 안되었을 경우 Project.js에서 모달 isOpen:true로 바뀜
      this.props.isToggle();
    }
  }
  isOpen = () => {

    let message="";
    this.props.isOpen(message);

  }
  render(
    chart = {
      height: '80px',
      padding: '10px',
      margin: '10px'

    },
    list = {
      width: '100%',
      float: 'left',
      listStyle: 'none',
      fontSize: '30px',
      border: '1px solid black',
      borderRadius: '12px',
      marginBottom: '10px',
      boxShadow: '3px 3px #c1c1c1'
    },
    change = {
      fontSize: '15px',
      margin: '5px',
      display: 'inline'
    },
    ulstyle = {
      width: '500px'
    },
    gameintro = {
      fontSize: '8px',
    }
  ) {
    if(this.props.characterinfo){
    if (this.props.characterinfo.length>0) {
      this.characterlist = [];
      for (let num in this.props.characterinfo) {
        this.characterlist.push(
          <div key={num} style={gameintro}>
            {"닉네임 : "+this.props.characterinfo[num].name_character+"->"} 
            <label>플랫폼머니 :</label><input type="text"  name={num+"platform"} onChange={this.handleChange} />
            <label>게임머니 :</label><input type="text"  name={num+"game"} onChange={this.handleChange} />
          </div>
        );
      }
    }
    else{
      this.characterlist = <p style={gameintro}>캐릭터가 존재하지 않습니다.</p>;
    }
  }
    return (
      <div className="ChartDiv" style={chart}>
        <ul style={ulstyle}>
          <div style={list}>
            <img className="subimg" src={this.props.img} alt="" />
            {this.props.name}
            <p style={change}>{this.props.change}</p>
            <button className="downbtn" onClick={this.toggle}><img className="downimg" src="./jpg/down.png" alt="" /></button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  <p style={gameintro}>{this.props.gameintro}</p>
                  {this.characterlist}
                  <Button color="primary" onClick={() => { this.isOpen() }}>결제하기</Button>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </ul>
      </div>
    );
  }
}

export default Chart;