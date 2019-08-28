import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentBox from './CommentBox'


class Comments extends Component {

  state = {
    comments: []
  }

  render() {
    return (
      <div>
      <CommentBox/>
      <CommentList comments={this.state.comments}/>
      </div>
    );
  }

}

export default Comments;
