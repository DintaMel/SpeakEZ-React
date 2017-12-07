import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  render(){
    return(

      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'><a href='#'>SpeakEZ</a></Link>
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

            <NavItem eventKey={2} title='Practice'><Link to='/QuestionPage'>
            Practice</Link></NavItem>

            <NavItem eventKey={3} href='#'><Link to='/ReviewPage'>Review</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>





    );
  }
}

export {Header};
