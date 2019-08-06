import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
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
        <Navbar.Brand>MPCloud</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-primary" onClick={e => this.handleNewSoundkit()}>Upload Sounds</Button>
          <Button variant="outline-warning" onClick={e => this.handleAbout()}>About</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
