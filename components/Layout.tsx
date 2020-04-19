import React, { ReactElement } from 'react';
import Header from './Header';

export default ({
  children,
  language,
  days,
  setLanguage,
  setDays,
}: {
  children: ReactElement;
  language: string;
  days: number;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setDays: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <Header
        setLanguage={setLanguage}
        setDays={setDays}
        language={language}
        days={days}
      />
      {children}
    </>
  );
};
