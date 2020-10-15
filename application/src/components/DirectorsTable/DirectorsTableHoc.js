import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import { directorsQuery } from './queries';
import { deleteDirectorMutation } from './mutations';
import { styles } from './styles';

const withGraphQL = compose(
  graphql(directorsQuery, {
    options: ({ name = '' }) => ({
      variables: { name },
    }),
  }),
  graphql(deleteDirectorMutation, {
    props: ({ mutate }) => ({
      deleteDirector: (id) =>
        mutate({
          variables: { id },
          refetchQueries: [{ query: directorsQuery, variables: { name: '' } }],
        }),
    }),
  }),
);

export default compose(withStyles(styles), withGraphQL);
