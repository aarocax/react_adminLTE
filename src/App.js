import React, { Component } from 'react';

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App wrapper">
        <Header />
        <Sidebar />
        <Content />
        <Footer />
        
      </div>
    );
  }
}

export default App;
