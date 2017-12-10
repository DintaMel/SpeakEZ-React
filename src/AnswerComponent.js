import React, {Component} from 'react';

import {Col, Well, Row} from 'react-bootstrap';


class AnswerComponent extends React.Component{

  constructor(props){
    super(props);




  }



render(
){
  return(

      <Well className='AnswerReviewBox'>
        <Row className='response'>
          <Col sm={1}>
            Question:
          </Col>
          <Col sm={11}>
            {this.props.question}
          </Col>
        </Row>

        <Row className='response '>
          <Col sm={1}>
            Situation/Task:
          </Col>
          <Col sm={11}>
            {this.props.situation}
          </Col>
        </Row>

        <Row className='response '>
          <Col sm={1}>
            Action:
          </Col>
          <Col sm={11}>
            {this.props.action}
          </Col>
        </Row>

        <Row className='response'>
          <Col sm={1}>
            Result:
          </Col>
          <Col sm={11}>
            {this.props.result}
          </Col>
        </Row>
      </Well>

  );
}

}

export {AnswerComponent};
