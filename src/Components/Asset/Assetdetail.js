import React, { Component } from 'react';
import { Row, Col, Container, Table} from 'react-bootstrap'

class Assetdetail extends Component {
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
                                <li Link to ='#'> Thông tin tài sản</li>
                                <li Link to ='#'> Lịch sử điểu động</li>
                                <li Link to ='#'> Lịch sử sửa chữa</li>
                                <li Link to ='#'> lịch sử Kiểm định</li>
                                
                            </ul>
                            <button className="btn-primary" style={{textTransform:'uppercase' , borderRadius:'3px', padding:'2px', marginLeft:'3px'}}> Thêm mới thông tin tài sản</button>
                            <form className='form-tbl'>
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>Mô tả</th>
                                        <th>Đơn vị</th>
                                        <th>Số lượng</th>
                                        <th>Giá trị ban đầu</th>
                                        <th>Thời gian bảo hành (tháng)</th>
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
                                        <td>24</td>
                                        <td>New</td>
                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Ram 4G</td>
                                        <td>Chiếc</td>
                                        <td>2</td>
                                        <td>500.000</td>
                                        <td>24</td>
                                        <td>New</td>
                                        </tr>
                                        <tr>
                                        <td>1</td>
                                        <td>Ram 4G</td>
                                        <td>Chiếc</td>
                                        <td>2</td>
                                        <td>500.000</td>
                                        <td>24</td>
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

export default Assetdetail;