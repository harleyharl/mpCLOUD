import React, { Component } from 'react';
import { connect } from 'react-redux'


const AudioComponent = props => (<audio
  ref="audio"
  controls={true}
  src={this.props.currentSound}
  >
</audio>)

const mapStateToProps = state => ({
  currentSound: state.soundKits.currentSound
})

export default connect(mapStateToProps)(AudioComponent);
