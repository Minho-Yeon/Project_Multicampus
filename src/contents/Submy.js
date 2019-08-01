//마이페이지 시작 7.31(상욱)

import React, { Component } from 'react';
import './Submy.scss';
import { Collapse, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Submy extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    toggle() {
        this.setState(state => ({
            collapse: !state.collapse
        }));
    }

    render() {
        return (
            <div className="ChartDiv">
                
                    <div className="Submyli">
                        <img className="myimg" src={this.props.img} alt="" />
                        {this.props.name}
                        <button className="downbtn" onClick={this.toggle}><img className="Subdown" src="./jpg/down.png" alt="" /></button>
                        <Collapse isOpen={this.state.collapse}>
                            <Card>
                                <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                     enim eiusmodsdhdsihfisaelfsdkncds;n;.sdantukancmsda
                                     sdajrhiluasfr
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
        
            </div>
        );
    }
}

export default Submy;