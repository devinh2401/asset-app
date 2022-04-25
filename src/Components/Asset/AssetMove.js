import React, { Component } from 'react';
import { Row, Col, Container, Table} from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
// import AssetMove from './AssetMove';
import AssetRepair from './AssetRepair';

class AssetMove extends Component {
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
                    <div className="panel-info">
                        <div className='panel-list'>
                            <ul className='pn-list'> 
                            
                                <li className='tab-detail active' onClick={this.showTable}><Link to ="#">Thông tin tài sản</Link> </li>
                                <li className='tab-detail'><Link to ="/AssetMove">Lịch sử điểu động</Link> </li>
                                <li className='tab-detail'><Link to ="/AssetRepair">Lịch sử sửa chữa</Link> </li>
                                <li className='tab-detail'><Link to ="#">Lịch sử Kiểm định</Link> </li>
                                
                            </ul>
                            <button className="btn-primary" style={{textTransform:'uppercase' , borderRadius:'3px', padding:'2px', marginLeft:'3px'}}> Thêm mới lịch sử điều động</button>
                            <form className='form-tbl'>
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Mô tả</th>
                                        <th>Vị trí</th>
                                        <th>Người quản lý</th>
                                        <th>Ngày điều chuyển</th>
                                        <th>Ghi chú</th>                                                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>1</td>
                                        <td>Ram 4G</td>
                                        <td>Chiếc</td>
                                        <td>2</td>
                                        <td>500.000</td>
                                        <td>New</td>
                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Ram 4G</td>
                                        <td>Chiếc</td>
                                        <td>2</td>
                                        <td>500.000</td>
                                        <td>New</td>
                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Ram 4G</td>
                                        <td>Chiếc</td>
                                        <td>2</td>
                                        <td>500.000</td>
                                        <td>New</td>
                                        </tr>
                                    </tbody>
                            </Table>
                            
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default AssetMove;