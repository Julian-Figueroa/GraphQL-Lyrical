import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  renderSongs() {
    let data = this.props.data;

    if (data.loading) {
      return <div>Loading Songs ...</div>;
    } else {
      return data.songs.map(song => {
        return (
          <li key={song.id} className="collection-item">
            {' '}
            {song.title}{' '}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <ul id="song-list" className="collection">
          {this.renderSongs()}
        </ul>
      </div>
    );
  }
}

const getSongsQuery = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(getSongsQuery)(SongList);
