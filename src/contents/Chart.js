import React,{Component} from 'react';
import {Collapse,Card,CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chart.scss';


class Chart extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
      console.log("this.state:", this.state);
      
    }
    toggle() {
      this.setState(prevstate=>({ 
          collapse: !prevstate.collapse 
        }),console.log("collapse:", this.state)
        );
    }
    isOpen=()=>{
      this.props.isOpen();
      console.log("this.state 2:", this.state);
      
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
        borderRadius:'12px',
        marginBottom: '10px',
        boxShadow:'3px 3px #c1c1c1'
      },
      change = {
        fontSize: '15px',
        margin: '5px',
        display: 'inline'
      },
      ulstyle={
        width :'500px'
      }
    ) {
      return (
        <div className="ChartDiv" style={chart}>
          <ul style={ulstyle}>
            <div style={list}>
              <img className="subimg" src={this.props.img} alt=""/>
              {this.props.name}
              <p style={change}>{this.props.change}</p>
              <button className="downbtn" onClick={this.toggle}><img className="downimg" src="./jpg/down.png" alt=""/></button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <p>게임소개</p>
                    <button onClick={()=>{this.isOpen()}}>결제하기</button>
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