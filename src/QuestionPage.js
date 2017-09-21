import React, { Component } from 'react';
import {ButtonToolbar} from 'react-bootstrap';

import $ from 'jquery';
import './responsive-voice.js';


class QuestionPage extends React.Component{

  render(){
    return(
      <div>
        <div onClick={this._readQuestion.bind(this)} className='well text-center' id='question'>
          What is your biggest strength?
        </div>
        <div className='text-center'>

          <button className='btn' id="newQuestionButton">New Question <span className='glyphicon glyphicon-arrow-right'></span></button>
          {/* Added space with JS below because React removes spacing between
            buttons and ButtonToolbar react-bootstrap class floats left*/}
          {' '}
          <button className='btn'>Record Answer <span className='glyphicon glyphicon-record'></span></button>
          {' '}
          <button className='btn'>Document Answer <span className='glyphicon glyphicon-pencil'></span></button>

        </div>

      </div>
    );
  }

_readQuestion() {
    console.log(this.innerText);
    console.log('question read');
}

}

export {QuestionPage};
