import React, { ReactElement } from 'react';
import Header from './Header';

export default ({
  children,
  language,
  days,
  setLanguage,
  setDays,
  theme,
}: {
  children: ReactElement;
  language: string;
  days: number;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setDays: React.Dispatch<React.SetStateAction<number>>;
  theme: string;
}) => {
  return (
    <>
      <Header
        setLanguage={setLanguage}
        setDays={setDays}
        language={language}
        days={days}
        theme={theme}
      />
      {children}
    </>
  );
};
