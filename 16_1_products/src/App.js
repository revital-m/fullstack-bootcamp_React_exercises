import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
// import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";

class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" exact component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
