import React, { Component } from 'react';

import {Grid, Row, Col, Image} from 'react-bootstrap';

class HomePage extends React.Component{
  render(){
    return(

      <Grid>
        <Row>
          <Col md={4} mdOffset={2}>
            Job interviews are stressful! SpeakEZ helps job seekers hone their
            interview skills.
            <br/>
            <br/>
            Its creator Melissa Dintaman often stuggled herself
            with lack of confidence and nerves during interviews. Feeling that
            her poor interview skills were holding her back from progressing,
            she was determined to improve.
            <br/>
            <br/>
            From her refusal to accept status quo, SpeakEZ was born! It is a
            tool that allows users to practice responding to interview questions,
            document answers, and review them later.
          </Col>
          <Col md={3} mdOffset={1} >
            <Image id='melImage' src={require('./MyPicture.jpg')} alt={'founder Melissa'} rounded responsive />
          </Col>
        </Row>
      </Grid>

    );
  }
}

export {HomePage};
