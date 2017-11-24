import React, {Component} from 'react';

import {Col} from 'react-bootstrap';


class ReviewPage extends React.Component{

  constructor(props){
    super(props);

  }

render(){
  return(
    <div>
    <div className='AnswerReviewBox well'>
      <section className='question '>
        <Col sm={1}>
          Question:
        </Col>
        <Col sm={11}>
          What is your biggest strength?
        </Col>
      </section>

      <section className='situation-response '>
        <div>
          Situation/Task:
        </div>
        <div>
          I{"'"}m detail oriented. Testing new trading system.
        </div>
      </section>

      <section className='action-response '>
        <div>
          Action:
        </div>
        <div>
          Looked at the whole picture instead of just the expected result.
        </div>
      </section>

      <section className='result-response'>
        <div>
          Result:
        </div>
        <div>
          Found more defects than anyone else on our team. Recognized by leadership
          for testing abilities. Given opportunity to lead most difficult piece part
          of 2nd phase of the project.
        </div>
      </section>
    </div>
    </div>
  );
}

}

export {ReviewPage};
