import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addLyricMutation } from '../queries/queries';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  onSubmit() {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId
        }
      })
      .then(() => this.setState({ content: '' }))
      .catch(err => console.log('Err: ', err));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric </label>
          <input
            value={this.state.content}
            onChange={event =>
              this.setState({
                content: event.target.value
              })
            }
          />
        </form>
      </div>
    );
  }
}

export default graphql(addLyricMutation)(LyricCreate);
