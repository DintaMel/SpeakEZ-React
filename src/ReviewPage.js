import React, {Component} from 'react';

import{AnswerComponent} from './AnswerComponent.js';

class ReviewPage extends React.Component{



      constructor(props){
        super(props);

        this._answersParse = this._answersParse.bind(this);


      }

      _answersParse(){
        var answersArray = [];
        var parsedAnswer;

        var localStorageCount = localStorage.length;
        if (localStorageCount)
        {
          console.log(localStorageCount);
          // for (let i = 0; i < 3; i++){
          for (let i = 0; i < localStorageCount; i++){
            parsedAnswer = JSON.parse(localStorage.getItem(i));
            answersArray.push(parsedAnswer);
            console.log(parsedAnswer);
          }

          return answersArray.map((answer) => {
            return(<AnswerComponent question={answer['Question']} situation={answer['Situation']}
            action={answer['Action']} result={answer['Result']}/>);
          });
        }
        else{
          return(<div className='well'>
            You have not documented any answers on the practice tab yet.
          </div>);
        }


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
