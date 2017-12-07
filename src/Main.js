// insert import statements later

import $ from 'jquery';
import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import {HomePage} from './Homepage.js';
import{QuestionPage} from './QuestionPage.js';
import{ReviewPage} from './ReviewPage.js';

class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/QuestionPage' component={QuestionPage}/>
          <Route path='/ReviewPage' component={HomePage}/>
        </Switch>
      </main>
    );
  }
}

// insert export statements later
export {Main};
