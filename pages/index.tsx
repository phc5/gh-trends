import React, { useState } from 'react';

import Layout from '../components/Layout';
import Cards from '../components/Cards';
import withApollo from '../lib/with-apollo';
import { useReposQuery } from '../lib/repos.graphql';

const Index = () => {
  const [language, setLanguage] = useState('javascript');
  const [days, setDays] = useState(365);
  const { data } = useReposQuery({
    variables: {
      language: 'javascript',
      days: 365,
    },
  });

  if (data) {
    const { repos } = data;
    console.log(repos);
  }

  return (
    <Layout setLanguage={setLanguage} setDays={setDays}>
      <Cards language={language} days={days} />
    </Layout>
  );
};

export default withApollo(Index);
