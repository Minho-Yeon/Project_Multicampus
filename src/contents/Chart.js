import React,{Component} from 'react';
import {Button,Collapse,Card,CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chart.scss';

class Chart extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }
    toggle() {
      this.setState(prevstate=>({ 
          collapse: !prevstate.collapse 
        }));
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
        marginBottom: '10px'
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
            <li style={list}>
              <img className="subimg" src={this.props.img} alt=""/>
              {this.props.name}
              <p style={change}>{this.props.change}</p>
              <Button className="downbtn" onClick={this.toggle}><img className="downimg" src="./jpg/down.png" alt=""/></Button>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    Anim pariatur cliche reprehenderit,
                     enim eiusmod high life accusamus terry richardson ad squid. Nihil
                     anim keffiyeh helvetica, craft beer labore wes anderson cred
                     nesciunt sapiente ea proident.
                </CardBody>
                </Card>
              </Collapse>
            </li>
          </ul>
        </div>
      );
    }
  }

  export default Chart;