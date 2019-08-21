import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col, Button } from 'reactstrap';
import './Receipt.scss'
import ReceiptList from './ReceiptList.js'

class Receipt extends Component {
    constructor(props){
        super(props);
        this.state = {
 
        };
    };

    createReceipt(){
        let list = [];
        let game_name_check = {};
        let infos = this.props.Infos;
        console.log('정보들', infos)

        for (let num in infos){

            list.push( <ReceiptList
                key = {num}             
                number={num}
                game_name={infos[num].game_name}
                money={infos[num].money}
                money_with_rate={infos[num].money_with_rate}
                fee={infos[num].fee}
                remain_game_money={infos[num].remain_game_money}
                remain_platform_money={infos[num].remain_platform_money} />)
            
        }    
    
        return list
    };


    render() {
        return (
            <div className='Receipt'>
                <div className='ReceiptBody'>
                <h1> 계산서 </h1>
                <p> 마우스를 올려놓으면 전체 계산서가 보여요 </p>

                <Table size="sm">
                    <thead>
                    <tr>
                        <th> </th>
                        <th>게임 이름</th>
                        <th>금액</th>
                        <th>환율적용 금액</th>
                        <th>수수료</th>
                        <th>게임_남은 금액</th>
                        <th>플랫폼_남은 금액</th>
                    </tr>
                    </thead>
                    <tbody id='tbody'>
                        {this.createReceipt()}
                    </tbody>
                </Table>
                <Row>
                    <Col> <Button color="secondary"> 취소 </Button>
                    </Col>
                    <Col> <Button color="danger"> 바꾸기 </Button>
                    </Col>
                </Row>
            </div>
        </div>
        )
    }
}
export default Receipt;

