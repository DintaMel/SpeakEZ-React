
import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Col, Button} from 'react-bootstrap';

var localStorageCounter = 0;

class AnswerForm extends React.Component{

constructor(props){
  super(props);

  this.state = {situationValue:'', actionValue: '', resultValue: ''};

  this._submitResponse= this._submitResponse.bind(this);
  this._handleSituationChange= this._handleSituationChange.bind(this);
  this._handleActionChange= this._handleActionChange.bind(this);
  this._handleResultChange= this._handleResultChange.bind(this);

}

_submitResponse(e){
  // prevents form submission and page reload
  e.preventDefault();

  // possibly add space to the value states so that the whole string is captured.
  // Store response into array
  let questionResponse = {"Question": this.props.question,
  "Situation": this.state.situationValue, "Action": this.state.actionValue,
  "Result": this.state.resultValue};
  console.log(questionResponse);

  // takes response and puts it into JSON string format. localStorage can only handle string formats.
  questionResponse = JSON.stringify(questionResponse);



  // stores item using localStorage. Response is in JSON format.
  localStorage.setItem(localStorageCounter, questionResponse);
  console.log(localStorageCounter);

  // increments ID counter for localstorage by one so that each response will have a new ID
  localStorageCounter++;
}

_handleSituationChange(e){
  this.setState({situationValue: e.target.value});
}

_handleActionChange(e){
  this.setState({actionValue: e.target.value});
}

_handleResultChange(e){
  this.setState({resultValue: e.target.value});
}

  render(){
    return(
      <Form horizontal className='well'>
        <FormGroup >
          <Col componentClass={ControlLabel} sm={2}>
            Situation/Task
          </Col>
          <Col sm={10}>
            <FormControl componentClass='textarea' value={this.state.situationValue} onChange={this._handleSituationChange} placeholder='Describe the situation or task.'/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Action
          </Col>
          <Col sm={10}>
            <FormControl componentClass='textarea' value={this.state.actionValue} onChange={this._handleActionChange} placeholder='What actions did you take in response to the situation?'/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Result
          </Col>
          <Col sm={10}>
            <FormControl componentClass='textarea' value={this.state.resultValue} onChange={this._handleResultChange} placeholder='What were the results of your actions?'/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={this._submitResponse} type='submit'>
              Save
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export{AnswerForm};
