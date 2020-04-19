import React, { useState } from 'react';

import Layout from '../components/Layout';
import Cards from '../components/Cards';
import withApollo from '../lib/with-apollo';

const Index = () => {
  const [language, setLanguage] = useState('javascript');
  const [days, setDays] = useState(365);

  return (
    <Layout
      setLanguage={setLanguage}
      setDays={setDays}
      language={language}
      days={days}
    >
      <Cards language={language} days={days} />
    </Layout>
  );
};

export default withApollo(Index);
