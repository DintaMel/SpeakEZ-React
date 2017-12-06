
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';

import $ from 'jquery';

import React, { Component } from 'react';

import {Header} from './Header.js';
import {HomePage} from './Homepage.js';
import{QuestionPage} from './QuestionPage.js';
import{ReviewPage} from './ReviewPage.js';
import {Footer} from './footer.js';




// var localStorageCounter;


class App extends Component {


    constructor(props){
      super(props);

      this._answersParse = this._answersParse.bind(this);


    }

    _answersParse(){
      var answersArray = [];
      var parsedAnswer;

      for (let i = 0; i < 2; i++){
      // for (let i = 0; i < localStorageCounter; i++){
        parsedAnswer = JSON.parse(localStorage.getItem(i));
        answersArray.push(parsedAnswer);
        console.log(parsedAnswer);
      }

      console.log(answersArray);

      // return(<ReviewPage />);

      return answersArray.map((answer) => {
        return(<ReviewPage question={answer['Question']} situation={answer['Situation']}
        action={answer['Action']} result={answer['Result']}/>);
      });

    }


  render() {

    // const answersArrayRender = this._answersParse();
    // this._answersParse();


// insert below  to review answers {answersArrayRender}
// insert below to answer questions <QuestionPage/>
    return (
      <body>

        <Header />

        <QuestionPage/>
        <Footer />

      </body>
    );
  }
}

export default App;
