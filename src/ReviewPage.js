import React, {Component} from 'react';

import{AnswerComponent} from './AnswerComponent.js';

var localStorageCounter;

class ReviewPage extends React.Component{



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

        // return(<AnswerComponent />);

        return answersArray.map((answer) => {
          return(<AnswerComponent question={answer['Question']} situation={answer['Situation']}
          action={answer['Action']} result={answer['Result']}/>);
        });

      }


render(){

  const answersArrayRender = this._answersParse();
  this._answersParse();

// paste below   {answersArrayRender}
//   <div>Hello</div>
  return(
    <div>
    {answersArrayRender}
    </div>
  );
}

}

export {ReviewPage};
