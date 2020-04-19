// import Link from 'next/link';
import withApollo from '../lib/with-apollo';
import { useReposQuery } from '../lib/repos.graphql';

const Index = () => {
  const { data } = useReposQuery();

  if (data) {
    const { repos } = data;
    console.log(repos);
  }

  return <div>...</div>;
};

export default withApollo(Index);
