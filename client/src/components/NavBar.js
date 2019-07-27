import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css'

class NavBar extends Component {

  handleNewSoundkit() {
    this.props.history.push('/new');
  }

  handleAbout() {
    this.props.history.push('/about');
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>MPCLOUD 1.0</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={e => this.handleNewSoundkit()}>Upload Sounds</Button>
          <Button onClick={e => this.handleAbout()}>About</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
