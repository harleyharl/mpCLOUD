import React, { Component } from 'react';

class Pad extends Component {

  render() {
    return (
      <div>
        {this.props.name}<br/>
        <a href={this.props.url}>{this.props.url}</a>
      </div>
    );
  }

}

export default Pad;
