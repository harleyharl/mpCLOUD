import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import './NavBar.css'

class NavBar extends Component {

  handleHome() {
    this.props.history.push('/');
  }

  handleNewSoundkit() {
    this.props.history.push('/new');
  }

  handleAbout() {
    this.props.history.push('/about');
  }

  aboutClassName() {
    if (this.props.history.location.pathname === "/about") {
      return "aboutButton"
    }
  }

  newOrEditClassName() {
    if (this.props.history.location.pathname === "/new" || this.props.history.location.pathname.includes("/edit")) {
      return "uploadSoundsButton"
    }
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Button onClick={e => (this.handleHome())} className="homeButton">MPCloud</Button>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-primary" className={this.newOrEditClassName()} onClick={e => this.handleNewSoundkit()}>Upload Sounds</Button>
          <Button variant="outline-warning" className={this.aboutClassName()} onClick={e => this.handleAbout()}>About</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
