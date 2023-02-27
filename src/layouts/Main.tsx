import React, { ReactNode } from 'react';
import { AppFooter, AppHeader, AppMobileHeader, TopButton } from '../components';

interface IProps {
  children: ReactNode;
}

const Main = (props: IProps) => {
  const { children } = props;

  return (
    <div>
      <AppHeader />
      <AppMobileHeader />
      <div className="layout-content-con">{children}</div>
      <AppFooter />
      <TopButton />
    </div>
  );
};

export default Main;
