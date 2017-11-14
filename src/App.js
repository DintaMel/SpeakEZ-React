
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

import $ from 'jquery';

import React, { Component } from 'react';
import { Navbar, Jumbotron, Button} from 'react-bootstrap';

import {Header} from './Header.js';
import {HomePage} from './Homepage.js';
import{QuestionPage} from './QuestionPage.js';
import {Footer} from './footer.js';



class App extends Component {


  render() {
    return (
      <body>

        <Header />
        <QuestionPage />

        <Footer />

      </body>
    );
  }
}

export default App;
