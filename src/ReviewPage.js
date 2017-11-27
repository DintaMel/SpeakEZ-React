import React, {Component} from 'react';

import {Col, Well, Row} from 'react-bootstrap';


class ReviewPage extends React.Component{

  constructor(props){
    super(props);

  }

render(){
  return(

    <Well className='AnswerReviewBox'>
      <Row className='question '>
        <Col sm={1}>
          Question:
        </Col>
        <Col sm={11}>
          What is your biggest strength?
        </Col>
      </Row>

      <Row className='situation-response '>
        <Col sm={1}>
          Situation/Task:
        </Col>
        <Col sm={11}>
          I{"'"}m detail oriented. Testing new trading system.
        </Col>
      </Row>

      <Row className='action-response '>
        <Col sm={1}>
          Action:
        </Col>
        <Col sm={11}>
          Looked at the whole picture instead of just the expected result.
        </Col>
      </Row>

      <Row className='result-response'>
        <Col sm={1}>
          Result:
        </Col>
        <Col sm={11}>
          Found more defects than anyone else on our team. Recognized by leadership
          for testing abilities. Given opportunity to lead most difficult piece part
          of 2nd phase of the project.
        </Col>
      </Row>
    </Well>

  );
}

}

export {ReviewPage};
