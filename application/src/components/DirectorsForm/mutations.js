import { gql } from 'apollo-boost';

export const addDirectorMutation = gql`
  mutation addDirectorMutation($name: String!, $year: Int!) {
    addDirector(name: $name, year: $year) {
      name
    }
  }
`;

export const updateDirectorMutation = gql`
  mutation updateDirectorMutation($id: ID, $name: String!, $year: Int!) {
    updateDirector(id: $id, name: $name, year: $year) {
      name
    }
  }
`;
