import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { moviesQuery } from './queries';
import { deleteMovieMutation } from './mutations';
import { styles } from './styles';

const withGraphQL = compose(
  graphql(moviesQuery, {
    options: ({ name = '' }) => ({
      variables: { name },
    }),
  }),
  graphql(deleteMovieMutation, {
    props: ({ mutate }) => ({
      deleteMovie: (id) =>
        mutate({
          variables: { id },
          refetchQueries: [{ query: moviesQuery, variables: { name: '' } }],
        }),
    }),
  }),
);

export default compose(withStyles(styles), withGraphQL);
