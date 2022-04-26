import React, { Component } from 'react';
import { Row, Col, Container, Table} from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
// import AssetMove from './AssetMove';
import AssetRepair from './AssetRepair';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 'true', 
            showTable:'true'
        }
        this.showTable = this.showTable.bind(this);
      }
      showTable() {
        console.log('Click ok');
      }
         
    render() {
        return (
            <div className='asset-detail'>
                <div className="panel">
                
                    <h3 style={{color:'#036ead', margin: "5px"}}> <i className="fa fa-list"></i>  Thông tin tài sản</h3>
                    <div className='head-title'>
                        <div className='pic-title'>
                            <input type="file"
                            accept=".png, .jpg, .jpeg">
                            </input>
                        </div>
                        <div className='info-title' style={{display:'flex' , justifyContent:'space-around',width:'100%' }}>
                            <div className='info-left' >
                                <p className="name-detail"> Mã sản phẩm:</p>  
                                <p className="name-detail"> Tên tài sản:</p>                   
                                <p className="name-detail"> ngày mua:</p>                   
                                <p className="name-detail"> Thời gian khấu hao:</p>                   
                                <p className="name-detail"> Nhà cung cấp:</p> 
                            </div>
                            <div className='info-right'>
                                <p className="name-detail"> Loại tài sản:</p>  
                                <p className="name-detail"> Giá trị ban đầu:</p>                   
                                <p className="name-detail"> Ngày mua:</p>                   
                                <p className="name-detail"> Thời gian bảo hành:</p>                   
                                <p className="name-detail"> Ghi chú:</p> 
                            </div>
                        </div>
                        
                    </div> 
                  
                </div>
                    <h3> this demo page</h3> 
            </div>
        );
    }
}

export default Demo;