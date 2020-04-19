import React, { ReactElement } from 'react';

export default ({
  children,
  setLanguage,
  setDays,
}: {
  children: ReactElement;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  setDays: React.Dispatch<React.SetStateAction<number>>;
}) => {
  console.log(setLanguage, setDays);
  return <div>{children}</div>;
};
