import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { getSongsQuery, deleteSongMutation } from '../queries/queries';

class SongList extends Component {
  onSongDelete(id) {
    console.log('Props Mutation: ', this.props);

    this.props
      .mutate({
        variables: {
          id
        }
        // refetchQueries: [{ query: getSongsQuery }]
      })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    let data = this.props.data;

    if (data.loading) {
      return <div>Loading Songs ...</div>;
    } else {
      return data.songs.map(({ id, title }) => {
        return (
          <li key={id} className="collection-item">
            <Link to={`/songs/${id}`}>{title}</Link>
            <i
              className="material-icons right"
              onClick={() => this.onSongDelete(id)}
            >
              delete
            </i>
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
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteSongMutation)(graphql(getSongsQuery)(SongList));
