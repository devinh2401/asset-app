import React, { Component } from "react";
import AssetCategory from "./Asset/Assetcategory";
import Assetlist from "./Asset/Assetlist";
import Assetdetail from "./Asset/Assetdetail";
import '../styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
// import { json } from "express";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataAsset:[
        {
          id:'',
          assetname:'Laptop Dell 5520',
          buyday:'',
          price:'20.000.000',
          supplier:'365',
          warranty:'24',
          location:'vp208',
          userid:'vp208',
          note:'New full box',
        } 
       ]
     };
     const data = this.state.dataAsset.userid;
     const jd = JSON.stringify(data)
     console.log(jd)
  }
   
    // Newdata =JSON.stringify(dataAsset)
    // Jdata= JSON.parse(Newdata)
    
   
  //  const [id,assetname,buyday,price,supplier,warranty,location,userid] = dataAsset
    render() {      
      // console.log(Jdata.id)
        return (   
        <Routes>
          <Route exact  path="/" element={<AssetCategory />} />
          <Route  path="/Assetlist" element={<Assetlist />} />
          <Route  path="/Assetdetail" element={<Assetdetail />} />
        </Routes>
        );
    }
}

export default App;