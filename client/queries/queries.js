import gql from 'graphql-tag';

const getSongsQuery = gql`
  {
    songs {
      title
      id
    }
  }
`;

const addSongMutation = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      title
    }
  }
`;

const deleteSongMutation = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const getSongById = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;

export { getSongsQuery, addSongMutation, deleteSongMutation, getSongById };
