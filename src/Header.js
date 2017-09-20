import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends React.Component{
  render(){
    return(

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>SpeakEZ</a>
          </Navbar.Brand>
          {/*Navbar.Toggle combined with Navbar.Collapse will make Navbar
            responsive with hamburger menu on smaller screens*/}
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={1} title='Learn'>
              <MenuItem eventKey={1.1}>Answering Strategies</MenuItem>
              <MenuItem eventKey={1.2}>Body Language</MenuItem>
              <MenuItem eventKey={1.3}>Interview Attire</MenuItem>
              <MenuItem eventKey={1.4}>Useful Resources</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={2} title='Practice'>
              <MenuItem eventKey={2.1}>Behavioral Interview Questions</MenuItem>
              <MenuItem eventKey={2.2}>Technical Interview Questions</MenuItem>
              <MenuItem eventKey={2.3}>Odd Interview Questions</MenuItem>
            </NavDropdown>

            <NavItem eventKey={3} href='#'>Review</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>





    );
  }
}

export {Header};
