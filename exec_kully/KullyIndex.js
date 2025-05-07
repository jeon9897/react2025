import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './css/Header.css';
import './css/Main.css';
import './css/Footer.css';
// import './css/Reset.css';

class KullyIndex extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default KullyIndex;