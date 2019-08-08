import React, { Component } from 'react';
import './about.css'
import NavBar from './NavBar'


class About extends Component {

  render() {
    return (
      <div>
      <NavBar history={this.props.history} />
        <div className='about'>
          <h1>How to use MPCloud:</h1>
          <h2>Quick Start</h2>
            <p>To quickly get started using MPCloud, scroll through the available soundkits and press "load" on a soundkit that catches your eye.
            The drum pads will then load up and you can start playing instantly by either clicking with your mouse or using the letters on your keyboard.
            </p>
            <p>If you're unsure about which letter on your keyboard goes with which sound, hover over the drumpad with your mouse and the name of the sound will pop out.</p>
          <h2>Uploading and Editing Soundkits</h2>
            <p>You can upload your own soundkits to MPCloud! To upload a new soundkit, simply click "Upload Sounds". You will be prompted to make a name and description for your new soundkit, and to choose sounds from your computer which you'd like to upload. Files must be valid audio.
            You'll see a list of files pop up, and if you want to remove any here just click on the "x" inside the unwanted sound.
            To edit the name, description and sounds in any soundkit, click on the "edit" button alongside the soundkit and follow the prompts.
            </p>
        </div>
      </div>
    );
  }

}

export default About;
