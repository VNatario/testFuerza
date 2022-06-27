import React, { ReactChild, ReactChildren } from 'react';
import { Main } from './style';

type props = {
  children: ReactChild | ReactChildren;
};

export function PageContainer({ children }: props) {
  return <Main>{children}</Main>;
}
