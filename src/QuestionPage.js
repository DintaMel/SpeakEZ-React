import React, { Component } from 'react';
import {ButtonToolbar} from 'react-bootstrap';

import {AnswerForm} from './AnswerForm.js';
import {RecordAnswer} from './RecordAnswer.js'

import $ from 'jquery';
import {responsiveVoice} from './responsive-voice.js';


const questionList = [
  {id: 0, question: 'Why are you interested in web development?'},
  {id: 1, question: 'What is your biggest strength?'},
  {id: 2, question: 'What is your biggest weakness?'},
  {id: 3, question: 'Describe a time where you took on a leadership role.'},
  {id: 4, question: 'Tell me about yourself.'},
  {id: 5, question: "Describe a time where you didn't work well with another person."},
  {id: 6, question: "Tell me about a time when you had to form a strong partnership with another team or department to achieve a goal."},
  {id: 7, question: "Describe a situation when you asked for ideas or input from others, and it produced more successful results than if you had completed the project on your own."},
  {id: 8, question: "Tell me about a time when you led a project or team of people that had to accomplish its objectives under serious time constraints."},
  {id: 9, question: "Tell me about a time when you were working towards a goal with very little direction."},
  {id: 10, question: "Describe a situation when you had trouble managing your work load because you were asked to complete two important tasks."},
  {id: 11, question: "Tell me about a time when you discovered a way to improve an existing project or process."},
  {id: 12, question: "Describe a time when you recognized a problem that others were unaware of or overlooked."},
  {id: 13, question: "Describe a time when you had to decide between two courses of action."}
];

const min = 0;
const max = questionList.length;

class QuestionPage extends React.Component{
constructor(props){
  super(props);

  this.state = {question: 'What is your biggest strength?',  documentAnswerToggle: false, recordAnswerToggle: false};

  this._readQuestion = this._readQuestion.bind(this);
  this._randomQuestionId = this._randomQuestionId.bind(this);
  this._documentAnswerClick = this._documentAnswerClick.bind(this);
  this._recordAnswerClick = this._recordAnswerClick.bind(this);
}


_documentAnswerClick(){

  this.setState({documentAnswerToggle: !this.state.documentAnswerToggle});
  console.log(this.state.documentAnswerToggle);

}

_recordAnswerClick(){

  this.setState({recordAnswerToggle: !this.state.recordAnswerToggle});

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
      answerDocumentForm =  <AnswerForm question={this.state.question} new={this._randomQuestionId}/>;
    }

    let recordAnswerDisplay;
    if(this.state.recordAnswerToggle){
      recordAnswerDisplay =  <RecordAnswer />;
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
          <button className='btn' onClick={this._recordAnswerClick}>Record Answer <span className='glyphicon glyphicon-record'></span></button>
          {' '}
          <button className='btn' onClick={this._documentAnswerClick}>Document Answer <span className='glyphicon glyphicon-pencil'></span></button>

        </div>
        <br/>
        <div>
          {recordAnswerDisplay}
        </div>
        <div>
          {answerDocumentForm}
        </div>
      </div>
    );
  }
}

export {QuestionPage};
