import gql from 'graphql-tag';

const getSongsQuery = gql`
  {
    songs {
      title
      id
      lyrics {
        id
        content
        likes
      }
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
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

const addLyricMutation = gql`
  mutation AddLyricToSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

const addLikeLyricMutation = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export {
  getSongsQuery,
  addSongMutation,
  deleteSongMutation,
  getSongById,
  addLyricMutation,
  addLikeLyricMutation
};
