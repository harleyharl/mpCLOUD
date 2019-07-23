import React, { Component } from 'react';
import Pads from '../components/Pads/Pads'
import { connect } from 'react-redux'
class PadContainer extends Component {

  // componentDidMount(){
  //   debugger
  //   const sounds = this.props.sounds
  //   this.setState({
  //     currentSoundkit: sounds
  //   })
  // }


  render() {
    debugger
    return (
      <div>
        <Pads sounds={this.props.currentSoundkit.sounds}/>
        <div>{this.props.currentSoundkit.description}</div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  currentSoundkit: state.soundKits.currentSoundkit
})

export default connect(mapStateToProps)(PadContainer);
