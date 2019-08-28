import React, { Component } from 'react';

class CommentList extends Component {

  render() {
      if (this.props.comments.length > 0) {
        return (
          <div>
            {this.props.comments.map(comment => <div>{comment}</div>)}
          </div>
        )
      } else {
        return(
          <div>
            No comments yet
          </div>
        )
      }
  }

}

export default CommentList;
