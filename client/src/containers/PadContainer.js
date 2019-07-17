import React, { Component } from 'react';
import Pads from '../components/Pads'
import { connect } from 'react-redux'
import { fetchSounds } from '../actions/samplerActions'
class PadContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSoundkit: []
    }
  }

  // componentDidUpdate(){
  //   // debugger
  //   const sounds = this.props.sounds
  //   this.setState({
  //     currentSoundkit: sounds
  //   })
  // }

  render() {
    return (
      <div>
        <Pads sounds={this.props.sounds}/>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  currentSoundkit: state.currentSoundkit
})

export default connect(mapStateToProps, {fetchSounds})(PadContainer);
