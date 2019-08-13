import React from 'react';
import NavBar from '../NavBar.js'
import './NotFound.css'

const NotFound = (props) => {
  return (
    <div>
    <NavBar history={props.history}/>
      <div className="notFoundContainer">
        <p>Sorry, theres nothing here!</p>
      </div>
    </div>
  );
}

export default NotFound;
