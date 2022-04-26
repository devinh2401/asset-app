import React, { Component } from "react";
import AssetCategory from "./Asset/Assetcategory";
import Assetlist from "./Asset/Assetlist";
import Assetdetail from "./Asset/Assetdetail";
import '../styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
// import store from "../Redux/store";
// import { demo } from "../Redux/Actions/Action";

import AssetMove from "./Asset/AssetMove";
import AssetRepair from "./Asset/AssetRepair"
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
    
  }
       render() {      
      // const {dataAsset} = this.state
      // const dataRedux =store.getState(store)
      // console.log(dataRedux.demo)
      // store.dispatch(demo)
        return (   
        <Routes>
          <Route exact  path="/" element={<AssetCategory />} />
          <Route  path="/Assetlist" element={<Assetlist />} />
          <Route  path="/Assetdetail" element={<Assetdetail />} />
          <Route  path="/AssetMove" element={<AssetMove />} />
          <Route  path="/AssetRepair" element={<AssetRepair />} />
          
        </Routes>
        );
    }
}

export default App;