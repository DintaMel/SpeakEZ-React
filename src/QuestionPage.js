import React, { Component } from 'react';
import {ButtonToolbar} from 'react-bootstrap';

import {AnswerForm} from './AnswerForm.js';

import $ from 'jquery';
import {responsiveVoice} from './responsive-voice.js';


const questionList = [
  {id: 0, question: 'Why are you interested in web development?'},
  {id: 1, question: 'What is your biggest strength?'},
  {id: 2, question: 'What is your biggest weakness?'},
  {id: 3, question: 'Describe a time where you took on a leadership role.'},
  {id: 4, question: 'Tell me about yourself.'},
  {id: 5, question: "Describe a time where you didn't work well with another person?"}
];

const min = 0;
const max = questionList.length;

class QuestionPage extends React.Component{
constructor(props){
  super(props);


// I think I can remove the readquestion and documentAnswerToggle states. Need to review
  this.state = {question: 'What is your biggest strength?', readquestion: false, documentAnswerToggle: false};

  this._readQuestion = this._readQuestion.bind(this);
  this._randomQuestionId = this._randomQuestionId.bind(this);
  this._documentAnswerClick = this._documentAnswerClick.bind(this);

}


_documentAnswerClick(){

  this.setState({documentAnswerToggle: !this.state.documentAnswerToggle});
  console.log(this.state.documentAnswerToggle);

}


_readQuestion() {

  console.log(this.state.question);
  responsiveVoice.speak(this.state.question);

  }


_randomQuestionId(){

  var questionNum = Math.floor(Math.random() * max);
  var newQuestion = questionList[questionNum].question;

  this.setState({
      question: newQuestion
  });

  responsiveVoice.speak(newQuestion);

};





  render(){

    let answerDocumentForm;
    if(this.state.documentAnswerToggle){
      answerDocumentForm =  <AnswerForm question={this.state.question}/>;

    }

    return(
      <div>
        <div onClick={this._readQuestion} className='well text-center' id='question' >
          {this.state.question}
        </div>
        <div className='text-center'>

          <button className='btn' id="newQuestionButton" onClick={this._randomQuestionId}>New Question <span className='glyphicon glyphicon-arrow-right'></span></button>
          {/* Added space with JS below because React removes spacing between
            buttons and ButtonToolbar react-bootstrap class floats left*/}
          {' '}
          <button className='btn'>Record Answer <span className='glyphicon glyphicon-record'></span></button>
          {' '}
          <button className='btn' onClick={this._documentAnswerClick}>Document Answer <span className='glyphicon glyphicon-pencil'></span></button>

        </div>
        <br/>
        <div>
          {answerDocumentForm}
        </div>
      </div>
    );
  }
}

export {QuestionPage};
