import React, { Component } from 'react';
import CommentList from './CommentList'

class CommentBox extends Component {

  state = {
    comment: '',
    comments: []
  }

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
      this.setState(state => {
        const comments = state.comments.concat(state.comment);
        return {
          comments,
          comment: '',
        };
      });
  }

  onAddItem = () => {
  this.setState(state => {
    const list = state.list.concat(state.value);
    return {
      list,
      value: '',
    };
  });
};

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Add a Comment:
          <input type="text" value={this.state.comment} onChange={e => this.handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }

}

export default CommentBox;
