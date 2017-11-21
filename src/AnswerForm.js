
import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Col, Button} from 'react-bootstrap';

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
  e.preventDefault();
  console.log('default prevented');
}

_handleSituationChange(e){
  this.setState({situationValue: e.target.value});
   console.log(this.state.situationValue);
}

_handleActionChange(e){
  this.setState({actionValue: e.target.value});
  console.log(this.state.actionValue);
}

_handleResultChange(e){
  this.setState({resultValue: e.target.value});
  console.log(this.state.resultValue);
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
