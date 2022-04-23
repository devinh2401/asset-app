import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import Assetdetail from './Assetdetail';

class Assetlist extends Component {
    dataAsset =[
        {'id':'', 'assetname':'laptop', 'buyday':'','price':'','supplier':'','warranty':'24','location':'vp208','userid':'','note':'Note'}
      ]
    render() {
     
        return (
            
            <div className='asset-list'>
                <div className="head-list">
                <h4 style={{color:'#036ead', margin: "5px", fontWeight:'600'}}> <i className="fa fa-list"></i> Danh sách tài sản </h4>
                <div className='panel'> 
                <a className="pn-right">
                    <i className="fa fa-search i-search"></i>
                    <Button variant="primary btn-search"> Search</Button>
                </a>
                <a className="pn-right">
                    <i className="fa fa-add"></i>
                    <Button variant="primary"> Thêm mới</Button>
                </a>
                </div>
                </div>
                <div className='asset-search' style={{float:'right', margin: '10px'}}>
                    <panel style={{marginRight:'5px'}}>Tìm kiếm:</panel>
                    <input type='search' style={{outline:'none', border:'1px solid  #dfe6e9', borderRadius:"3px", width:'200px'}}></input>
                </div>
                <div className="asset-data">
                <Table striped bordered hover >
                            <thead>
                                <tr >
                                <th  className='asset-action' >#</th>
                                <th>Mã tài sản</th>
                                <th>Tên tài sản</th>
                                <th>Mua ngày</th>
                                <th>Giá trị</th>
                                <th>Nhà cung cấp</th>
                                <th>Thời gian khấu hao</th>
                                <th>Bảo hành</th>
                                <th>Vị trí</th>
                                <th>Người quản lý</th>
                                <th>Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td >
                                  <Link to ='/Assetdetail'>
                                  <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                                        <i className="fa fa-barcode"></i>
                                </a>
                                </Link> 
                                    <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                                        <i className="fa fa-id-card"></i>
                                    </a>
                                    <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                                        <i className="fa fa-trash"></i>
                                    </a>
                                </td>
                                <td>TS001</td>
                                <td>Laptop Dell</td>
                                <td>20/01/2022</td>
                                <td>15.000.000</td>
                                <td>Phong Vũ</td>
                                <td>365</td>
                                <td>24</td>
                                <td>vp208</td>
                                <td>vp208</td>
                                <td>New</td>
                                </tr>
                                <tr>
                                <td >
                                  <Link to ='/Assetdetail'>
                                  <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                                        <i className="fa fa-barcode"></i>
                                </a>
                                </Link> 
                                    <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                                        <i className="fa fa-id-card"></i>
                                    </a>
                                    <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                                        <i className="fa fa-trash"></i>
                                    </a>
                                </td>
                                <td>TS001</td>
                                <td>Laptop Dell</td>
                                <td>20/01/2022</td>
                                <td>15.000.000</td>
                                <td>Phong Vũ</td>
                                <td>365</td>
                                <td>24</td>
                                <td>vp208</td>
                                <td>vp208</td>
                                <td>New</td>
                                </tr>
                                 <tr>
                                <td >
                                  <Link to ='/Assetdetail'>
                                  <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                                        <i className="fa fa-barcode"></i>
                                </a>
                                </Link> 
                                    <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                                        <i className="fa fa-id-card"></i>
                                    </a>
                                    <a className="action-icon" href="#" placeholder='Thông tin chi tiết'>
                                        <i className="fa fa-trash"></i>
                                    </a>
                                </td>
                                <td>TS001</td>
                                <td>Laptop Dell</td>
                                <td>20/01/2022</td>
                                <td>15.000.000</td>
                                <td>Phong Vũ</td>
                                <td>365</td>
                                <td>24</td>
                                <td>vp208</td>
                                <td>vp208</td>
                                <td>New</td>
                                </tr>
                                
                            </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Assetlist;