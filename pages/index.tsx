import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import Cards from '../components/Cards';
import withApollo from '../lib/with-apollo';
import { languagesMap, colors } from '../constants';

const Index = () => {
  const [language, setLanguage] = useState('all');
  const [days, setDays] = useState(7);
  const [theme, setTheme] = useState('all');

  useEffect(() => {
    let languageKeyValue = Object.entries(languagesMap).find(
      ([key]) => key === language
    );

    const themeColor = languageKeyValue && colors[languageKeyValue[0]];
    themeColor && setTheme(themeColor);
  }, [language]);

  return (
    <Layout
      setLanguage={setLanguage}
      setDays={setDays}
      language={language}
      days={days}
      theme={theme}
    >
      <Cards language={language} days={days} />
    </Layout>
  );
};

export default withApollo(Index);
