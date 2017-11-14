
import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Col, Button} from 'react-bootstrap';

class AnswerForm extends React.Component{
  render(){
    return(
      <Form horizontal className='well'>
        <FormGroup >
          <Col componentClass={ControlLabel} sm={2}>
            Situation/Task
          </Col>
          <Col sm={10}>
            <FormControl componentClass='textarea' placeholder='Describe the situation or task.'/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Action
          </Col>
          <Col sm={10}>
            <FormControl componentClass='textarea' placeholder='What actions did you take in response to the situation?'/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Result
          </Col>
          <Col sm={10}>
            <FormControl componentClass='textarea' placeholder='What were the results of your actions?'/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type='submit'>
              Save
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export{AnswerForm};
