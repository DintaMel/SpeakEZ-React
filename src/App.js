
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

import React, { Component } from 'react';

import {Header} from './Header.js';
import {Main} from './Main.js';
import {Footer} from './footer.js';

class App extends Component {


    constructor(props){
      super(props);

    }


  render() {

    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
